"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import "../../local.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { toastBottomRight } from "@/app/lib/toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AllFriend = () => {
  const router = useRouter();
  const getBase64FromBuffer = (bufferData) => {
    if (!bufferData) return null;
    const byteArray = bufferData.data
      ? new Uint8Array(bufferData.data)
      : new Uint8Array(Object.values(bufferData));

    let binary = "";
    byteArray.forEach((b) => (binary += String.fromCharCode(b)));
    return btoa(binary);
  };
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const user = Cookies.get("vibeUser"); // Get userId from cookie

      if (!user) {
        toastBottomRight("No user found in cookies");
        return;
      }

      try {
        const res = await fetch("/api/getFriends", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: user }),
        });

        if (!res.ok) throw new Error("Failed to fetch friends");

        const data = await res.json();
        setFriends(data);
      } catch (err) {
        toastBottomRight("Error fetching friends:", err);
      }
    };

    fetchFriends();
  }, []);
  console.log(friends);

  const renderCard = (person, idx) => {
    const base64Image = getBase64FromBuffer(person.userImage);
    const bgImageUrl = base64Image
      ? `url("data:image/png;base64,${base64Image}")`
      : "";

    return (
      <div
        key={idx}
        className="friend-container"
        style={{ display: "block", height: "20vw" }}
      >
        <div
          className="friend-image adjustForImage"
          style={{ backgroundImage: bgImageUrl, height: "80%" }}
          onClick={() => {
            router.push(`/profile?userId=${person.id}`);
          }}
        ></div>
        <hr />
        <div className="text" style={{ textAlign: "center" }}>
          <h6 className="friend-name">{person.username}</h6>
        </div>
      </div>
    );
  };
  const friendElements =
    friends.length === 0 ? (
      <p>No friend suggestions at the moment.</p>
    ) : (
      friends.map(renderCard)
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
          <h4 style={{ fontSize: "1.5vw" }}>Friends</h4>
          <h6 style={{ color: "blue", fontSize: "1.5vw", cursor: "pointer" }}>
            See all
          </h6>
        </div>
        <div id="friend-container-area">{friendElements}</div>
      </div>
    </main>
  );
};

export default AllFriend;
