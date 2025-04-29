"use client";
import "@/app/globals.css";
import "./local.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const contact_containers = document.querySelectorAll(".contact-container");
    const friend_template = document.querySelector(".friend-template");

    let randomSeed = 1;

    const friends = [
      "BIJAY CHETTRI",
      "CHETAN TIMSINA",
      "CHIMI GYELTSHEN",
      "CHONEY RANGDEL",
      "DAMBER KHATIWARA",
      "DORJI GYELTSHEN",
      "GYELTSHEN LEPCHA",
      "JIGME TSHERAB DAMCHOE",
      "JIGME TSHEWANG YOEZER",
      "KARMA SONAM",
      "KARMA WANGCHUK TITUNG",
      "KELZANG PENJOR",
      "KEZANG TSHOMO",
      "KINLEY PHUNTSHO",
    ];

    for (let i = 0; i < 14; i++) {
      contact_containers.forEach((contact_container) => {
        const friendClone = friend_template.cloneNode(true);
        friendClone.style.display = "flex";
        friendClone.querySelector(".contact-name").textContent = friends[i];
        friendClone.querySelector(
          ".box-right-icon"
        ).style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
        randomSeed++;
        contact_container.appendChild(friendClone);
      });
    }
    randomSeed = new Date().getTime();
    for (let i = 1; i <= 15; i++) {
      const element = document.querySelector(`.right-icon-${i}`);
      if (element) {
        element.style.backgroundImage = `url("https://i.pravatar.cc/100?u=${randomSeed}")`;
      }
      randomSeed++;
    }
    for (let i = 1; i <= 8; i++) {
      const randomSeed = Math.floor(Math.random() * 100000);
      const element = document.getElementById(`story-${i}`);
      if (element) {
        element.style.backgroundImage = `url("https://picsum.photos/360/640?random=${randomSeed}")`;
      }
    }
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
    // for (let i = 1; i <= 3; i++) {
    //   const element = document.querySelector(`.react-${i}`);
    //   if (element) {
    //     element.style.backgroundImage = `url("reaction/react-${i}.jpg")`;
    //   }
    // }
  }, []);
  return (
    <main id="main-container">
      <div className="container">
        {/* <!-- LEFT SECTION --> */}
        <div className="box" id="box-left">
          <section>
            <div className="box-left-icon profile-image"></div>
            <h6>Chetan Timsina</h6>
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
              <div className="profile-image adjustForImage nav-right"></div>
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
              <button>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png"
                  alt=""
                />
                <h6>Live Video</h6>
              </button>
              <button>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
                  alt=""
                />
                <h6>Photo/video</h6>
              </button>
              <button>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png"
                  alt=""
                />
                <h6>Feeling/Linkctivity</h6>
              </button>
            </div>
          </div>
          {/* <!-- Story Section--> */}
          <div id="story-container" className="flex hide-scrollbar">
            <section className="story-card-alternate">
              <div className="main-story adjustForImage">
                <div id="add-story" className="adjustForImage"></div>
              </div>
              <h6>Create Story</h6>
            </section>
            <section className="story-card" id="story-1">
              <div className="box-right-icon adjustForImage right-icon-1 story-profile"></div>
              <h6 className="story-person-name">NGAWANG PEMA</h6>
            </section>

            <section className="story-card" id="story-2">
              <div className="box-right-icon adjustForImage right-icon-2 story-profile"></div>
              <h6 className="story-person-name">JIGME TSHEWANG</h6>
            </section>

            <section className="story-card" id="story-3">
              <div className="box-right-icon adjustForImage right-icon-3 story-profile"></div>
              <h6 className="story-person-name">KEZANG TSHOMO</h6>
            </section>

            <section className="story-card" id="story-4">
              <div className="box-right-icon adjustForImage right-icon-4 story-profile"></div>
              <h6 className="story-person-name">UGYEN WANGMO</h6>
            </section>

            <section className="story-card" id="story-5">
              <div className="box-right-icon adjustForImage right-icon-5 story-profile"></div>
              <h6 className="story-person-name">DAMBER KHATIWARA</h6>
            </section>

            <section className="story-card" id="story-6">
              <div className="box-right-icon adjustForImage right-icon-6 story-profile"></div>
              <h6 className="story-person-name">PHUB DORJI</h6>
            </section>

            <section className="story-card" id="story-7">
              <div className="box-right-icon adjustForImage right-icon-7 story-profile"></div>
              <h6 className="story-person-name">YESHI WANGMO</h6>
            </section>

            <section className="story-card" id="story-8">
              <div className="box-right-icon adjustForImage right-icon-8 story-profile"></div>
              <h6 className="story-person-name">PRIYLink GHIMIRAY</h6>
            </section>
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
                    <p>April 10 at 3:54PM</p>
                  </div>
                </div>
                <div className="flex" style={{ gap: "2vw" }}>
                  <section className="more-icon adjustForImage"></section>
                  <section className="wrong-icon adjustForImage"></section>
                </div>
              </section>
              <div className="post-image"></div>
              <hr />
              <div className="flex aic justify-content-between">
                <section id="reaction-container">
                  <div className="react-1"></div>
                  <div className="react-2"></div>
                  <div className="react-3"></div>
                  <p className="react-count">100</p>
                </section>
              </div>
              <hr />
              <div
                className="flex aic"
                style={{ justifyContent: "space-between", gap: "3vw" }}
              >
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

        {/* <!-- RIGHT SECTION --> */}

        <div className="box" id="box-right">
          <h6>Sponsored</h6>
          <section className="flex aic">
            <div
              className="adjustForImage sponsor-image-container"
              id="sponsor-image-1"
            ></div>
            <h6>PlayerUnknown's BattleGrounds</h6>
          </section>
          <section className="flex aic">
            <div
              className="adjustForImage sponsor-image-container"
              id="sponsor-image-2"
            ></div>
            <h6>Mobile Legends: Bang Bang</h6>
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
              style={{ overflowY: "scroll", height: "23vw" }}
            >
              <div style={{ display: "none" }}>
                <section className="friend-template aic flex">
                  <div className="box-right-icon adjustForImage">
                    <span className="absolute top-0 left-full -translate-x-1/2 -translate-y-1/2 p-1 border-2 border-gray-100 bg-green-600 rounded-full">
                      <span className="sr-only">New alerts</span>
                    </span>
                  </div>
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
