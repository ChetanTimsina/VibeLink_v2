import React from "react";
import "@/app/market/local.css";
const Footer = () => {
  return (
    <>
      <footer className="color-darker">
        <div id="cta">
          <section id="sign">
            <h2>Don't Miss Out</h2>
            <br />
            <p>
              Sign up for the latest beauty news, product samples and coupons
            </p>
            <br />
            <form id="footer-form" action="\journals" method="post">
              <section>
                <label for="Email" style={{ fontSize: "1.3vw" }}>
                  Email Address
                </label>
                <br />
                <input type="email" id="Email" />
              </section>
              <section>
                <label for="birthday" style={{ fontSize: "1.3vw" }}>
                  Birthday
                </label>
                <br />
                <input type="date" id="birthday" />
              </section>
              <input id="sub" type="submit" value="SIGN UP" />
            </form>
            <br />
            <p>
              This site is intended for US consumers. By signing up, you
              understand and agree that your data <br />
              will be collected and used subject to our US Privacy Policy and
              Terms of Use.
            </p>
            <br />
          </section>
          <section className="other-footer">
            <h3>COMPANY</h3>
            <h4>About</h4>
            <h4>Experts and Spokesmodels</h4>
          </section>
          <section className="other-footer">
            <h3>CUSTOMER SERVICE</h3>
            <h4>Contact Us</h4>
            <h4>My Account</h4>
            <h4>Store Locator</h4>
            <h4>Redeem Rewards</h4>
          </section>
          <section className="other-footer">
            <h3>MORE TO EXPLORE</h3>
            <h4>Beauty Magazine</h4>
            <h4>Tools and Consultations</h4>
            <h4>Offers</h4>
            <h4>L'Oréal Paris</h4>
          </section>
          <section id="cta-link">
            <ul className="bottom_ul">
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
                <a
                  href="https://www.instagram.com/chetan.timsina/"
                  target="_blank"
                >
                  <img
                    className="svg"
                    src="/Images/marketImages/logo-instagram.svg"
                    alt="logo-instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/User01944" target="_blank">
                  <img
                    className="svg"
                    src="/Images/marketImages/logo-github.svg"
                    alt="logo-github"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@CodeInFocus" target="_blank">
                  <img
                    className="svg"
                    src="/Images/marketImages/logo-youtube (1).svg"
                    alt="logo-youtube"
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
      </footer>
      <a href="#upperSection">
        <div id="up">
          <img
            src="/Images/marketImages/chevron-up-outline.svg"
            alt=""
            width="60%"
            style={{ paddingTop: "8px" }}
          />
        </div>
      </a>
    </>
  );
};

export default Footer;
