"use client";
import React, { useRef, useState } from "react";
import "@/app/globals.css";
import "../friend/local.css";
import "../local.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { toastBottomRight } from "@/app/lib/toastify";

const Group = () => {
  const user = Cookies.get("vibeUser");
  const getBase64FromBuffer = (bufferData) => {
    if (!bufferData) return null;

    // Prisma might send it as an object with keys as indexes or a data property
    const byteArray = bufferData.data
      ? new Uint8Array(bufferData.data)
      : new Uint8Array(Object.values(bufferData));

    let binary = "";
    byteArray.forEach((b) => (binary += String.fromCharCode(b)));
    return btoa(binary);
  };

  // Profile image src with base64 fallback
  const profileImageSrc = user?.userImage
    ? `data:image/png;base64,${getBase64FromBuffer(user.userImage)}`
    : "/Images/profile.svg";

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const user = Cookies.get("vibeUser");

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
  const [posts, setPosts] = useState([]);
  const postTemplateRef = useRef(null);
  const postContainerRef = useRef(null);

  useEffect(() => {
    postTemplateRef.current = document.querySelector(".post-container");
    postContainerRef.current = document.querySelector("#post-container-area");
  }, []);
  async function createPosts() {
    const allPosts = []; // Accumulate posts here

    for (const friend of friends) {
      try {
        const res = await fetch(`/api/getimage?friendid=${friend.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Failed to fetch images");

        const data = await res.json();

        // Add fetched posts to accumulator
        allPosts.push(...data);
      } catch (err) {
        toastBottomRight("Image fetch error 💥:", err);
      }
    }

    setPosts(allPosts);
    console.log("✅ Posts state updated:", allPosts);

    // Render posts after state update
    const postTemplate = postTemplateRef.current;
    const postContainer = postContainerRef.current;

    if (postContainer) {
      postContainer.innerHTML = "";
    }

    for (const post of allPosts) {
      const postClone = postTemplate.cloneNode(true);
      postClone.style.display = "block";

      postClone.querySelector("#react").addEventListener("dblclick", () => {
        const reactionBox = postClone.querySelector("#reaction-container-1");

        // Toggle display between 'none' and 'flex'
        if (reactionBox.style.display === "flex") {
          reactionBox.style.display = "none";
        } else {
          reactionBox.style.display = "flex";
        }
      });

      postClone.querySelectorAll(".reactor").forEach((reactor) => {
        let liked = false; // flag to block multiple likes per session

        reactor.addEventListener("click", async () => {
          if (liked) return; // no spamming

          try {
            const res = await fetch("/api/postLikeIncrease", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ postid: post.postid }),
            });

            const data = await res.json();

            if (res.ok) {
              liked = true;
              console.log("🔥 Post liked!", data);
              // Disable all like buttons in this postClone
              postClone
                .querySelectorAll(".reactor")
                .forEach((btn) => (btn.disabled = true));
            } else {
              console.warn("😵 Server rejected like:", data.error);
            }
          } catch (err) {
            toastBottomRight("💀 Error hitting like API:", err);
          }
        });
      });

      const res = await fetch("/api/getAuthor/getAuthorName", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: post.postid }),
      });
      const data = await res.json();
      const postAuthorImageSrc = data?.userImage
        ? `data:image/png;base64,${getBase64FromBuffer(data.userImage)}`
        : "/Images/profile.svg";

      // 🖼️ Set post image (base64 from DB)
      const postImage = postClone.querySelector(".post-image");
      const postTitleLocal = postClone.querySelector(".post-title-local");
      const reactCount = postClone.querySelector(".react-count");

      if (postImage) {
        if (post.postImage) {
          postImage.style.backgroundImage = `url("data:image/png;base64,${post.postImage}")`;
        } else {
          postImage.style.backgroundImage = `url("https://via.placeholder.com/700x600?text=No+Image")`;
        }
      }

      postTitleLocal.innerHTML = post.postTitle;
      reactCount.innerHTML = post.postLikes ?? 0;

      const wrongIcon = postClone.querySelector(".wrong-icon");
      if (wrongIcon) {
        wrongIcon.addEventListener("click", () => {
          postClone.style.display = "none";
        });
      }

      async function getAuthorUsername(postid) {
        try {
          const res = await fetch(`/api/getAuthor?postid=${postid}`);
          if (!res.ok) throw new Error("Failed to fetch author");

          const data = await res.json();
          return data.username || "Unknown Author";
        } catch (err) {
          toastBottomRight(err);
          return "Unknown Author";
        }
      }

      postClone.querySelector(
        "#post-icon"
      ).style.backgroundImage = `url(${postAuthorImageSrc})`;
      async function setPostAuthor(postClone, postid) {
        const postAuthor = postClone.querySelector(".post-name");
        if (postAuthor) {
          const username = await getAuthorUsername(postid);
          postAuthor.textContent = username;
        }
      }
      const post_created_at = postClone.querySelector(".post-created-at");
      const dateObj = new Date(post.postCreatedAt);
      const formattedDate = `${String(dateObj.getDate()).padStart(
        2,
        "0"
      )}/${String(dateObj.getMonth() + 1).padStart(
        2,
        "0"
      )}/${dateObj.getFullYear()}`;
      post_created_at.textContent = formattedDate;

      // 🧾 Set post description
      const postDescription = postClone.querySelector(".post-description");
      if (postDescription) {
        postDescription.textContent =
          post.postDescription || "No description available.";
      }

      // 🆔 Set post ID (optional display or data attribute)
      postClone.setAttribute("data-post-id", post.postid);
      await setPostAuthor(postClone, post.postid);
      postContainer.appendChild(postClone);
    }
  }

  useEffect(() => {
    createPosts();
  }, [friends]);

  return (
    <main id="main-container" className="flex bg-white">
      <div className="box-left">
        <div className="box-left-top flex justify-content-between aic">
          <h3>
            <b>Groups</b>
          </h3>
          <section className="left-icon-container" id="left-icon-0"></section>
        </div>
        <div>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-1"></section>
            <a href="/">
              {" "}
              <h6>Home</h6>
            </a>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-2"></section>
            <a href="/friend/friend-left/friendRequest" target="_self">
              <h6>Friend Requests</h6>
            </a>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-3"></section>
            <a href="/friend/friend-left/friendSuggestion">
              <h6>Suggestion</h6>
            </a>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-4"></section>
            <a href="/friend/friend-left/allFriend">
              <h6>All friends</h6>
            </a>
          </section>
          <section className="left-container">
            <section
              className="left-icon-container"
              id="left-icon-16"
            ></section>
            <a href="/friend">
              <h6>Friends</h6>
            </a>
          </section>
          <section className="left-container">
            <section
              className="left-icon-container"
              id="left-icon-15"
            ></section>
            <a href="/Index-left/broAI.html">
              <h6>Bro AI</h6>
            </a>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-5"></section>
            <a href="/friend/friend-left/birthday">
              <h6>Birthdays</h6>
            </a>
          </section>
          <section className="left-container">
            <section className="left-icon-container" id="left-icon-6"></section>
            <a href="/friend/friend-left/customList">
              <h6>Custom list</h6>
            </a>
          </section>
        </div>
      </div>

      <div className="box-main p-5">
        {/* <!-- Post Template --> */}
        <div style={{ display: "none" }}>
          <div
            className="post-container flex aic flex-column"
            style={{ width: "50vw", margin: "0 auto" }}
          >
            <section
              className="post-top flex aic gap-2"
              style={{ width: "100%" }}
            >
              <div className="flex aic" style={{ gap: "1vw" }}>
                <div id="post-icon" className="adjustForImage"></div>
                <div className="post-title flex flex-column jcc">
                  <p className="post-name">
                    <b>Kuchi Bigboy</b>
                  </p>
                  <p className="post-created-at">April 10 at 3:54PM</p>
                </div>
              </div>
              <div className="flex" style={{ gap: "2vw" }}>
                <section className="more-icon adjustForImage"></section>
                <section className="wrong-icon adjustForImage"></section>
              </div>
            </section>
            <h3 className="post-title-local">Post title or description</h3>
            <div className="post-image"></div>
            <hr />
            <div
              className="flex aic"
              style={{ justifyContent: "space-between", gap: "3vw" }}
            >
              <section className="post-bottom-icon-container">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5vw",
                  }}
                >
                  <div
                    className="post-bottom-icon adjustForImage"
                    id="react"
                  ></div>
                  <p>Like</p>
                  <section id="reaction-container-1">
                    <div className="react-4 reactor"></div>
                    <div className="react-5 reactor"></div>
                    <div className="react-6 reactor"></div>
                    <div className="react-7 reactor"></div>
                    <div className="react-8 reactor"></div>
                    <div className="react-9 reactor"></div>
                    <div className="react-10 reactor"></div>
                  </section>
                </div>
                <div className="flex aic justify-content-between">
                  <section id="reaction-container">
                    <div className="react-1"></div>
                    <div className="react-2"></div>
                    <div className="react-3"></div>
                    <p className="react-count">100</p>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* <!-- Post Section--> */}

        <div id="post-container-area"></div>
      </div>
    </main>
  );
};

export default Group;
