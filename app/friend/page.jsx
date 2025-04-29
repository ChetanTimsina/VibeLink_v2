"use client";
import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import "./local.css";
import { useEffect } from "react";

const Friend = () => {
  useEffect(() => {
    let randomSeed = new Date().getTime();

    // Friend Request
    const friendTemplate = document.querySelector(".friend-container");
    const friendContainer = document.querySelector("#friend-container-area");
    for (let i = 0; i < 12; i++) {
      const friendClone = friendTemplate.cloneNode(true);
      friendClone.style.display = "block";
      const friendImage = friendClone.querySelector(".friend-image");
      if (friendImage) {
        friendImage.style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
      }
      friendContainer.appendChild(friendClone);
      randomSeed++;
    }

    // Friend Suggestion
    const friendSuggestTemplate = document.querySelector(".friend-container-2");
    const friendSuggestContainer = document.querySelector(
      "#friend-container-area-2"
    );
    for (let i = 0; i < 12; i++) {
      const friendSuggestClone = friendSuggestTemplate.cloneNode(true);
      friendSuggestClone.style.display = "block";
      const friendSuggestImage =
        friendSuggestClone.querySelector(".friend-image");
      if (friendSuggestImage) {
        friendSuggestImage.style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
      }
      friendSuggestContainer.appendChild(friendSuggestClone);
      randomSeed++;
    }
  }, []);
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
        {/* <!-- Friend Requests --> */}

        <div
          className="flex justify-between aic"
          style={{ marginBottom: "2vw" }}
        >
          <h4 style={{ fontSize: "1.5vw" }}>Friend Requests</h4>
          <h6 style={{ color: "blue", fontSize: "1.5vw" }}>See all</h6>
        </div>
        <div id="friend-container-area">
          <div className="friend-container" style={{ display: "none" }}>
            <div className="friend-image adjustForImage"></div>

            <div className="text">
              <h6>Spartacus Ganesh Aries</h6>
              <button style={{ backgroundColor: "blue", color: "white" }}>
                Confirm
              </button>
              <button style={{ backgroundColor: "#e2e5e9" }}>Delete</button>
            </div>
          </div>
        </div>

        {/* <!-- Friend Suggestion --> */}

        <div className="flex justify-between" style={{ marginBottom: "2vw" }}>
          <h4 style={{ fontSize: "1.5vw" }}>People you may know</h4>
          <h6 style={{ color: "blue", fontSize: "1.5vw" }}>See all</h6>
        </div>
        <div id="friend-container-area-2">
          <div className="friend-container-2" style={{ display: "none" }}>
            <div className="friend-image adjustForImage"></div>

            <div className="text">
              <h6>Siri Zawa</h6>
              <button style={{ color: "blue", backgroundColor: "#ebf5ff" }}>
                Add Friend
              </button>
              <button style={{ backgroundColor: "#e2e5e9" }}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Friend;
