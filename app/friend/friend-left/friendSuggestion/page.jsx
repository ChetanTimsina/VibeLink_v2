"use client";
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import "../../local.css";
import Cookies from "js-cookie";
import Link from "next/link";

// Convert binary buffer to base64 for image
const getBase64FromBuffer = (bufferData) => {
  if (!bufferData) return null;
  const byteArray = bufferData.data
    ? new Uint8Array(bufferData.data)
    : new Uint8Array(Object.values(bufferData));

  let binary = "";
  byteArray.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
};

const FriendSuggestion = () => {
  const [nonFriends, setNonFriends] = useState([]);
  const [removedIndexes, setRemovedIndexes] = useState([]);

  useEffect(() => {
    const userId = Cookies.get("vibeUser");
    if (!userId) return;

    const fetchNonFriends = async () => {
      try {
        const response = await fetch("/api/getNonFriends", {
          method: "POST",
          body: JSON.stringify({ userId }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (response.ok) {
          setNonFriends(data);
        } else {
          console.error("Failed to fetch suggestions");
        }
      } catch (err) {
        console.error("Error fetching non-friends:", err);
      }
    };

    fetchNonFriends();
  }, []);

  const renderSuggestionCard = (person, idx) => {
    if (removedIndexes.includes(idx)) return null;

    const base64Image = getBase64FromBuffer(person.userImage);
    const bgImageUrl = base64Image
      ? `url("data:image/png;base64,${base64Image}")`
      : "";

    return (
      <div key={idx} className="friend-container" style={{ display: "block" }}>
        <div
          className="friend-image adjustForImage"
          style={{ backgroundImage: bgImageUrl }}
        ></div>
        <div className="text">
          <h6 className="friend-name">{person.username}</h6>
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={async () => {
              const friendId = person.id;
              const userId = Cookies.get("vibeUser");

              const res = await fetch("/api/send-friend-request", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, friendId }),
              });

              const data = await res.json();
              if (res.ok) {
                alert("Friend Request Sent ✅");
              } else {
                alert(data.error || "Something went wrong ❌");
              }
            }}
          >
            Add Friend
          </button>
          <button
            style={{ backgroundColor: "#e2e5e9" }}
            onClick={() => {
              setRemovedIndexes((prev) => [...prev, idx]);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  };

  const friendSuggestionElements =
    nonFriends.length === 0 ? (
      <p>No friend suggestions at the moment.</p>
    ) : (
      nonFriends.map(renderSuggestionCard)
    );

  return (
    <main id="main-container" className="flex bg-white">
      {/* 🌐 Sidebar */}
      <div className="box-left">
        <div className="box-left-top flex justify-between aic">
          <h3>
            <b>Friends</b>
          </h3>
        </div>
        <div>
          {[
            { href: "/", label: "Home" },
            {
              href: "/friend/friend-left/friendRequest",
              label: "Friend Requests",
            },
            {
              href: "/friend/friend-left/friendSuggestion",
              label: "Suggestion",
            },
            { href: "/friend/friend-left/allFriend", label: "All Friends" },
            { href: "/friend/friend-left/birthday", label: "Birthdays" },
            { href: "/friend/friend-left/customList", label: "Custom List" },
          ].map((link, i) => (
            <section className="left-container" key={i}>
              <section
                className={`left-icon-container`}
                id={`left-icon-${i + 1}`}
              ></section>
              <Link href={link.href}>
                <h6>{link.label}</h6>
              </Link>
            </section>
          ))}
        </div>
      </div>

      <div
        className="box-main flex-column aic gap-2"
        style={{ padding: "3vw" }}
      >
        <div
          className="flex justify-between aic mb-5"
          style={{
            marginBottom: "2vw",
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
          }}
        >
          <h4 style={{ fontSize: "1.5vw" }}>Friend Suggestions</h4>
          <h6 style={{ color: "blue", fontSize: "1.5vw", cursor: "pointer" }}>
            See all
          </h6>
        </div>
        <div id="friend-container-area">{friendSuggestionElements}</div>
      </div>
    </main>
  );
};

export default FriendSuggestion;
