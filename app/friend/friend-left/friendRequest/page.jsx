"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "@/app/globals.css";
import "../../local.css";
import Cookies from "js-cookie";

// 🔁 Helper to convert buffer to base64
const getBase64FromBuffer = (bufferData) => {
  if (!bufferData) return null;
  const byteArray = bufferData.data
    ? new Uint8Array(bufferData.data)
    : new Uint8Array(Object.values(bufferData));
  let binary = "";
  byteArray.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
};

const FriendRequest = () => {
  const [nonFriends, setNonFriends] = useState([]);
  const [incomingRequests, setIncomingRequests] = useState([]);

  useEffect(() => {
    const userId = Cookies.get("vibeUser");
    if (!userId) return;

    const fetchFriends = async () => {
      try {
        const response = await fetch("/api/getNonFriends", {
          method: "POST",
          body: JSON.stringify({ userId }),
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("Fetch failed");
        const data = await response.json();
        setNonFriends(data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchIncomingRequests = async () => {
      try {
        const response = await fetch("/api/get-friend-request", {
          method: "POST",
          body: JSON.stringify({ userId }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();
        setIncomingRequests(data.requests || []);
      } catch (err) {
        console.error("Error fetching incoming requests:", err);
      }
    };

    fetchFriends();
    fetchIncomingRequests();
  }, []);

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

      {/* 🫂 Main Content */}
      <div
        className="box-main flex-column aic gap-2"
        style={{ padding: "2vw" }}
      >
        <div className="flex justify-between aic mb-5">
          <h4 style={{ fontSize: "1.5vw", marginBottom: "3vw" }}>
            Friend Requests
          </h4>
        </div>

        <div id="friend-requests-container" className="mb-10">
          {incomingRequests.length === 0 ? (
            <p>No friend requests.</p>
          ) : (
            incomingRequests.map((request, idx) => {
              const user = request.user;
              const base64Image = getBase64FromBuffer(user.userImage);
              const bgImageUrl = base64Image
                ? `url("data:image/png;base64,${base64Image}")`
                : "";

              return (
                <div
                  key={idx}
                  className="friend-container"
                  style={{ display: "block" }}
                >
                  <div
                    className="friend-image adjustForImage"
                    style={{ backgroundImage: bgImageUrl }}
                  ></div>
                  <div className="text">
                    <h6 className="friend-name">{user.username}</h6>

                    <button
                      style={{ backgroundColor: "green", color: "white" }}
                      onClick={async () => {
                        try {
                          const userId = Cookies.get("vibeUser");
                          const friendId = user.id;

                          const res = await fetch(
                            "/api/friend-request-accept",
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ userId, friendId }),
                            }
                          );

                          const data = await res.json();
                          if (!res.ok)
                            throw new Error(data.error || "Accept failed");

                          alert("Friend request accepted!");
                          setIncomingRequests((prev) =>
                            prev.filter((req) => req.user.id !== friendId)
                          );
                        } catch (error) {
                          alert("Error accepting request: " + error.message);
                        }
                      }}
                    >
                      Accept
                    </button>

                    <button
                      style={{ backgroundColor: "#e2e5e9" }}
                      onClick={async () => {
                        try {
                          const userId = Cookies.get("vibeUser");
                          const friendId = user.id;

                          const res = await fetch(
                            "/api/friend-request-reject",
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ userId, friendId }),
                            }
                          );

                          const data = await res.json();
                          if (!res.ok)
                            throw new Error(data.error || "Reject failed");

                          alert("Friend request rejected!");
                          setIncomingRequests((prev) =>
                            prev.filter((req) => req.user.id !== friendId)
                          );
                        } catch (error) {
                          alert("Error rejecting request: " + error.message);
                        }
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default FriendRequest;
