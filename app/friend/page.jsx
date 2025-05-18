"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import "./local.css";
import Cookies from "js-cookie";

const getBase64FromBuffer = (bufferData) => {
  if (!bufferData) return null;

  const byteArray = bufferData.data
    ? new Uint8Array(bufferData.data)
    : new Uint8Array(Object.values(bufferData));

  let binary = "";
  byteArray.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
};

const Friend = () => {
  const [nonFriends, setNonFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const userId = Cookies.get("vibeUser");
      if (!userId) return;
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
    fetchFriends();
  }, []);

  const friendSuggestionElements =
    nonFriends.length === 0 ? (
      <p>No friend suggestions at the moment.</p>
    ) : (
      nonFriends.map((person, idx) => {
        const base64Image = getBase64FromBuffer(person.userImage);
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
              <h6 className="friend-name">{person.username}</h6>
              <button style={{ backgroundColor: "blue", color: "white" }}>
                Add Friend
              </button>
              <button style={{ backgroundColor: "#e2e5e9" }}>Remove</button>
            </div>
          </div>
        );
      })
    );

  return (
    <main id="main-container" className="flex bg-white">
      <div className="box-left">
        <div className="box-left-top flex justify-between aic">
          <h3>
            <b>Friends</b>
          </h3>
          <section className="left-icon-container" id="left-icon-0"></section>
        </div>
        <div>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-1"></section>
            <Link href="/">
              <h6>Home</h6>
            </Link>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-2"></section>
            <Link href="/friend/friend-left/friendRequest" target="_self">
              <h6>Friend Requests</h6>
            </Link>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-3"></section>
            <Link href="/friend/friend-left/friendSuggestion">
              <h6>Suggestion</h6>
            </Link>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-4"></section>
            <Link href="/friend/friend-left/allFriend">
              <h6>All friends</h6>
            </Link>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-5"></section>
            <Link href="/friend/friend-left/birthday">
              <h6>Birthdays</h6>
            </Link>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-6"></section>
            <Link href="/friend/friend-left/customList">
              <h6>Custom list</h6>
            </Link>
          </section>
        </div>
      </div>

      <div className="box-main p-5">
        {/* Friend Suggestions Header */}
        <div
          className="flex justify-between aic"
          style={{ marginBottom: "2vw" }}
        >
          <h4 style={{ fontSize: "1.5vw" }}>Friend Suggestions</h4>
          <h6 style={{ color: "blue", fontSize: "1.5vw" }}>See all</h6>
        </div>

        {/* Friend Suggestions Container */}
        <div id="friend-container-area">{friendSuggestionElements}</div>
      </div>
    </main>
  );
};

export default Friend;
