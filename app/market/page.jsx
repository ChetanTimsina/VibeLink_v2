"use client";
import React, { useEffect } from "react";
import "./local.css";

const Market = () => {
  useEffect(() => {
    document.querySelectorAll(".counts").forEach((counter) => {
      const target = Number(counter.getAttribute("data-count"));
      let count = 0;
      const speed = 100;
      const increment = target / speed;

      function updateCount() {
        count += increment;
        if (count < target) {
          counter.innerText = Math.floor(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();
    });

    let nav = document.querySelector("nav");
    let features = document.querySelectorAll(".features");
    let footer = document.querySelector("footer");
    let card = document.querySelectorAll(".card");
    let Mart_info = document.querySelector("#Mart-info");
    let info = document.querySelector("#info");
    let stats = document.querySelector("#stats");
    let mainRight = document.querySelector("#mainRight");
    let body = document.querySelector("body");
    let stats_upper = document.querySelector("#stats-upper");
    let stats_lower = document.querySelector("#stats-lower");
    let second_main = document.querySelector("#second-main");
    let week = document.querySelector("#week");
    let service = document.querySelector("#service");
    let color_mode = document.querySelector("#color_mode");
    let search_bar = document.querySelector("#search-bar");
    let search_image = document.querySelector("#search-image");
    let Login = document.querySelector("#Login");
    let nav_dropdown = document.querySelectorAll(".nav-dropdown");
    let nav_image_container = document.querySelectorAll(".nav-image-container");
    let nav_ul = document.querySelectorAll(".nav-ul");
    let second_content = document.querySelectorAll(".second-content");
    let svg = document.querySelectorAll(".svg");

    color_mode.addEventListener("click", () => {
      if (nav.classList.contains("color-darker")) {
        nav.classList.replace("color-darker", "Dark1");
        footer.classList.replace("color-darker", "Dark1");
        Mart_info.classList.replace("color-darker", "gray1");
        info.classList.replace("color-darker", "gray1");
        stats.classList.replace("color-darker", "gray1");
        mainRight.classList.replace("color-darker", "gray1");
        second_main.classList.replace("color-darker", "gray1");
        body.classList.replace("color-lighter", "Dark1");
        stats_upper.classList.replace("color-lighter", "Dark1");
        stats_lower.classList.replace("color-lighter", "Dark1");
        week.classList.replace("color-lighter", "Dark1");
        service.classList.replace("color-lighter", "Dark1");
        search_bar.classList.replace("color-lighter", "gray1");
        Login.classList.replace("color-lighter", "gray1");
        search_bar.style.border = "2px solid white";
        search_image.style.border = "2px solid white";
        features.forEach((feature) => {
          feature.classList.replace("color-darker", "gray1");
          feature.children[0].classList.replace("color-lighter", "Dark1");
        });
        card.forEach((cardz) => {
          cardz.classList.replace("color-lighter", "Dark1");
        });
        nav_dropdown.forEach((navdrop) => {
          navdrop.style.backgroundColor = "gray";
          navdrop.style.color = "white";
        });
        nav_image_container.forEach((nic) => {
          nic.style.color = "white";
          nic.style.backgroundColor = "black";
        });
        nav_ul.forEach((nul) => {
          nul.style.color = "black";
        });
        second_content.forEach((sc) => {
          sc.classList.add("card-color");
        });
        svg.forEach((sv) => {
          sv.classList.add("svgId");
        });
      } else {
        nav.classList.replace("Dark1", "color-darker");
        footer.classList.replace("Dark1", "color-darker");
        Mart_info.classList.replace("gray1", "color-darker");
        info.classList.replace("gray1", "color-darker");
        stats.classList.replace("gray1", "color-darker");
        mainRight.classList.replace("gray1", "color-darker");
        second_main.classList.replace("gray1", "color-darker");
        body.classList.replace("Dark1", "color-lighter");
        stats_upper.classList.replace("Dark1", "color-lighter");
        stats_lower.classList.replace("Dark1", "color-lighter");
        week.classList.replace("Dark1", "color-lighter");
        service.classList.replace("Dark1", "color-lighter");
        search_bar.classList.replace("gray1", "color-lighter");
        Login.classList.replace("gray1", "color-lighter");
        search_bar.style.border = "2px solid black";
        search_image.style.border = "2px solid black";
        features.forEach((feature) => {
          feature.classList.replace("gray1", "color-darker");
          feature.children[0].classList.replace("Dark1", "color-lighter");
        });
        card.forEach((cardz) => {
          cardz.classList.replace("Dark1", "color-lighter");
        });
        nav_dropdown.forEach((navdrop) => {
          navdrop.style.backgroundColor = "white";
          navdrop.style.color = "black";
        });
        nav_image_container.forEach((nic) => {
          nic.style.color = "black";
          nic.style.backgroundColor = "gray";
        });
        nav_ul.forEach((nul) => {
          nul.style.color = "gray";
        });
        second_content.forEach((sc) => {
          sc.classList.remove("card-color");
        });
        svg.forEach((sv) => {
          sv.classList.remove("svgId");
        });
      }
    });
  }, []);
  return (
    <>
      <main className="main">
        {/* <!---------------------------------- Hero Section ----------------------------------------> */}
        <div id="upperSection">
          <div id="carousel">
            <div>
              <section>
                {/* <!---------------------------------- Carousel Section ----------------------------------------> */}
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="carousel-image"
                        src="/Images/marketImages/carousel1.jpg"
                        alt="First slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* <!---------------------------------- Featured Products Section ----------------------------------------> */}
          <section id="feature-text">
            <img
              style={{ marginRight: "1rem" }}
              src="/Images/marketImages/feature.png"
              alt=""
            />
            FEATURED PRODUCTS
          </section>

          {/* <!---------------------------------- Feature 1 ----------------------------------------> */}
          <div id="feature1" className="features color-darker">
            <img
              id="feature-image1"
              src="/Images/marketImages/feature1.svg"
              alt=""
              className="color-lighter"
            />
            <p className="feature-text-inner">
              Exciting Discounts <b> Up to 70%! </b>Grab your favorite styles at
              unbeatable prices.
            </p>
          </div>

          {/* <!---------------------------------- Feature 2 ----------------------------------------> */}
          <div id="feature2" className="features color-darker">
            <img
              id="feature-image2"
              src="/Images/marketImages/feature2.svg"
              alt=""
              className="color-lighter"
            />
            <p className="feature-text-inner">
              Endless Choices Await! Find the perfect outfit with a wide range
              of styles and sizes.
            </p>
          </div>

          {/* <!---------------------------------- Feature 3 ----------------------------------------> */}
          <div id="feature3" className="features color-darker">
            <img
              id="feature-image3"
              src="/Images/marketImages/feature3.svg"
              alt=""
              className="color-lighter"
            />
            <p className="feature-text-inner">
              Stay ahead of the fashion curve with our <b>latest arrivals</b>,
              featuring exclusive designs
            </p>
          </div>

          {/* <!---------------------------------- Info Section ----------------------------------------> */}
          <div id="info" className="color-darker">
            <div id="Mart-info" className="color-darker">
              <img
                src="/Images/marketImages/MartLogo.png"
                width="30px"
                height="30px"
              />
              <h6>ModernMart</h6>
            </div>
            <p id="info-text">Your Ultimate Shopping Destination</p>
          </div>

          {/* <!---------------------------------- Stats Section ----------------------------------------> */}
          <div id="stats" className="color-darker">
            <div id="stats-upper" className="color-lighter">
              <p className="stats-text">
                <b>Customer & Sales Stats</b>
              </p>
              <img
                style={{ marginTop: "-1vw" }}
                src="/Images/marketImages/charts.png"
                alt=""
              />
              <p style={{ fontSize: "0.6vw", marginBottom: "0" }}>
                <b>75% Customers Return</b>
              </p>
            </div>
            <div id="stats-lower" className="color-lighter">
              <p className="stats-text">
                <b> Trending Products</b>
              </p>
              <img
                style={{ marginTop: "-1vw" }}
                src="/Images/marketImages/graph.png"
                alt=""
              />
              <p style={{ fontSize: "0.6vw", marginBottom: "0" }}>
                <b>Top 10 Bestsellers This Month</b>
              </p>
            </div>
          </div>

          {/* <!---------------------------------- Recommendation Section ----------------------------------------> */}
          <section id="mainRight" className="color-darker">
            <div id="recommendation">
              <section id="recommendation-text">
                <img
                  style={{ width: "5vw", marginRight: "1rem" }}
                  src="/Images/marketImages/recommendation.png"
                  alt=""
                />
                RECOMMENDATIONS
              </section>
            </div>

            {/* <!---------------------------------- Cards Section ----------------------------------------> */}
            <div id="recommend-container">
              {/* <!---------------------------------- Card 1 ----------------------------------------> */}
              <section id="card-1">
                <div className="card color-lighter">
                  <div className="first-content">
                    <div className="Rec-Image-container">
                      <img
                        style={{ top: "1vw" }}
                        src="/Images/marketImages/car.png"
                        alt="BMW M4 Coupe"
                      />
                    </div>
                    <div id="card-text">
                      <h6>BMW M4 Coupe</h6>
                      <p>
                        Engine: 3.0L Twin-Turbo Inline-6 <br />
                        Horsepower: 503 HP <br />
                        Top Speed: 250 km/h <br />
                        Price: $74,000
                      </p>
                      <div className="star-rating">
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                    </div>
                  </div>
                  <div className="second-content">
                    <span className="second-content-text">
                      The BMW M4 Coupe is a high-performance sports car
                      featuring a 3.0L twin-turbo inline-6 engine, delivering
                      503 HP. With a sleek design, aggressive stance, and
                      luxurious interior.
                    </span>
                  </div>
                </div>
              </section>

              {/* <!---------------------------------- Card 2 ----------------------------------------> */}
              <section id="card-2">
                <div className="card color-lighter">
                  <div className="first-content">
                    <div
                      className="Rec-Image-container"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        style={{ width: "7.5vw", top: "-0.3vw" }}
                        src="/Images/marketImages/serum.png"
                        alt="Facial Serum"
                      />
                    </div>
                    <div id="card-text">
                      <h6>Organic Serum</h6>
                      <p>
                        Key Ingredient: Jojoba <br />
                        Skin Benefits: Deep hydration <br />
                        Volume: 30ml (1 fl. oz) <br />
                        Price: $25.99
                      </p>
                      <div className="star-rating">
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                    </div>
                  </div>
                  <div className="second-content">
                    <span className="second-content-text">
                      This organic facial serum hydrates deeply, boosts
                      collagen, reduces fine lines, enhances skin glow, and
                      promotes a youthful appearance.
                    </span>
                  </div>
                </div>
              </section>

              {/* <!---------------------------------- Card 3 ----------------------------------------> */}
              <section id="card-3">
                <div className="card color-lighter">
                  <div className="first-content">
                    <div className="Rec-Image-container">
                      <img
                        style={{ width: "7vw", left: "1.9vw" }}
                        src="/Images/marketImages/cloth.png"
                        alt="clothstand"
                      />
                    </div>
                    <div id="card-text">
                      <h6>Luxury clothing rack</h6>
                      <p>
                        Material: Metal frame
                        <br />
                        Capacity: up to 20 garments
                        <br />
                        Design: Elegant gold arch design
                        <br />
                        Usage: Ideal for showrooms
                      </p>
                      <div className="star-rating">
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                    </div>
                  </div>
                  <div className="second-content">
                    <span className="second-content-text">
                      This stylish gold clothing rack offers ample hanging
                      space, perfect for organizing clothes in retail stores,
                      boutiques, or home closets.
                    </span>
                  </div>
                </div>
              </section>

              {/* <!---------------------------------- Card 4 ----------------------------------------> */}
              <section id="card-4">
                <div className="card color-lighter">
                  <div className="first-content">
                    <div className="Rec-Image-container">
                      <img
                        style={{ width: "7vw", left: "1.9vw" }}
                        src="/Images/marketImages/watch.png"
                        alt="Smartwatch"
                      />
                    </div>
                    <div id="card-text">
                      <h6>Smartwatch</h6>
                      <p>
                        Display: 1.4" AMOLED <br />
                        Battery Life: Up to 14 days <br />
                        Features: Heart rate, GPS
                        <br />
                        Price: $199
                      </p>
                      <div className="star-rating">
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star filled">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                    </div>
                  </div>
                  <div className="second-content">
                    <span className="second-content-text">
                      A sleek smartwatch with a 1.4-inch AMOLED display, heart
                      rate monitoring, fitness tracking, notifications, long
                      battery life, and water resistance.
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>

      {/* <!---------------------------------- Second Main Section ----------------------------------------> */}
      <hr style={{ width: "95%", margin: "auto" }} />

      <div id="second-main" className="color-darker">
        <section id="left-cta">
          <h3>All Ecommerce Hub</h3>
          <h1>Shop Smart, Live Stylish: ModernMart Has It All!</h1>
          <p>
            ModernMart—your ultimate destination for smart shopping. Discover
            top-quality products, from stylish fashion to cutting-edge gadgets,
            all in one place. Experience convenience, innovation, and unbeatable
            prices. Shop with confidence, elevate your lifestyle, and stay ahead
            with the latest trends. Modern shopping, redefined for you!
          </p>
          <div>
            <button className="cta-button" id="cta-button1">
              Get a demo
            </button>
            <button className="cta-button" id="cta-button2">
              Get started free
            </button>
            <p>
              Get a demo of our premium software, or get started with free tools
            </p>
          </div>
        </section>

        <section id="right-cta">
          {/* <!---------------------------------- Weekly Activity Section ----------------------------------------> */}
          <div id="week" className="color-lighter">
            <h5>Your Weekly Activity</h5>
            <div id="hr"></div>
            <div id="cta-stats">
              <section>
                <h6>Emails</h6>
                <h1>
                  <span className="counts" data-count="17">
                    0
                  </span>
                </h1>
                <h6>&#9650; 4</h6>
              </section>
              <section>
                <h6>Calls</h6>
                <h1>
                  <span className="counts" data-count="25">
                    0
                  </span>
                </h1>
                <h6>&#9650; 7</h6>
              </section>
              <section>
                <h6>Meetings</h6>
                <h1>
                  <span className="counts" data-count="15">
                    0
                  </span>
                </h1>
                <h6>&#9650; 2</h6>
              </section>
            </div>
          </div>

          {/* <!---------------------------------- Services Breakdown Section ----------------------------------------> */}
          <div id="service" className="color-lighter">
            <div>
              <h5>Services breakdown</h5>
              <ul>
                <li>E-Commerce</li>
                <li>Marketing</li>
                <li>Development</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>SEO</li>
              </ul>
            </div>
            <div>
              <img src="/Images/marketImages/piechart.png" alt="" />
            </div>
          </div>

          <div id="shine"></div>
        </section>
      </div>
    </>
  );
};

export default Market;
