"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import "../../local.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { toastBottomRight } from "@/app/lib/toastify";

const AllFriend = () => {
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
  return (
    <main id="main-container" className="flex bg-white">
      <div className="box-left">
        <div className="box-left-top aic">
          <h3>
            <b>All Friend</b>
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
          <div className="friend-request-container flex">
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

export default AllFriend;
