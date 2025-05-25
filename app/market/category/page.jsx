"use client";
import React, { useEffect } from "react";
import "./local.css";
import Image from "next/image";
import "../local.css";
import { toast } from "react-hot-toast";
const Category = () => {
  useEffect(() => {
    let AddToCarts = document.querySelectorAll(".AddToCarts");
    AddToCarts.forEach((Cart) => {
      Cart.addEventListener("click", () => {
        Cart.style.backgroundColor = "gray";
      });
    });
    document.querySelectorAll(".AddToCarts").forEach((button) => {
      button.addEventListener("click", (event) => {
        let productCard = event.target.closest(".card");
        if (productCard) {
          let clonedHTML = productCard.outerHTML;

          let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

          if (!cartItems.includes(clonedHTML)) {
            cartItems.push(clonedHTML);
            localStorage.setItem("cart", JSON.stringify(cartItems));
          } else {
            // alert("Item already in cart!");
            toast.error("Item already in cart!");
          }
        }
      });
    });
  }, []);
  return (
    <main id="newMain">
      <div id="helper-container" className="color-darker">
        <h1>What are you shopping for today</h1>
        <div id="helper">
          <section>
            <div id="women" className="cateImage"></div>
            <a href="#women-link">
              <h2>Women</h2>
            </a>
          </section>
          <section>
            <div id="men" className="cateImage"></div>
            <a href="#men-link">
              <h2>Men</h2>
            </a>
          </section>
          <section>
            <div id="kid" className="cateImage"></div>
            <a href="#kid-link">
              <h2>Kids</h2>
            </a>
          </section>
          <section>
            <div id="shoe" className="cateImage"></div>
            <a href="#shoe-link">
              <h2>Shoes</h2>
            </a>
          </section>
          <section>
            <div id="jewelry" className="cateImage"></div>
            <a href="#jewelry-link">
              <h2>jewelry</h2>
            </a>
          </section>
          <section>
            <div id="beauty" className="cateImage"></div>
            <a href="#beauty-link">
              <h2>Beauty</h2>
            </a>
          </section>
          <section>
            <div id="decor" className="cateImage"></div>
            <a href="#decor-link">
              <h2>Decor</h2>
            </a>
          </section>
          <section>
            <div id="home" className="cateImage"></div>
            <a href="#home-link">
              <h2>Home</h2>
            </a>
          </section>
        </div>
      </div>
      <div id="main-container">
        <div id="women-container">
          <h2
            id="women-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Women
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/women1.jpg"
                    alt="Women Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Elegant Evening Gown</h6>
                  <p>
                    Material: Premium Satin Fabric <br />
                    Design: Sleeveless with Floral Embroidery <br />
                    Length: Floor-Length <br />
                    Price: $129
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
                  This elegant evening gown features premium satin fabric with
                  floral embroidery, a sleeveless design, and a flattering
                  silhouette, perfect for formal events and special occasions.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/women2.jpg"
                    alt="Women Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Chic Summer Dress</h6>
                  <p>
                    Material: Lightweight Cotton Blend <br />
                    Design: Floral Print with Ruffled Sleeves <br />
                    Length: Knee-Length <br />
                    Price: $89
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
                  This chic summer dress is made from a lightweight cotton
                  blend, featuring a beautiful floral print with ruffled
                  sleeves. Its breezy design makes it perfect for casual outings
                  and sunny days.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/women3.jpg"
                    alt="Women Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Classic Red Maxi Dress</h6>
                  <p>
                    Material: Soft Chiffon Fabric <br />
                    Design: Off-Shoulder with Pleated Skirt <br />
                    Length: Full-Length <br />
                    Price: $149
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
                  This classic red maxi dress features a soft chiffon fabric, an
                  elegant off-shoulder design, and a flowing pleated skirt,
                  perfect for evening parties and special occasions.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/women4.jpg"
                    alt="Women Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Stylish Denim Jacket</h6>
                  <p>
                    Material: Premium Washed Denim <br />
                    Design: Button-Up with Front Pockets <br />
                    Fit: Slim-Fit <br />
                    Price: $99
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
                  This stylish denim jacket is made from premium washed denim,
                  featuring a slim-fit cut with button-up closure and front
                  pockets, perfect for casual wear and layering.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="men-container">
          <h2
            id="men-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Men
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/men1.jpg"
                    alt="Men Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Classic Formal Suit</h6>
                  <p>
                    Material: Premium Wool Blend <br />
                    Design: Single-Breasted with Notch Lapel <br />
                    Fit: Tailored-Fit <br />
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
                  This classic formal suit is crafted from a premium wool blend,
                  featuring a single-breasted design with a notch lapel, ideal
                  for business meetings and formal occasions.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/men2.jpg"
                    alt="Men Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Casual Polo Shirt</h6>
                  <p>
                    Material: Soft Cotton Fabric <br />
                    Design: Short Sleeve with Buttoned Collar <br />
                    Fit: Regular-Fit <br />
                    Price: $49
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
                  This casual polo shirt is made from soft cotton fabric,
                  featuring a buttoned collar and short sleeves, perfect for
                  everyday wear and relaxed outings.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/men3.jpg"
                    alt="Men Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Stylish Leather Jacket</h6>
                  <p>
                    Material: Genuine Leather <br />
                    Design: Zip-Up with Stand Collar <br />
                    Fit: Slim-Fit <br />
                    Price: $249
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
                  This stylish leather jacket is crafted from genuine leather,
                  featuring a zip-up design with a stand collar, ideal for a
                  rugged yet sophisticated look.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/men4.jpg"
                    alt="Men Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Casual Denim Jeans</h6>
                  <p>
                    Material: Stretchable Denim <br />
                    Design: Classic Five-Pocket Styling <br />
                    Fit: Slim-Fit <br />
                    Price: $79
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
                  These casual denim jeans are made from stretchable denim,
                  featuring a slim-fit cut with classic five-pocket styling,
                  perfect for everyday comfort and style.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="kid-container">
          <h2
            id="kid-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Kids
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/kid1.jpg"
                    alt="Kids Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Adorable Summer Dress</h6>
                  <p>
                    Material: Soft Cotton Fabric <br />
                    Design: Floral Print with Ruffled Sleeves <br />
                    Size: Available for Ages 3-8 <br />
                    Price: $39
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
                  This adorable summer dress features soft cotton fabric, a cute
                  floral print, and ruffled sleeves, making it perfect for kids
                  casual outings.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/kid2.jpg"
                    alt="Kids Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Casual Boys T-Shirt</h6>
                  <p>
                    Material: 100% Cotton <br />
                    Design: Graphic Print with Round Neck <br />
                    Size: Available for Ages 4-10 <br />
                    Price: $29
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
                  This casual boys t-shirt is made from 100% cotton, featuring
                  a fun graphic print and a comfortable round neck, ideal for
                  everyday wear.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/kid3.jpg"
                    alt="Kids Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Cozy Kids Hoodie</h6>
                  <p>
                    Material: Fleece Cotton Blend <br />
                    Design: Zip-Up with Kangaroo Pockets <br />
                    Size: Available for Ages 5-12 <br />
                    Price: $49
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
                  This cozy kids hoodie is made from a fleece cotton blend,
                  featuring a zip-up design with kangaroo pockets, perfect for
                  warmth and style.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/kid4.jpg"
                    alt="Kids Fashion"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Trendy Kids Sneakers</h6>
                  <p>
                    Material: Breathable Mesh with Rubber
                    <br />
                    Design: Slip-On with Adjustable Straps <br />
                    Size: Available for Ages 4-10 <br />
                    Price: $59
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
                  These trendy kids sneakers feature breathable mesh material,
                  a comfortable rubber sole, and adjustable straps, perfect for
                  active kids.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="shoe-container">
          <h2
            id="shoe-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Shoes
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/shoe1.jpg"
                    alt="Shoes"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Elegant Leather Loafers</h6>
                  <p>
                    Material: Genuine Leather <br />
                    Design: Slip-On with Cushioned Sole <br />
                    Size: Available in US 6-12 <br />
                    Price: $99
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
                  These elegant leather loafers offer a sleek slip-on design
                  with a cushioned sole, perfect for both formal and casual
                  wear.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/shoe2.jpg"
                    alt="Shoes"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Sporty Running Shoes</h6>
                  <p>
                    Material: Breathable Mesh with Rubber
                    <br />
                    Design: Lace-Up with Arch Support <br />
                    Size: Available in US 5-13 <br />
                    Price: $79
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
                  These sporty running shoes feature breathable mesh material, a
                  sturdy rubber sole, and excellent arch support for maximum
                  comfort.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/shoe3.jpg"
                    alt="Shoes"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Trendy Sneakers</h6>
                  <p>
                    Material: Canvas with Rubber Outsole <br />
                    Design: Lace-Up with Padded Collar <br />
                    Size: Available in US 6-12 <br />
                    Price: $69
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
                  These trendy high-top sneakers offer a stylish canvas design
                  with a comfortable padded collar, making them ideal for casual
                  and streetwear fashion.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/shoe4.jpg"
                    alt="Shoes"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Classic Formal Shoes</h6>
                  <p>
                    Material: Premium Faux Leather <br />
                    Design: Lace-Up with Textured Finish <br />
                    Size: Available in US 7-13 <br />
                    Price: $89
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
                  These classic formal shoes feature a premium faux leather
                  design with a textured finish, perfect for business and formal
                  occasions.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="jewelry-container">
          <h2
            id="jewelry-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Jewelrys
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/jewelry1.jpg"
                    alt="Jewelry"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Elegant Gold Necklace</h6>
                  <p>
                    Material: 18K Gold <br />
                    Design: Delicate Chain with Pendant <br />
                    Length: 18 inches <br />
                    Price: $249
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
                  This elegant gold necklace features an 18K gold chain with a
                  delicate pendant, perfect for both casual and formal wear.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/jewelry2.jpg"
                    alt="Jewelry"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Diamond Stud Earrings</h6>
                  <p>
                    Material: 14K White Gold <br />
                    Design: Classic Round Cut <br />
                    Size: 0.5 Carat Each <br />
                    Price: $399
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
                  These diamond stud earrings feature a timeless round-cut
                  design set in 14K white gold, adding elegance to any outfit.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/jewelry3.jpg"
                    alt="Jewelry"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Silver Charm Bracelet</h6>
                  <p>
                    Material: Sterling Silver <br />
                    Design: Adjustable Chain with Charms <br />
                    Length: 7 inches <br />
                    Price: $129
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
                  This silver charm bracelet is crafted from sterling silver,
                  featuring an adjustable chain and elegant charms, perfect for
                  everyday wear.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/jewelry4.jpg"
                    alt="Jewelry"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Rose Gold Watch</h6>
                  <p>
                    Material: Stainless Steel with Rose Gold
                    <br />
                    Design: Minimalist Dial with Leather
                    <br />
                    Water Resistance: 50m <br />
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
                  This rose gold watch features a stainless steel case with a
                  leather strap, offering a sleek and modern design for any
                  occasion.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="beauty-container">
          <h2
            id="beauty-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Beauty Product
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/beauty1.jpg"
                    alt="Beauty Product"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Hydrating Face Serum</h6>
                  <p>
                    Ingredients: Hyaluronic Acid, Vitamin C <br />
                    Benefits: Deep Hydration & Brightening <br />
                    Size: 30ml <br />
                    Price: $49
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
                  This hydrating face serum is enriched with hyaluronic acid and
                  vitamin C, providing deep hydration and a radiant glow.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/beauty2.jpg"
                    alt="Beauty Product"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Luxury Matte Lipstick</h6>
                  <p>
                    Ingredients: Shea Butter, Jojoba Oil <br />
                    Finish: Matte, Long-Lasting <br />
                    Shades: Available in 10 Colors <br />
                    Price: $25
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
                  This luxury matte lipstick is infused with shea butter and
                  jojoba oil for a smooth, long-lasting finish in vibrant
                  colors.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/beauty3.jpg"
                    alt="Rejuvenating Cream"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Rejuvenating Cream</h6>
                  <p>
                    Ingredients: Retinol, Collagen <br />
                    Benefits: Anti-Aging & Skin Repair <br />
                    Size: 50ml <br />
                    Price: $59
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
                  This rejuvenating night cream with retinol and collagen helps
                  reduce wrinkles and restore skins natural glow.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/beauty4.jpg"
                    alt="Organic Herbal Shampoo"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Organic Herbal Shampoo</h6>
                  <p>
                    Ingredients: Aloe Vera, Argan Oil <br />
                    Benefits: Strengthens & Nourishes Hair <br />
                    Size: 250ml <br />
                    Price: $35
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
                  This organic herbal shampoo with aloe vera and argan oil
                  nourishes the scalp and strengthens hair from the roots.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="decor-container">
          <h2
            id="decor-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Decorations
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/decor1.jpg"
                    alt="Elegant Wall Clock"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Elegant Wall Clock</h6>
                  <p>
                    Material: Premium Wood & Metal <br />
                    Design: Vintage Roman Numerals <br />
                    Size: 24-inch Diameter <br />
                    Price: $79
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
                  This elegant wall clock features a vintage design with Roman
                  numerals, adding a classic touch to any room.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/decor2.jpg"
                    alt="Luxury Table Lamp"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Luxury Table Lamp</h6>
                  <p>
                    Material: Ceramic Base & Fabric Shade <br />
                    Design: Modern Minimalist <br />
                    Height: 18 inches <br />
                    Price: $59
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
                  This luxury table lamp features a sleek ceramic base with a
                  soft fabric shade, perfect for adding warmth to any space.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/decor3.jpg"
                    alt="Decorative Vase Set"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Decorative Vase Set</h6>
                  <p>
                    Material: Handcrafted Ceramic <br />
                    Design: Geometric Patterns <br />
                    Set: 3 Vases <br />
                    Price: $45
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
                  This decorative vase set features handcrafted ceramic with
                  elegant geometric patterns, ideal for home decor.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/decor4.jpg"
                    alt="Modern Wall Art"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Modern Wall Art</h6>
                  <p>
                    Material: Canvas & Wooden Frame <br />
                    Design: Abstract Painting <br />
                    Size: 36x24 inches <br />
                    Price: $99
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
                  This modern wall art piece showcases an abstract painting on
                  high-quality canvas, bringing a contemporary feel to any
                  space.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="kitchen-container">
          <h2
            id="home-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Home
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/kitchen1.jpg"
                    alt="Stainless Cookware"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Stainless Cookware</h6>
                  <p>
                    Material: Premium Stainless Steel <br />
                    Includes: 5 Pots & Pans with Lids <br />
                    Features: Non-Stick & Induction
                    <br />
                    Price: $129
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
                  This premium stainless steel cookware set is non-stick and
                  induction safe, perfect for all types of cooking.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/kitchen2.jpg"
                    alt="Electric Coffee Maker"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Electric Coffee Maker</h6>
                  <p>
                    Material: High-Quality Plastic & Metal <br />
                    Capacity: 12 Cups <br />
                    Features: Programmable Timer & Auto
                    <br />
                    Price: $79
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
                  This electric coffee maker features a 12-cup capacity with a
                  programmable timer for fresh coffee anytime.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/kitchen3.jpg"
                    alt="Ceramic Dinnerware Set"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Ceramic Dinnerware Set</h6>
                  <p>
                    Material: Handcrafted Ceramic <br />
                    Includes: 16-Piece Set (Plates, Bowls) <br />
                    Design: Elegant Glaze Finish <br />
                    Price: $99
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
                  This handcrafted ceramic dinnerware set features an elegant
                  glaze finish, perfect for both casual and formal dining.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/kitchen4.jpg"
                    alt="Digital Air Fryer"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Digital Air Fryer</h6>
                  <p>
                    Material: Stainless Steel & Plastic <br />
                    Capacity: 5.8 Quarts <br />
                    Features: Touchscreen Controls & Rapid
                    <br />
                    Price: $139
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
                  This digital air fryer uses rapid air technology for
                  healthier, crispy meals with little to no oil.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="recom-container">
          <h2
            id="beauty-link"
            style={{
              textAlign: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
            }}
          >
            Recommend
          </h2>
          <div id="category-section">
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/car.png"
                    alt="BMW M4 Coupe"
                    fill
                    style={{ objectFit: "cover" }}
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
                  The BMW M4 Coupe is a high-performance sports car featuring a
                  3.0L twin-turbo inline-6 engine, delivering 503 HP. With a
                  sleek design, aggressive stance, and luxurious interior
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/serum.png"
                    alt="Organic Serum"
                    fill
                    style={{ objectFit: "cover" }}
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
                  This organic facial serum hydrates deeply, boosts collagen,
                  reduces fine lines, enhances skin glow, and promotes a
                  youthful appearance.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/cloth.png"
                    alt="Luxury clothing rack"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div id="card-text">
                  <h6>Luxury clothing rack</h6>
                  <p>
                    Material: Metal frame
                    <br />
                    Capacity:up to 20 garments <br />
                    Design: Elegant gold arch design
                    <br />
                    Usage: Ideal for showrooms.
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
                  This stylish gold clothing rack offers ample hanging space,
                  perfect for organizing clothes in retail stores, boutiques, or
                  home closets.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="card">
              <div className="first-content">
                <div
                  className="Rec-Image-container"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    src="/Images/marketImages/watch.png"
                    alt="Smartwatch"
                    fill
                    style={{ objectFit: "cover" }}
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
                  A sleek smartwatch with a 1.4-inch AMOLED display, heart rate
                  monitoring, fitness tracking, notifications, long battery
                  life, and water resistance.
                </span>
                <button className="AddToCarts second-content-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
