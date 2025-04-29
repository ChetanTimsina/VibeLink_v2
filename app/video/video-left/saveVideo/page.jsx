"use client";
import React from "react";
import "../../local.css";
import { useEffect } from "react";
import "@/app/globals.css";
import "@/app/local.css";

const saveVideo = () => {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGRmZjRmOWFjYmMxOWQ4YWFhNjgxNGU2OWMxYzA5NSIsIm5iZiI6MTc0NDY0NzIwMC44NTMsInN1YiI6IjY3ZmQzNDIwZGU1ZTRkZWM2MmFlNDE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gSs7Lykhd0Ln0Ry0NYmREu-RQ49MdqkalEp04zykkI",
      },
    };

    const createMovieSection = (apiUrl, containerSelector) => {
      const container = document.querySelector(containerSelector);

      fetch(apiUrl, options)
        .then((res) => res.json())
        .then((data) => {
          data.results.forEach((movie) => {
            const card = document.createElement("div");
            card.classList.add("card", "mb-4");
            card.style.maxWidth = "720px";

            fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
              options
            )
              .then((res) => res.json())
              .then((videoData) => {
                const trailer = videoData.results.find(
                  (v) => v.type === "Trailer" && v.site === "YouTube"
                );

                card.innerHTML = `
                  <div class="card-body">
                    <section class="post-top" style="width: 100%">
                      <div class="flex aic gap" style="flex-direction: row">
                        <div id="post-icon" class="adjustForImage"></div>
                        <div class="post-title d-flex flex-column">
                          <p class="card-title"><b>${movie.title}</b></p>
                        </div>
                      </div>
                      <div class="flex gap" style="flex-direction: row">
                        <section class="more-icon adjustForImage"></section>
                        <section class="wrong-icon adjustForImage"></section>
                      </div>
                    </section>
                    <p class="card-text">${
                      movie.overview ||
                      "No overview 😶 Levon Cade left behind a decorated military career in the black ops to live a simple life working construction. But when his boss's daughter, who is like family to him, is taken by human traffickers, his search to bring her home uncovers a world of corruption far greater than he ever could have imagined."
                    }</p>
                    ${
                      trailer
                        ? `<div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/${trailer.key}" 
                              title="${movie.title} trailer" allowfullscreen></iframe>
                          </div>`
                        : `<p>No trailer available 🫠</p>`
                    }
                <hr />
                <div class="flex jcc aic gap" style="flex-direction: row">
                  <section class="post-bottom-icon-container">
                    <div class="post-bottom-icon adjustForImage" id="react"></div>
                    <p>Like</p>
                  </section>
                  <section class="post-bottom-icon-container">
                    <div class="post-bottom-icon adjustForImage" id="comment"></div>
                    <p>Comment</p>
                  </section>
                  <section class="post-bottom-icon-container">
                    <div class="post-bottom-icon adjustForImage" id="share"></div>
                    <p>Share</p>
                  </section>
                </div>
                  </div>
                `;
                container.appendChild(card);
              });
          });
        })
        .catch((err) => {
          console.error("💀 Error fetching movies:", err);
          container.innerHTML =
            "<p>Failed to load content. TMDB said nah 💔</p>";
        });
    };
    createMovieSection(
      "https://api.themoviedb.org/3/trending/movie/day",
      ".box-main-4"
    );
  }, []);
  return (
    <main id="main-container" className="flex bg-white">
      <div className="box-left">
        <div
          className="box-left-top flex justify-content-between aic"
          style={{ flexDirection: "row" }}
        >
          <h3>
            <b>Save Video</b>
          </h3>
          <section className="left-icon-container" id="left-video-0"></section>
        </div>
        <div id="selectable">
          <section className="ui-widget-content">
            <section
              className="left-icon-container"
              id="left-video-1"
            ></section>
            <a href="/">
              <h6>Home</h6>
            </a>
          </section>
          <section className="ui-widget-content">
            <section
              className="left-icon-container"
              id="left-video-2"
            ></section>
            <a href="/video/video-left/live">
              <h6>Live</h6>
            </a>
          </section>
          <section className="ui-widget-content">
            <section
              className="left-icon-container"
              id="left-video-3"
            ></section>
            <a href="/video/video-left/reel">
              <h6>Reels</h6>
            </a>
          </section>
          <section className="ui-widget-content">
            <section
              className="left-icon-container"
              id="left-video-4"
            ></section>
            <a href="/video/video-left/show">
              <h6>Shows</h6>
            </a>
          </section>
          <section className="ui-widget-content">
            <section
              className="left-icon-container"
              id="left-video-5"
            ></section>
            <a href="/video/video-left/explore">
              <h6>Explore</h6>
            </a>
          </section>
          <section className="ui-widget-content">
            <section
              className="left-icon-container"
              id="left-video-6"
            ></section>
            <a href="/video/video-left/saveVideo">
              <h6>Save Videos</h6>
            </a>
          </section>
        </div>
      </div>

      <div id="box-main" className="box-main-4 flex flex-column aic p-5">
        {/* <!-- Video Cards will appear here --> */}
      </div>
    </main>
  );
};

export default saveVideo;
