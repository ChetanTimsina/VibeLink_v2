"use client";
import React from "react";
import "@/app/globals.css";
import "../../local.css";
import { useEffect } from "react";

const FriendRequest = () => {
  useEffect(() => {
    const friend_request_container = document.querySelector(
      ".friend-request-container"
    );
    const friend_request_card = document.querySelector(".friend-request-card");
    for (let i = 0; i < 10; i++) {
      const friend_request_clone = friend_request_card.cloneNode(true);
      friend_request_clone.style.display = "block";
      friend_request_clone.querySelector(
        ".friend-avatar"
      ).style.backgroundImage = `url("https://i.pravatar.cc/100?u=${i}")`;
      fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => {
          let person = data.results[0];
          friend_request_clone.querySelector(
            ".friend-name"
          ).innerHTML = `${person.name.first} ${person.name.last}`;
        });
      friend_request_clone.addEventListener("click", () => {
        let image =
          friend_request_clone.querySelector(".friend-avatar").style
            .backgroundImage;
        let name = friend_request_clone.querySelector(".friend-name").innerHTML;
        document.querySelector(".profile-name").innerHTML =
          name +
          `<div class="friend-request-actions d-flex jcc mt-2">
                    <button class="btn-confirm">Confirm</button>
                    <button class="btn-delete">Delete</button>
                  </div>`;
        document.querySelector("#selectProfileImage").style.backgroundImage =
          image;
        document.querySelector("#selectProfileImage").style.borderRadius =
          "50%";
        document.querySelector("#selectProfileImage").style.border =
          "2px solid black";
      });
      friend_request_container.appendChild(friend_request_clone);
    }
  }, []);
  return (
    <main id="main-container" className="flex bg-white">
      <div className="box-left">
        <div className="box-left-top aic">
          <h3>
            <b>Friend Request</b>
          </h3>
          <section className="left-icon-container" id="left-icon-0"></section>
        </div>
        <div>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-1"></section>
            <a href="/friend">
              <h6>Friend</h6>
            </a>
          </section>
          <div className="friend-request-container flex flex-column">
            <div
              className="friend-request-card flex"
              style={{ display: "none" }}
            >
              <div className="friend-request-info">
                <div
                  className="friend-avatar"
                  style={{
                    backgroundImage:
                      "url('https://i.pravatar.cc/100?u=randomSeed')",
                  }}
                ></div>
                <p className="friend-name">Loading name</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="box-main flex-column aic gap-2"
        style={{ padding: "8vw" }}
      >
        <div id="selectProfileImage" className="adjustForImage"></div>
        <h4
          className="profile-name"
          style={{ color: "#65686c", textAlign: "center" }}
        >
          Select people's names to preview their profile.
        </h4>
      </div>
    </main>
  );
};

export default FriendRequest;
