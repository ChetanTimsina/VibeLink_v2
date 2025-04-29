import React from "react";
import "./local.css";
import "../local.css";

const Product = () => {
  return (
    <main id="newMain" style={{ backgroundColor: "white", padding: "1vw" }}>
      <div id="main-image-display">
        <div id="main-image"></div>
        <div id="main-left">
          <h1>Trench coat</h1>
          <h4>
            A trench coat is a classic and stylish outerwear piece designed for
            both fashion and functionality. Typically made from water-resistant
            fabric like cotton gabardine, wool, or leather, it features a
            double-breasted front, wide lapels, and a waist belt for a
            flattering silhouette.
          </h4>
          <h3>Rating:</h3>
          <div className="star-rating">
            <span style={{ fontSize: "4vw" }} className="star filled">
              &#9733;
            </span>
            <span style={{ fontSize: "4vw" }} className="star filled">
              &#9733;
            </span>
            <span style={{ fontSize: "4vw" }} className="star filled">
              &#9733;
            </span>
            <span style={{ fontSize: "4vw" }} className="star filled">
              &#9733;
            </span>
            <span style={{ fontSize: "4vw" }} className="star">
              &#9733;
            </span>
          </div>
        </div>
        <div id="main-right">
          <div id="rating-container">
            <h1>Customer Rating Graph</h1>
            <div id="rating-graph"></div>
          </div>
          <div id="Contact-container">
            <h3>Contact Info:</h3>
            <section>
              <ul id="main-contact">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100089239116629"
                    target="_blank"
                  >
                    <img
                      className="svg"
                      src="/Images/marketImages/logo-facebook.svg"
                      alt="logo-facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <img
                      className="svg"
                      src="/Images/marketImages/logo-linkedin.svg"
                      alt="logo-linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a href="mailto: chetantimsina01944@gmail.com">
                    <img
                      className="svg"
                      src="/Images/marketImages/mail-unread-outline.svg"
                      alt="mail-unread-outline"
                    />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div id="product-display">
        <li>Find Your Perfect Pick</li>
        <div>
          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/kid3.jpg"
                alt="Cozy Kids' Hoodie"
              />
            </div>
            <div className="category">Kids' Fashion</div>
            <div className="heading">
              {" "}
              Cozy Kids' Hoodie
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/shoe2.jpg"
                alt="Sporty Running Shoes"
              />
            </div>
            <div className="category">Footwear</div>
            <div className="heading">
              {" "}
              Sporty Running Shoes
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/jewelry1.jpg"
                alt="Elegant Gold Necklace"
              />
            </div>
            <div className="category">Jewelry</div>
            <div className="heading">
              {" "}
              Elegant Gold Necklace
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/kitchen3.jpg"
                alt="Digital Air Fryer"
              />
            </div>
            <div className="category">Home Appliances</div>
            <div className="heading">
              {" "}
              Digital Air Fryer
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/women4.jpg"
                alt="Stylish Denim Jacket"
              />
            </div>
            <div className="category">Women's Fashion</div>
            <div className="heading">
              {" "}
              Stylish Denim Jacket
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
        <li>Your Choices Are Here</li>
        <div>
          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/beauty2.jpg"
                alt="Luxury Matte Lipstick"
              />
            </div>
            <div className="category">Beauty</div>
            <div className="heading">
              {" "}
              Luxury Matte Lipstick
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/decor2.jpg"
                alt="Luxury Table Lamp"
              />
            </div>
            <div className="category">Home Decor</div>
            <div className="heading">
              {" "}
              Luxury Table Lamp
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/men2.jpg"
                alt="Casual Polo Shirt"
              />
            </div>
            <div className="category">Men's Fashion</div>
            <div className="heading">
              {" "}
              Casual Polo Shirt
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/kid1.jpg"
                alt="Adorable Summer Dress"
              />
            </div>
            <div className="category">Kids' Fashion</div>
            <div className="heading">
              {" "}
              Adorable Summer Dress
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/shoe1.jpg"
                alt="Elegant Leather Loafers"
              />
            </div>
            <div className="category">Footwear</div>
            <div className="heading">
              {" "}
              Elegant Leather Loafers
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
        <li>Discover Your Ideal Match</li>
        <div>
          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/women1.jpg"
                alt="Elegant Evening Gown"
              />
            </div>
            <div className="category">Women's Fashion</div>
            <div className="heading">
              {" "}
              Elegant Evening Gown
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/kitchen1.jpg"
                alt="Stainless Cookware"
              />
            </div>
            <div className="category">Home & Kitchen</div>
            <div className="heading">
              {" "}
              Stainless Cookware
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/beauty1.jpg"
                alt="Hydrating Face Serum"
              />
            </div>
            <div className="category">Beauty</div>
            <div className="heading">
              {" "}
              Hydrating Face Serum
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/kid2.jpg"
                alt="Casual Boys' T-Shirt"
              />
            </div>
            <div className="category">Kids' Fashion</div>
            <div className="heading">
              {" "}
              Casual Boys' T-Shirt
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/shoe4.jpg"
                alt="Classic Formal Shoes"
              />
            </div>
            <div className="category">Footwear</div>
            <div className="heading">
              {" "}
              Classic Formal Shoes
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
        <li>Handpicked Just for You</li>
        <div>
          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/decor1.jpg"
                alt="Elegant Wall Clock"
              />
            </div>
            <div className="category">Home Decor</div>
            <div className="heading">
              {" "}
              Elegant Wall Clock
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/men1.jpg"
                alt="Classic Formal Suit"
              />
            </div>
            <div className="category">Men's Fashion</div>
            <div className="heading">
              {" "}
              Classic Formal Suit
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/jewelry3.jpg"
                alt="Silver Charm Bracelet"
              />
            </div>
            <div className="category">Jewelry</div>
            <div className="heading">
              {" "}
              Silver Charm Bracelet
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/women2.jpg"
                alt="Chic Summer Dress"
              />
            </div>
            <div className="category">Women's Fashion</div>
            <div className="heading">
              {" "}
              Chic Summer Dress
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/men3.jpg"
                alt="Stylish Leather Jacket"
              />
            </div>
            <div className="category">Men's Fashion</div>
            <div className="heading">
              {" "}
              Stylish Leather Jacket
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
        <li>Explore Your Best Picks</li>
        <div>
          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/beauty3.jpg"
                alt="Rejuvenating Cream"
              />
            </div>
            <div className="category">Beauty</div>
            <div className="heading">
              {" "}
              Rejuvenating Cream
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/kid4.jpg"
                alt="Trendy Kids' Sneakers"
              />
            </div>
            <div className="category">Kids' Fashion</div>
            <div className="heading">
              {" "}
              Trendy Kids' Sneakers
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/jewelry4.jpg"
                alt="Rose Gold Watch"
              />
            </div>
            <div className="category">Jewelry</div>
            <div className="heading">
              {" "}
              Rose Gold Watch
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img src="/Images/marketImages/shoe3.jpg" alt="Trendy Sneakers" />
            </div>
            <div className="category">Footwear</div>
            <div className="heading">
              {" "}
              Trendy Sneakers
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/men4.jpg"
                alt="Casual Denim Jeans"
              />
            </div>
            <div className="category">Men's Fashion</div>
            <div className="heading">
              {" "}
              Casual Denim Jeans
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
        <li>Curated Choices Await You</li>
        <div>
          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/jewelry2.jpg"
                alt="Diamond Stud Earrings"
              />
            </div>
            <div className="category">Jewelry</div>
            <div className="heading">
              {" "}
              Diamond Stud Earrings
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/women3.jpg"
                alt="Classic Red Maxi Dress"
              />
            </div>
            <div className="category">Women's Fashion</div>
            <div className="heading">
              {" "}
              Classic Red Maxi Dress
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/kitchen2.jpg"
                alt="Electric Coffee Maker"
              />
            </div>
            <div className="category">Home & Kitchen</div>
            <div className="heading">
              {" "}
              Electric Coffee Maker
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/beauty4.jpg"
                alt="Organic Herbal Shampoo"
              />
            </div>
            <div className="category">Beauty</div>
            <div className="heading">
              {" "}
              Organic Herbal Shampoo
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <img
                src="/Images/marketImages/decor4.jpg"
                alt="Casual Denim Jeans"
              />
            </div>
            <div className="category">Men's Fashion</div>
            <div className="heading">
              {" "}
              Casual Denim Jeans
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
