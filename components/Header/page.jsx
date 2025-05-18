"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../local.css";
import "@/app/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const Header = () => {
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
        console.error("Fetch error:", error);
        setUser({ username: "Unknown" });
      }
    };

    fetchUsername();
  }, []);
  const router = useRouter();

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
          <section className="nav-right" id="Menu">
            <div id="menu-container" style={{ display: "none" }}></div>
          </section>
          <section className="nav-right" id="Messenger">
            <div id="messenger-container" style={{ display: "none" }}>
              <div>
                <h3>Chats</h3>
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
                <button>Communities</button>
              </div>
              <div
                className="contact-container"
                style={{ overflowY: "scroll", height: "23vw" }}
              >
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
              <div id="not-button-container">
                <button>All</button>
                <button>Unread</button>
              </div>
              <div className="flex aic not-container">
                <section className="not-image-container"></section>
                <h6>Dummy-text</h6>
              </div>
              <div className="flex aic not-container">
                <section className="not-image-container"></section>
                <h6>Dummy-text</h6>
              </div>
              <div className="flex aic not-container">
                <section className="not-image-container"></section>
                <h6>Dummy-text</h6>
              </div>
            </div>
          </section>
          <section
            className="nav-right profile-image adjustForImage"
            style={{
              backgroundImage: `url(${profileImageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid black",
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
                      border: "1px solid black",
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
                  <h6>Give Feedback</h6>
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
