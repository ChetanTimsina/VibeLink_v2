"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import "./local.css";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { toastBottomRight } from "@/app/lib/toastify";
import { useRouter } from "next/navigation";

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
  const [incomingRequests, setIncomingRequests] = useState([]);

  const router = useRouter();

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
        toastBottomRight(err);
      }
    };

    const fetchIncomingRequests = async () => {
      try {
        const userId = Cookies.get("vibeUser");
        const response = await fetch("/api/get-friend-request", {
          method: "POST",
          body: JSON.stringify({ userId }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();

        setIncomingRequests(data.requests || []);
      } catch (err) {
        toastBottomRight("Error fetching incoming requests:", err);
      }
    };

    fetchFriends();
    fetchIncomingRequests();
  }, []);

  const [removedIndexes, setRemovedIndexes] = useState([]);

  const renderSuggestionCard = (person, idx) => {
    if (removedIndexes.includes(idx)) return null; // skip rendering removed ones

    const base64Image = getBase64FromBuffer(person.userImage);
    const bgImageUrl = base64Image
      ? `url("data:image/png;base64,${base64Image}")`
      : "";

    return (
      <div key={idx} className="friend-container" style={{ display: "block" }}>
        <div
          className="friend-image adjustForImage"
          style={{ backgroundImage: bgImageUrl }}
          onClick={() => {
            router.push(`/profile?userId=${person.id}`);
          }}
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
              console.log(data);
              if (res.ok) {
                toast.success("✨Friend Request Sent");
              }
              if (!res.ok)
                throw new Error(data.error || "Something went wrong");
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
        {/* 🫂 Friend Requests Header */}
        <div className="flex justify-between aic mb-5">
          <h4 style={{ fontSize: "1.5vw" }}>Friend Requests</h4>
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
                    onClick={() => {
                      router.push(`/profile?userId=${user?.id}`);
                    }}
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

                          toast.success("✨Friend request accepted!");
                          setIncomingRequests((prev) =>
                            prev.filter((req) => req.user.id !== friendId)
                          );
                        } catch (error) {
                          toastBottomRight(
                            "✨Error accepting friend request: " + error.message
                          );
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

                          toast.success("✨Friend request rejected!");
                          setIncomingRequests((prev) =>
                            prev.filter((req) => req.user.id !== friendId)
                          );
                        } catch (error) {
                          toastBottomRight(
                            "Error rejecting friend request: " + error.message
                          );
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

        {/* 🧠 Friend Suggestions Header */}
        <div className="flex justify-between aic mb-5">
          <br />
          <br />
          <br />
          <div
            style={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ fontSize: "1.5vw" }}>Friend Suggestions</h4>
            <h6 style={{ color: "blue", fontSize: "1.5vw" }}>See all</h6>
          </div>
        </div>
        <div id="friend-container-area">{friendSuggestionElements}</div>
      </div>
    </main>
  );
};

export default Friend;
