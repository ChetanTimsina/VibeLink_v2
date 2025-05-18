"use client";
import React, { useEffect, useState } from "react";
import "./local.css";
import Cookies from "js-cookie";
import "../globals.css";
import "../localsecond.css";

const Page = () => {
  const [user, setUser] = useState(null);
  const [story, setStory] = useState(null);
  const [friends, setFriends] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [sImage, setSImage] = useState(null);
  const [sImagePreview, setSImagePreview] = useState(null);

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
      </div>
    </div>
  );
};

export default Page;
