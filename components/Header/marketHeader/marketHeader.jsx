import React from "react";
import "../../local2.css";

const Header = () => {
  return (
    <nav className="color-darker newNav">
      <a href="/market">
        <div id="logo-container2">
          <img
            id="logo2"
            src="/Images/marketImages/MartLogo.png"
            alt="MartLogo"
          />
          <section>
            <h1 id="first" style={{ fontSize: "2vw" }}>
              ModernMart
            </h1>
            <p style={{ fontSize: "1vw" }}>Explore Your Interest</p>
          </section>
        </div>
      </a>
      <form
        action="http://www.google.com/search"
        method="get"
        target="_blank"
        id="search-form"
      >
        <input
          type="search"
          placeholder="Search for Products and Brands"
          name="q"
          id="search-bar"
          className="search color-lighter"
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        />
        <button
          id="search-image"
          className="search"
          style={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <img
            style={{
              width: "3.5vw",
              height: "3.5vw",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
            src="/Images/marketImages/search.gif"
            alt=""
          />
        </button>
      </form>
      <ul className="nav_ul">
        <li id="Categories">
          <a href="/market/category">Categories</a>
          <div className="nav-dropdown Category-drop">
            <div className="nav-image-container">
              <img
                id="nav-image"
                src="/Images/marketImages/Category.svg"
                alt=""
              />
              <h2 style={{ fontSize: "1.6rem" }}>Categries</h2>
              <p style={{ fontSize: "1rem" }}>Explore various types</p>
            </div>
            <div>
              <section>
                <h6>Electronics</h6>
                <ul className="nav-ul">
                  <li>Mobiles</li>
                  <li>Laptops</li>
                  <li>Headphones</li>
                </ul>
              </section>
              <section>
                <h6>Fashion</h6>
                <ul className="nav-ul">
                  <li>Men’s Clothing</li>
                  <li>Women’s Clothing</li>
                  <li>Shoes</li>
                </ul>
              </section>
              <section>
                <h6>Home & Kitchen</h6>
                <ul className="nav-ul">
                  <li>Furniture</li>
                  <li>Appliances</li>
                  <li>Decor</li>
                </ul>
              </section>
            </div>
          </div>
        </li>
        <li id="Products">
          <a href="/market/product">Products</a>
          <div className="nav-dropdown Products-drop">
            <div className="nav-image-container">
              <img
                id="nav-image"
                src="/Images/marketImages/Product.svg"
                alt=""
              />
              <h2 style={{ fontSize: "1.6rem" }}>Products</h2>
              <p style={{ fontSize: "1rem" }}>
                Discover a wide range of quality products.
              </p>
            </div>
            <div>
              <section>
                <h6>Trending Now</h6>
                <ul className="nav-ul">
                  <li>Best Sellers</li>
                  <li>New Arrivals</li>
                  <li>Limited Edition</li>
                </ul>
              </section>
              <section>
                <h6>Tech & Gadgets</h6>
                <ul className="nav-ul">
                  <li>Gaming Accessories</li>
                  <li>Wearable Tech</li>
                  <li>Smart Home Devices</li>
                </ul>
              </section>
              <section>
                <h6>Home & Kitchen</h6>
                <ul className="nav-ul">
                  <li>Furniture</li>
                  <li>Appliances</li>
                  <li>Decor</li>
                </ul>
              </section>
            </div>
          </div>
        </li>
        <li id="Carts">
          <a href="/market/cart">Carts</a>
          <div className="nav-dropdown Carts-drop">
            <div className="nav-image-container">
              <img id="nav-image" src="/Images/marketImages/Carts.svg" alt="" />
              <h2 style={{ fontSize: "1.6rem" }}>Carts</h2>
              <p style={{ fontSize: "1rem" }}>Perfect place to decide to buy</p>
            </div>
            <div>
              <section>
                <h6>Occasions</h6>
                <ul className="nav-ul">
                  <li>Birthdays</li>
                  <li>Anniversaries</li>
                  <li>Holidays</li>
                </ul>
              </section>
              <section>
                <h6> Brands</h6>
                <ul className="nav-ul">
                  <li>Amazon</li>
                  <li>Apple</li>
                  <li>Google Play</li>
                </ul>
              </section>
              <section>
                <h6>Customizable</h6>
                <ul className="nav-ul">
                  <li>Personalized Messages</li>
                  <li>Choose Your Amount</li>
                  <li>Instant Delivery</li>
                </ul>
              </section>
            </div>
          </div>
        </li>
      </ul>
      <div className="btn-container">
        <img src="/Images/marketImages/sun.svg" alt="" />
        <label className="switch btn-color-mode-switch">
          <input value="1" id="color_mode" name="color_mode" type="checkbox" />
          <label
            className="btn-color-mode-switch-inner"
            data-off="Light"
            data-on="Dark"
            htmlFor="color_mode"
          ></label>
        </label>
        <img src="/Images/marketImages/moon.svg" alt="" />
      </div>
      <button id="Login" className="color-lighter">
        <img
          src="/Images/marketImages/login.png"
          alt=""
          style={{ width: "2.5vw", height: "2.5vw" }}
        />
        <big>Login</big>
      </button>
    </nav>
  );
};

export default Header;
