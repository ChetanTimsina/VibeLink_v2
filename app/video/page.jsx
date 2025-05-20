"use client";
import React, { useEffect } from "react";
import "./local.css";
import "@/app/globals.css";
import "@/app/local.css";
import { toastBottomRight } from "@/app/lib/toastify";

const Video = () => {
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
                    <section class="wrong-icon adjustForImage" style="cursor: pointer;"></section>
                  </div>
                </section>
                <p class="card-text">
                  ${
                    movie.overview ||
                    "No overview 😶 Levon Cade left behind a decorated military career in the black ops to live a simple life working construction. But when his boss's daughter, who is like family to him, is taken by human traffickers, his search to bring her home uncovers a world of corruption far greater than he ever could have imagined."
                  }
                </p>
                <div class="ratio ratio-16x9">
                  <iframe 
                    src="https://vidsrc.me/embed/movie/${movie.id}" 
                    title="${movie.title}" 
                    allowfullscreen 
                    width="100%" 
                    height="400" 
                    frameborder="0">
                  </iframe>
                </div>
                <hr />
                <div class="flex aic gap" style="flex-direction: row">
                  <section class="post-bottom-icon-container">
                    <div class="flex aic gap"  style="flex-direction: row">
                    <div class="post-bottom-icon adjustForImage" id="react"></div>
                    <p>Like</p>
                    </div>
                  </section>
                </div>
              </div>
            `;
            container.appendChild(card);
            const wrongIcon = card.querySelector(".wrong-icon");
            wrongIcon.addEventListener("click", () => {
              card.style.display = "none";
            });
          });
        })
        .catch((err) => {
          toastBottomRight("💀 Error fetching movies:", err);
          container.innerHTML =
            "<p>Failed to load content. TMDB said nah 💔</p>";
        });
    };

    createMovieSection(
      "https://api.themoviedb.org/3/trending/movie/day",
      ".box-main"
    );
    createMovieSection(
      "https://api.themoviedb.org/3/movie/upcoming",
      ".box-main"
    );
  }, []);

  return (
    <main id="main-container" className="flex bg-white">
      {/* Left Sidebar */}
      <div className="box-left">
        <div
          className="box-left-top flex justify-content-between aic"
          style={{ flexDirection: "row" }}
        >
          <h3>
            <b>Video</b>
          </h3>
          <section className="left-icon-container" id="left-video-0"></section>
        </div>
        <div id="selectable">
          {[
            ["Home", "/"],
            ["Live", "/video/video-left/live"],
            ["Reels", "/video/video-left/reel"],
            ["Shows", "/video/video-left/show"],
            ["Explore", "/video/video-left/explore"],
            ["Save Videos", "/video/video-left/saveVideo"],
          ].map(([label, href], i) => (
            <section className="ui-widget-content" key={i}>
              <section
                className="left-icon-container"
                id={`left-video-${i + 1}`}
              ></section>
              <a href={href}>
                <h6>{label}</h6>
              </a>
            </section>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="box-main flex flex-column aic p-5">
        {/* Cards will auto-append here by JS */}
      </div>
    </main>
  );
};

export default Video;
