"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../local.css";
import "@/app/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toastBottomRight } from "@/app/lib/toastify";
import { toast } from "react-hot-toast";
import { deleteusertoast } from "@/app/lib/deleteusertoast";
const deleteUser = async () => {
  const userId = Cookies.get("vibeUser");

  const res = await fetch("/api/deleteUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });

  const data = await res.json();
  if (data.success) {
    toast.success("Deleted successfully 👻");
    router.push("/InitialPage");
    // maybe redirect or clear cookies
  } else {
    toast.error(data.error || "Something went wrong 💀");
  }
};
const Header = () => {
  const [user, setUser] = useState(null);

  const [incomingRequests, setIncomingRequests] = useState([]);

  const router = useRouter();

  const userId = Cookies.get("vibeUser");

  useEffect(() => {
    if (!userId) return;

    const fetchIncomingRequests = async () => {
      try {
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

    fetchIncomingRequests();
  }, [userId]);

  useEffect(() => {
    const updateNotification = () => {
      const All_container = document.querySelector(".All-container");
      for (let request of incomingRequests) {
        if (String(request.friendId) === String(userId)) {
          const not = document.querySelector(".not-container").cloneNode(true);
          not.style.display = "flex";
          not.querySelector("h6").innerText = `${request.user.username}`;
          const friendRequestedImage = request.user.userImage
            ? `data:image/png;base64,${getBase64FromBuffer(
                request.user.userImage
              )}`
            : "/Images/profile.svg";
          not.querySelector(
            ".not-image-container"
          ).style.backgroundImage = `url(${friendRequestedImage})`;
          const friendId = request.userId;
          not
            .querySelector(".not-image-container")
            .addEventListener("click", () => {
              router.push(`/profile?userId=${friendId}`);
            });
          not
            .querySelector(".Accept-button")
            .addEventListener("click", async () => {
              try {
                const res = await fetch("/api/friend-request-accept", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ userId, friendId }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Accept failed");

                toast.success("✨Friend request accepted!");
                setIncomingRequests((prev) =>
                  prev.filter((req) => req.user.id !== friendId)
                );
              } catch (error) {
                toastBottomRight(
                  "✨Error accepting friend request: " + error.message
                );
              }
            });
          not
            .querySelector(".Reject-button")
            .addEventListener("click", async () => {
              try {
                const res = await fetch("/api/friend-request-reject", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ userId, friendId }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Reject failed");
                else {
                  toast.success("✨Friend request rejected!");
                  updateNotification();
                  setIncomingRequests((prev) =>
                    prev.filter((req) => req.user.id !== friendId)
                  );
                }
              } catch (error) {
                toastBottomRight(
                  "Error rejecting friend request: " + error.message
                );
              }
            });
          All_container.append(not);
        }
      }
    };
    updateNotification();
  }, [incomingRequests]);

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
    const userId = Cookies.get("vibeUser");
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

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    router.push("/InitialPage");
  };
  useEffect(() => {
    document.getElementById("account-container").style.display = "none";
    document.getElementById("notification-container").style.display = "none";
    document.getElementById("messenger-container").style.display = "none";

    document.getElementById("Notification").addEventListener("click", () => {
      toggleVisibility("notification-container");
      hideElement("account-container");
      hideElement("messenger-container");
    });

    document.getElementById("Account").addEventListener("click", () => {
      toggleVisibility("account-container");
      hideElement("notification-container");
      hideElement("messenger-container");
    });

    document.getElementById("Messenger").addEventListener("click", () => {
      hideElement("account-container");
      hideElement("notification-container");
      toggleVisibility("messenger-container");
    });

    function hideElement(id) {
      document.getElementById(id).style.display = "none";
    }

    function toggleVisibility(id) {
      const el = document.getElementById(id);
      if (el.style.display === "none" || el.style.display === "") {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    }
  }, []);
  return (
    <header>
      <nav className="oldNav">
        <section id="logo-container">
          <Link href="/">
            <section id="logo" className="adjustForImage"></section>
          </Link>
          <form action="https://www.google.com/search" method="get">
            <input
              id="searchBar"
              name="q"
              placeholder="Search VibeLink "
              type="search"
            />
          </form>
        </section>

        <ul id="nav-ul">
          <li>
            <Link href="/" className="nav-before">
              <div className="nav-items">
                <Image
                  src="/Images/nav-item-home.svg"
                  alt=""
                  className="focus"
                  fill={true}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/friend" className="nav-before">
              <div className="nav-items">
                <Image src="/Images/nav-item-friend.svg" alt="" fill={true} />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/video" className="nav-before">
              <div className="nav-items">
                <Image src="/Images/nav-item-video.svg" alt="" fill={true} />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/market" className="nav-before">
              <div className="nav-items">
                <Image src="/Images/nav-item-market.svg" alt="" fill={true} />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/group" className="nav-before">
              <div className="nav-items">
                <Image src="/Images/nav-item-group.svg" alt="" fill={true} />
              </div>
            </Link>
          </li>
        </ul>
        <div id="nav-right-container">
          <section className="nav-right" id="Messenger">
            <div id="messenger-container" style={{ display: "none" }}>
              <div>
                <h3>Chats</h3>
                <br />
              </div>
              <div>
                <input
                  type="search"
                  placeholder="Search Your Friends"
                  id="searchBar"
                  style={{ width: "22vw" }}
                />
              </div>
              <div id="chat-filter-buttons">
                <button
                  style={{ color: "#0064da", backgroundColor: "#ebf5ff" }}
                >
                  Inbox
                </button>
              </div>
              <div
                className="contact-container"
                style={{ overflowY: "scroll", height: "23vw" }}
              >
                <section
                  className="friend-template3 aic flex"
                  onClick={() => {
                    window.open(
                      `http://10.2.26.226:3000/message?roomId=GroupChat&currentUser=${userId}`,
                      "_blank"
                    );
                  }}
                >
                  <div className="box-right-icon adjustForImage groupImage"></div>
                  <h6 className="contact-name">Group</h6>
                </section>
                <div style={{ display: "none" }}>
                  <section className="friend-template flex gap-2 aic">
                    <div className="box-right-icon adjustForImage">
                      <span className="status-indicator">
                        <span className="sr-only">Online</span>
                      </span>
                    </div>
                    <h6 className="contact-name"></h6>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section className="nav-right" id="Notification">
            <div id="notification-container" style={{ display: "none" }}>
              <div id="not-top">
                <h3>Notification</h3>
                <section id="not-more"></section>
              </div>
              <br />
              <div className="All-container">
                <div className="not-container" style={{ display: "none" }}>
                  <section className="not-image-container"></section>
                  <h6>Dummy-text</h6>
                  <div
                    style={{
                      position: "absolute",
                      top: "0.5",
                      right: "0",
                      padding: "0.3vw",
                      display: "flex",
                      gap: "0.3vw",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "0.3vw 0.5vw",
                        borderRadius: "0.2vw",
                        cursor: "pointer",
                      }}
                      className="Accept-button"
                    >
                      Accept
                    </button>
                    <button
                      style={{
                        backgroundColor: "#e2e5e9",
                        padding: "0.3vw 0.5vw",
                        borderRadius: "0.2vw",
                        cursor: "pointer",
                      }}
                      className="Reject-button"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="nav-right profile-image adjustForImage"
            style={{
              backgroundImage: `url(${profileImageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid white",
              outline: "1px solid black",
              cursor: "pointer",
            }}
            id="Account"
          >
            <div id="account-container" style={{ display: "none" }}>
              <section id="profile-info">
                <section id="profile-info-inner">
                  <section
                    className="nav-right profile-image adjustForImage"
                    style={{
                      backgroundImage: `url(${profileImageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      cursor: "pointer",
                      width: "3vw",
                      border: "1px solid white",
                      outline: "1px solid black",
                      height: "3vw",
                    }}
                  ></section>
                  <h4>{user?.username}</h4>
                </section>
                <div className="hrLine"></div>
                <section id="switchuser-container" className="flex jcc aic">
                  <div id="switchuser">
                    <Image src="/Images/switchUser.svg" alt="" fill={true} />
                  </div>
                  <h6>See all Profiles</h6>
                </section>
              </section>
              <section id="setting-container" className="flex">
                <div>
                  <section
                    id="icon-1"
                    className="icon-container adjustForImage"
                  ></section>
                  <h6>Setting & Privacy</h6>
                </div>
                <div>
                  <section
                    id="icon-2"
                    className="icon-container adjustForImage"
                  ></section>
                  <h6>Help & Support</h6>
                </div>
                <div>
                  <section
                    id="icon-3"
                    className="icon-container adjustForImage"
                  ></section>
                  <h6>Display & Accelebility</h6>
                </div>
                <div>
                  <section
                    id="icon-4"
                    className="icon-container adjustForImage"
                  ></section>
                  <h6 onClick={() => deleteusertoast(deleteUser)}>
                    Delete Account
                  </h6>
                </div>
                <div>
                  <section
                    id="icon-5"
                    className="icon-container adjustForImage"
                  ></section>
                  <h6 onClick={handleLogout} style={{ cursor: "pointer" }}>
                    Log Out
                  </h6>
                </div>
              </section>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Header;
