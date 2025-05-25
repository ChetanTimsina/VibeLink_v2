"use client";
import "@/app/globals.css";
import "./local.css";
import "./localsecond.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { toastBottomRight } from "@/app/lib/toastify";

const userId = Cookies.get("vibeUser");

export default function Home() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [ImagePreview, setImagePreview] = useState(null);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    if (!userId) return;

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
        toastBottomRight("Fetch error:", error);
        setUser({ username: "Unknown" });
      }
    };

    fetchUsername();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // for showing preview
      setImage(file); // real file for upload
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setImage(null);

    document.querySelector;
    document.getElementById("fileInput").value = ""; // reset file input manually
  };
  const handlePost = async (e) => {
    e.preventDefault();

    // 1. Get user from localStorage
    // const user = JSON.parse(localStorage.getItem("vibeUser"));
    const user = Cookies.get("vibeUser");

    // 2. Validate form
    // if (!text || !image) {
    //   alert("Text and image are required");
    //   return;
    // }

    // console.log(text);
    // console.log(image);
    try {
      // 3. Prepare form data
      const formData = new FormData();
      formData.append("postTitle", text);
      formData.append("image", image);
      formData.append("authorId", user);

      // 4. Send to API
      const res = await fetch("/api/uploadPost", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        console.log("Post uploaded successfully");
        toast.success("✨Post uploaded successfully");
        setText("");
        setImagePreview(null);
        setImage(null);
        createPosts();
      } else {
        toast.error("🚨Post uploaded error");
      }
    } catch (err) {
      toastBottomRight("Error uploading post:", err);
    }
  };

  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by reading the cookie
    const isLoggedIn = Cookies.get("isLoggedIn");

    if (!isLoggedIn) {
      // Redirect to InitialPage (login page) if not logged in
      router.push("/InitialPage");
    }
  }, [router]);

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
  useEffect(() => {
    if (friends.length === 0) return;
    const contact_containers = document.querySelectorAll(".contact-container");
    const friend_template = document.querySelector(".friend-template");

    let randomSeed = 1;

    // const friends = [
    //   "BIJAY CHETTRI",
    //   "CHETAN TIMSINA",
    //   "CHIMI GYELTSHEN",
    //   "CHONEY RANGDEL",
    //   "DAMBER KHATIWARA",
    //   "DORJI GYELTSHEN",
    //   "GYELTSHEN LEPCHA",
    //   "JIGME TSHERAB DAMCHOE",
    //   "JIGME TSHEWANG YOEZER",
    //   "KARMA SONAM",
    //   "KARMA WANGCHUK TITUNG",
    //   "KELZANG PENJOR",
    //   "KEZANG TSHOMO",
    //   "KINLEY PHUNTSHO",
    // ];

    // for (let i = 0; i < 14; i++) {
    //   contact_containers.forEach((contact_container) => {
    //     const friendClone = friend_template.cloneNode(true);
    //     friendClone.style.display = "flex";
    //     friendClone.querySelector(".contact-name").textContent = friends[i];
    //     friendClone.querySelector(
    //       ".box-right-icon"
    //     ).style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
    //     randomSeed++;
    //     contact_container.appendChild(friendClone);
    //   });
    // }

    friends.forEach((friend) => {
      const friendImageSrc = friend?.userImage
        ? `data:image/png;base64,${getBase64FromBuffer(friend.userImage)}`
        : "/Images/profile.svg";
      const storyImageSrc = friend?.story
        ? `data:image/png;base64,${getBase64FromBuffer(friend.story)}`
        : "/Images/profile.svg";

      contact_containers.forEach((contact_container) => {
        const friendClone = friend_template.cloneNode(true);
        friendClone.style.display = "flex";
        friendClone.querySelector(".contact-name").textContent =
          friend.username;
        console.log(friend);

        friendClone.querySelector(
          ".box-right-icon"
        ).style.backgroundImage = `url('${friendImageSrc}')`;

        friendClone
          .querySelector(".box-right-icon")
          .addEventListener("click", () => {
            router.push(`/profile?userId=${friend.id}`);
          });

        friendClone
          .querySelector(".contact-name")
          .addEventListener("click", () => {
            window.open(
              `http://10.2.5.120:3000/message?roomId=${friend.friendListId}&currentUser=${userId}`,
              "_blank"
            );
          });
        contact_container.appendChild(friendClone);
      });

      const storyCard = document.querySelector(".story-card").cloneNode(true);
      const story_card_container = document.querySelector(
        ".story-card-container"
      );
      storyCard.style.display = "block";
      storyCard.querySelector(".story-person-name").innerText = friend.username;

      storyCard.querySelector(
        ".box-right-icon"
      ).style.backgroundImage = `url('${friendImageSrc}')`;

      storyCard.style.backgroundImage = `url('${storyImageSrc}')`;
      if (!(storyImageSrc === "/Images/profile.svg")) {
        story_card_container.appendChild(storyCard);
      }
    });
  }, [friends]);

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
    <main id="main-container">
      <div className="container">
        {/* <!-- LEFT SECTION --> */}
        <div className="box" id="box-left">
          <section
            onClick={() => {
              router.push(`/profile?userId=${user?.id}`);
            }}
          >
            <div
              className="box-left-icon profile-image"
              style={{
                backgroundImage: `url(${profileImageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                border: "1px solid white",
                outline: "1px solid black",
              }}
            ></div>
            <h6>{user?.username}</h6>
            {/* <!-- Change the profile name later --> */}
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-1"></div>
            <h6>Fundraisers</h6>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-2"></div>
            <Link href="/friend">
              <h6>Friends</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-3"></div>
            <h6>Play games</h6>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-4"></div>
            <Link href="/">
              <h6>Bro AI</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-5"></div>
            <Link href="/group">
              <h6>Pages</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-6"></div>
            <h6>Saved</h6>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-7"></div>
            <h6>Ads Manager</h6>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-8"></div>
            <Link href="/friend/friend-left/birthday">
              <h6>Birthdays</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-9"></div>
            <h6>Events</h6>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-10"></div>
            <Link href="/">
              <h6>Feeds</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-11"></div>
            <Link href="/group">
              <h6>Groups</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-12"></div>
            <Link href="/video/video-left/live">
              <h6>Live</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-13"></div>
            <Link href="/market">
              <h6>Marketplace</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-14"></div>
            <h6>Memories</h6>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-15"></div>
            <Link href="/video/video-left/explore">
              <h6>Gaming Video</h6>
            </Link>
          </section>
          <section>
            <div className="box-left-icon" id="left-icon-16"></div>
            <Link href="/video">
              <h6>Video</h6>
            </Link>
          </section>
        </div>
        {/* <!-- CENTER SECTION --> */}
        <div className="box hide-scrollbar" id="box-center">
          <div id="center-top">
            <div className="nav-top">
              <div
                className="profile-image adjustForImage nav-right"
                style={{
                  backgroundImage: `url(${profileImageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  border: "1px solid white",
                  outline: "1px solid black",
                }}
                onClick={() => {
                  router.push(`/profile?userId=${user?.id}`);
                }}
              ></div>
              <input
                type="search"
                placeholder="What's on your mind?"
                id="searchBar"
                style={{ width: "30vw" }}
              />
            </div>
            <hr />
            <div
              id="center-top-button"
              className="flex justify-content-between aic gap-2"
            >
              <button
                onClick={() => {
                  router.push("/video");
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png"
                  alt=""
                />
                <h6>Live Video</h6>
              </button>
              <button
                onClick={() => {
                  document.querySelector(
                    ".super-main-post-container"
                  ).style.display = "block";
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
                  alt=""
                />
                <h6>Photo/video</h6>
              </button>
              <div className="super-main-post-container">
                <section className="main-post-container">
                  <div className="createPostContainer">
                    <h2>Create Post</h2>
                    <div
                      className="wrong-icon adjustForImage"
                      style={{
                        backgroundColor: "#d8dbe0",
                        backgroundSize: "50%",
                        borderRadius: "50%",
                        padding: "10px",
                        border: "1px solid black",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        document.querySelector(
                          ".super-main-post-container"
                        ).style.display = "none";
                      }}
                    ></div>
                  </div>
                  <br />
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        border: "1px solid black",
                        padding: "3vw",
                        backgroundColor: "#f2f4f7",
                      }}
                    >
                      <div className="profile-image-container">
                        <section
                          className="profile-image adjustForImage"
                          style={{
                            width: "3vw",
                            height: "3vw",
                            borderRadius: "50%",
                            backgroundImage: `url(${profileImageSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            cursor: "pointer",
                            border: "1px solid white",
                            outline: "1px solid black",
                          }}
                        ></section>
                        <section>
                          <h1>{user?.username}</h1>
                          <button style={{ padding: "0.2vw" }}>Friends</button>
                        </section>
                      </div>
                      <form method="POST" onSubmit={handlePost}>
                        <section className="post-input-container">
                          <input
                            type="text"
                            className="title-text"
                            placeholder="Enter the title of the Post"
                            onChange={(e) => setText(e.target.value)}
                          />
                          <div
                            className="adjustForImage"
                            style={{
                              backgroundImage: "url(reaction/emoji/happy.svg)",
                              width: "2vw",
                              height: "2vw",
                            }}
                          ></div>
                        </section>
                        <section className="post-submit-container">
                          <div
                            className="file-upload"
                            style={{ position: "relative" }}
                          >
                            <label
                              htmlFor="fileInput"
                              style={{
                                backgroundImage: ImagePreview
                                  ? `url(${ImagePreview})`
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
                                position: "relative",
                              }}
                            >
                              {!image && (
                                <>
                                  <div className="upload-image"></div>
                                  <span>Upload Image</span>
                                </>
                              )}
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
                          <input
                            type="submit"
                            style={{
                              backgroundColor: "#64e968",
                              border: "1px solid black",
                              height: "3vw",
                            }}
                            onClick={() => {
                              document.querySelector(
                                ".super-main-post-container"
                              ).style.display = "none";
                            }}
                            value="Post"
                          ></input>
                        </section>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
              <button>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png"
                  alt=""
                />
                <h6>Feeling/Activity</h6>
              </button>
            </div>
          </div>
          {/* <!-- Story Section--> */}
          <div id="story-container" className="flex hide-scrollbar">
            <section className="story-card-alternate">
              <div
                className="main-story"
                style={{
                  backgroundImage: `url(${profileImageSrc})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "repeat",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push(`/profile?userId=${user?.id}`);
                }}
              >
                <div
                  id="add-story"
                  className="adjustForImage"
                  onClick={() => {
                    router.push(`/profile?userId=${user?.id}`);
                  }}
                ></div>
              </div>
              <h6>Create Story</h6>
            </section>
            <div className="story-card-container" style={{ display: "flex" }}>
              <section className="story-card" style={{ display: "none" }}>
                <div className="box-right-icon adjustForImage right-icon-1 story-profile"></div>
                <h6 className="story-person-name">User Name</h6>
              </section>
            </div>
          </div>

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

          {/* <!-- Post Section--> */}
          {/* <div>
            {posts.length === 0 ? (
              <p>No posts found 😢</p>
            ) : (
              posts.map((post) => (
                <div key={post.postid}>
                  <h3>{post.postTitle}</h3>
                  <p>{post.postDescription}</p>

                  {post.postImage ? (
                    <img
                      src={`data:image/png;base64,${post.postImage}`}
                      alt="Post"
                      style={{ width: "300px", height: "auto" }}
                      onError={(e) => {
                        toastBottomRight("🧨 Image load failed", e);
                      }}
                    />
                  ) : (
                    <p>No image found 😔</p>
                  )}

                  <hr />
                </div>
              ))
            )}
          </div> */}

          <div id="post-container-area"></div>
        </div>
        {/* <!-- RIGHT SECTION --> */}

        <div className="box" id="box-right">
          <h6>Sponsored</h6>
          <section className="flex aic">
            <a
              href="https://www.pubg.com/en/main"
              target="_blank"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="adjustForImage sponsor-image-container"
                id="sponsor-image-1"
              ></div>
              <h6>PlayerUnknown's BattleGrounds</h6>
            </a>
          </section>
          <section className="flex aic">
            <a
              href="https://www.mobilelegends.com/"
              target="_blank"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="adjustForImage sponsor-image-container"
                id="sponsor-image-2"
              ></div>
              <h6>Mobile Legends: Bang Bang</h6>
            </a>
          </section>
          <section>
            <div className="contact-flex">
              <h4>contact</h4>
              <section className="contact-flex-inner">
                <div id="search-icon" className="adjustForImage"></div>
                <div className="option-icon adjustForImage"></div>
              </section>
            </div>
            <div
              className="contact-container"
              style={{ overflowY: "scroll", height: "25vw" }}
            >
              <div>
                <section
                  className="friend-template3 aic flex"
                  onClick={() => {
                    window.open(
                      `http://10.2.5.120:3000/message?roomId=GroupChat&currentUser=${userId}`,
                      "_blank"
                    );
                  }}
                >
                  <div className="box-right-icon adjustForImage groupImage"></div>
                  <h6 className="contact-name">Group</h6>
                </section>
              </div>
              <div style={{ display: "none" }}>
                <section className="friend-template aic flex">
                  <div className="box-right-icon adjustForImage"></div>
                  <h6 className="contact-name"></h6>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
// //
// const [image, setImage] = useState(null);
//   const [ImagePreview, setImagePreview] = useState(null);

//   const removeImage = () => {
//     setImagePreview(null);
//     setImage(null);
//     document.getElementById("fileInput").value = ""; // reset file input manually
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImagePreview(URL.createObjectURL(file)); // for showing preview
//       setImage(file); // real file for upload
//     }
//   };

//    <div className="file-upload" style={{ position: "relative" }}>
//             <label
//               htmlFor="fileInput"
//               style={{
//                 backgroundImage: ImagePreview ? `url(${ImagePreview})` : "none",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 width: "10vw",
//                 height: "10vw",
//                 border: "2px solid black",
//                 borderRadius: "50%",
//                 position: "relative",
//                 margin: "1vw auto",
//               }}
//             >
//               {!image && (
//                 <>
//                   <div className="upload-image"></div>
//                   <span>Upload Profile</span>
//                 </>
//               )}
//             </label>

//             <input
//               type="file"
//               id="fileInput"
//               onChange={handleFileChange}
//               style={{ display: "none" }}
//             />

//             {image && (
//               <button
//                 type="button"
//                 onClick={removeImage}
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   right: "10px",
//                   backgroundColor: "rgba(0, 0, 0, 0.6)",
//                   color: "#fff",
//                   border: "none",
//                   padding: "5px 10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Remove
//               </button>
//             )}
//           </div>
