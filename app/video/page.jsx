"use client";
import React, { useEffect, useState } from "react";
import "./local.css";
import "@/app/globals.css";
import "@/app/local.css";
import { toastBottomRight } from "@/app/lib/toastify";

const Video = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGRmZjRmOWFjYmMxOWQ4YWFhNjgxNGU2OWMxYzA5NSIsIm5iZiI6MTc0NDY0NzIwMC44NTMsInN1YiI6IjY3ZmQzNDIwZGU1ZTRkZWM2MmFlNDE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gSs7Lykhd0Ln0Ry0NYmREu-RQ49MdqkalEp04zykkI";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const urls = [
          "https://api.themoviedb.org/3/trending/movie/day",
          "https://api.themoviedb.org/3/movie/upcoming",
        ];

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        };

        const allMovies = await Promise.all(
          urls.map((url) => fetch(url, options).then((res) => res.json()))
        );

        const combinedResults = allMovies.flatMap((res) => res.results || []);
        setMovies(combinedResults);
      } catch (err) {
        setError("TMDB said nah 💔");
        toastBottomRight("💀 Error fetching movies:", err);
      }
    };

    fetchMovies();
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
        {error ? (
          <p>{error}</p>
        ) : (
          movies.map((movie, idx) => (
            <div
              key={`${movie.id}-${idx}`}
              className="card mb-4"
              style={{ maxWidth: "720px" }}
            >
              <div
                className="card-body"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <section className="post-top">
                  <div
                    className="flex aic gap"
                    style={{ flexDirection: "row" }}
                  >
                    <div id="post-icon" className="adjustForImage"></div>
                    <div className="post-title d-flex flex-column">
                      <p className="card-title">
                        <b>{movie.title}</b>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap" style={{ flexDirection: "row" }}>
                    <section className="more-icon adjustForImage"></section>
                    <section
                      className="wrong-icon adjustForImage"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => e.currentTarget.closest(".card").remove()}
                    ></section>
                  </div>
                </section>

                <p className="card-text">
                  {movie.overview ||
                    "No overview 😶 Levon Cade left behind a decorated military career..."}
                </p>

                <div className="ratio ratio-16x9" style={{ width: "100%" }}>
                  <iframe
                    src={`https://vidsrc.me/embed/movie/${movie.id}`}
                    title={movie.title}
                    allowFullScreen
                    width="90%"
                    height="400"
                  ></iframe>
                </div>

                <hr />

                <div className="flex aic gap" style={{ flexDirection: "row" }}>
                  <section className="post-bottom-icon-container">
                    <div
                      className="flex aic gap"
                      style={{ flexDirection: "row" }}
                    >
                      <div
                        className="post-bottom-icon adjustForImage"
                        id="react"
                      ></div>
                      <p>Like</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Video;
