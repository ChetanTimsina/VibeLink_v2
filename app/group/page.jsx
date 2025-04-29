"use client";
import React from "react";
import "@/app/globals.css";
import "../friend/local.css";
import "../local.css";
import { useEffect } from "react";

const Group = () => {
  useEffect(() => {
    const postTemplate = document.querySelector(".post-container");
    const postContainer = document.querySelector("#post-container-area");

    const mockUserData = Array.from({ length: 10 }, (_, i) => ({
      name: { first: `User${i + 1}`, last: `Test${i + 1}` },
      picture: `https://i.pravatar.cc/100?u=${i + 1}`,
    }));

    async function createPosts() {
      const postDataPromises = Array.from({ length: 10 }, async (_, i) => {
        const postClone = postTemplate.cloneNode(true);
        postClone.style.display = "block";
        const randomSeed = Math.floor(Math.random() * 100000);

        // Set post image immediately
        const postImage = postClone.querySelector(".post-image");
        if (postImage) {
          postImage.style.backgroundImage = `url("https://picsum.photos/700/600?random=${randomSeed}")`;
        }

        // Use mock data instead of fetching
        const person = mockUserData[i];

        const postName = postClone.querySelector(".post-name");
        const postIcon = postClone.querySelector("#post-icon");

        if (postName)
          postName.innerHTML = `${person.name.first} ${person.name.last}`;
        if (postIcon)
          postIcon.style.backgroundImage = `url("${person.picture}")`;

        postContainer.appendChild(postClone);
      });

      // Wait for all promises to resolve before continuing
      await Promise.all(postDataPromises);
    }

    createPosts();
  }, []);
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
          <div className="post-container flex aic flex-column">
            <section
              className="post-top flex aic justify-content-between gap-2"
              style={{ width: "100%" }}
            >
              <div className="flex aic gap-2">
                <div id="post-icon" className="adjustForImage"></div>
                <div className="post-title flex flex-column jcc">
                  <p className="post-name">
                    <b>Kuchi Bigboy</b>
                  </p>
                  <p>April 10 at 3:54PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <section className="more-icon adjustForImage"></section>
                <section className="wrong-icon adjustForImage"></section>
              </div>
            </section>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="post-image"
                src=""
                alt=""
                style={{
                  width: "45vw",
                  height: "40vw",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <div className="flex aic justify-content-between">
              <section id="reaction-container">
                <div className="react-1"></div>
                <div className="react-2"></div>
                <div className="react-3"></div>
                <p className="react-count">100</p>
              </section>
            </div>
            <hr />
            <br />
            <div className="flex aic jcc gap-5">
              <section className="post-bottom-icon-container">
                <div
                  className="post-bottom-icon adjustForImage"
                  id="react"
                ></div>
                <p>Like</p>
              </section>
              <section className="post-bottom-icon-container">
                <div
                  className="post-bottom-icon adjustForImage"
                  id="comment"
                ></div>
                <p>Comment</p>
              </section>
              <section className="post-bottom-icon-container">
                <div
                  className="post-bottom-icon adjustForImage"
                  id="share"
                ></div>
                <p>Share</p>
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
