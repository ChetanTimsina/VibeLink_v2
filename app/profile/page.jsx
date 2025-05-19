"use client";
import React, { useEffect, useRef, useState } from "react";
import "./local.css";
import Cookies from "js-cookie";
import "../globals.css";
import "../localsecond.css";
import "../local.css";

const Page = () => {
  const [user, setUser] = useState(null);
  const [story, setStory] = useState(null);
  const [friends, setFriends] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [sImage, setSImage] = useState(null);
  const [sImagePreview, setSImagePreview] = useState(null);
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
        console.error("Image fetch error 💥:", err);
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
            console.error("💀 Error hitting like API:", err);
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
          console.error(err);
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

  // Convert Prisma raw buffer/object to base64 string
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

  const storyImageSrc = user?.userImage
    ? `data:image/png;base64,${getBase64FromBuffer(user.story)}`
    : "/Images/profile.svg";
  // Fetch user data
  const userId = Cookies.get("vibeUser");
  if (!userId) return null;

  const fetchUsername = async () => {
    try {
      const res = await fetch("/api/registed/withid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: parseInt(userId) }),
      });

      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json();
      setUser(data.user);
    } catch (error) {
      console.error("Fetch error:", error);
      setUser({ username: "Unknown" });
    }
  };

  useEffect(() => {
    fetchUsername();
  }, []);

  // Fetch friends
  useEffect(() => {
    const fetchFriends = async () => {
      const userId = Cookies.get("vibeUser");
      if (!userId) {
        console.error("No user found in cookies");
        return;
      }

      try {
        const res = await fetch("/api/getFriends", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        if (!res.ok) throw new Error("Failed to fetch friends");
        const data = await res.json();
        setFriends(data);
      } catch (err) {
        console.error("Error fetching friends:", err);
      }
    };

    fetchFriends();
  }, []);

  // Profile image handlers
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImage(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setImage(null);
    document.getElementById("fileInput").value = "";
  };

  const handlePost = async (e) => {
    e.preventDefault();

    const userId = Cookies.get("vibeUser");

    const formData = new FormData();
    formData.append("id", userId);
    formData.append("image", image);

    try {
      const res = await fetch("/api/users/withidprofile", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        console.log("Profile Change successfully");
        alert("Profile Change successfully");
        setImagePreview(null);
        setImage(null);
        fetchUsername();
      } else {
        alert("Profile Change error");
      }
    } catch (err) {
      console.error("Error uploading post:", err);
    }
  };

  // Story image handlers
  const shandleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSImagePreview(URL.createObjectURL(file));
      setSImage(file);
    }
  };

  const sRemoveImage = () => {
    setSImagePreview(null);
    setSImage(null);
    document.getElementById("SfileInput").value = "";
  };

  const ShandlePost = async (e) => {
    e.preventDefault();

    const userId = Cookies.get("vibeUser");

    const formData = new FormData();
    formData.append("id", userId);
    formData.append("image", sImage);

    try {
      const res = await fetch("/api/users/withidstory", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        console.log("Story Change successfully");
        alert("Story Change successfully");
        setSImagePreview(null);
        setSImage(null);
        fetchUsername();
      } else {
        alert("Story Change error");
      }
    } catch (err) {
      console.error("Error uploading post:", err);
    }
  };

  return (
    <div style={{ marginTop: "7vw" }}>
      <div className="top-main">
        <section
          className="top-main-above"
          style={{
            backgroundImage: `url(${storyImageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
          }}
        >
          <button
            onClick={() => {
              document.querySelector(".story-choose-container").style.display =
                "flex";
            }}
          >
            Add Story
          </button>
          <div className="story-choose-container">
            <div className="story-choose">
              <h1>Choose your story picture</h1>
              <br />
              <hr />
              <br />
              <form onSubmit={ShandlePost}>
                <div className="file-upload" style={{ position: "relative" }}>
                  <label
                    htmlFor="SfileInput"
                    style={{
                      backgroundImage: sImagePreview
                        ? `url(${sImagePreview})`
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      width: "100%",
                      height: "200px",
                      border: "2px dashed #ccc",
                      borderRadius: "10px",
                    }}
                  >
                    {!sImage && <span>Upload Image</span>}
                  </label>

                  <input
                    type="file"
                    id="SfileInput"
                    onChange={shandleFileChange}
                  />

                  {sImage && (
                    <button
                      type="button"
                      onClick={sRemoveImage}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#64e968",
                    border: "1px solid black",
                    height: "3vw",
                    marginTop: "2vw",
                    width: "6vw",
                  }}
                  onClick={() => {
                    document.querySelector(
                      ".story-choose-container"
                    ).style.display = "none";
                  }}
                >
                  Go Back
                </button>
                <button
                  style={{
                    backgroundColor: "#64e968",
                    border: "1px solid black",
                    height: "3vw",
                    marginTop: "2vw",
                    marginLeft: "2vw",
                    width: "6vw",
                  }}
                  onClick={() => {
                    document.querySelector(
                      ".story-choose-container"
                    ).style.display = "none";
                  }}
                >
                  Select
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="top-main-below">
          <div
            className="profile-image adjustForImage profile-profile"
            style={{
              backgroundImage: `url(${profileImageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              document.querySelector(
                ".profile-choose-container"
              ).style.display = "flex";
            }}
          ></div>

          <div className="profile-choose-container">
            <div className="profile-choose">
              <h1>Choose your Profile picture</h1>
              <br />
              <hr />
              <br />
              <form onSubmit={handlePost}>
                <div className="file-upload" style={{ position: "relative" }}>
                  <label
                    htmlFor="fileInput"
                    style={{
                      backgroundImage: imagePreview
                        ? `url(${imagePreview})`
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      width: "100%",
                      height: "200px",
                      border: "2px dashed #ccc",
                      borderRadius: "10px",
                    }}
                  >
                    {!image && <span>Upload Image</span>}
                  </label>

                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                  />

                  {image && (
                    <button
                      type="button"
                      onClick={removeImage}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#64e968",
                    border: "1px solid black",
                    height: "3vw",
                    marginTop: "2vw",
                    width: "6vw",
                  }}
                  onClick={() => {
                    document.querySelector(
                      ".profile-choose-container"
                    ).style.display = "none";
                  }}
                >
                  Select
                </button>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#64e968",
                    border: "1px solid black",
                    height: "3vw",
                    marginTop: "2vw",
                    marginLeft: "2vw",
                    width: "6vw",
                  }}
                  onClick={() => {
                    document.querySelector(
                      ".profile-choose-container"
                    ).style.display = "none";
                  }}
                >
                  Go back
                </button>
              </form>
            </div>
          </div>

          <div className="user-details">
            <h6 style={{ fontSize: "2vw" }}>{user?.username}</h6>
            <h6 style={{ fontSize: "1vw" }}>{friends.length} friends</h6>
          </div>

          <div className="user-details-edit">
            <button>Edit Profile</button>
            <button className="edit">▼</button>
          </div>
        </section>
        <br />
        <br />
        <hr />
        {/* <!-- Post Template --> */}
        <div style={{ display: "none" }}>
          <div className="post-container flex aic flex-column">
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
        <div id="post-container-area"></div>
      </div>
    </div>
  );
};

export default Page;
