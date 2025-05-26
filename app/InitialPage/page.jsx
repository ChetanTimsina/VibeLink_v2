"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import "./local.css";
import { toast } from "react-hot-toast";

const InitialPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [loggedUser, setLoggedUser] = useState(null); // 🧠 Store the user info here

  const getBase64FromBuffer = (bufferData) => {
    if (!bufferData) return null;

    const byteArray = bufferData.data
      ? new Uint8Array(bufferData.data)
      : new Uint8Array(Object.values(bufferData));

    let binary = "";
    byteArray.forEach((b) => (binary += String.fromCharCode(b)));
    return btoa(binary);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userId = Cookies.get("vibeUser");
      if (!userId) return;

      try {
        const res = await fetch("/api/registed/withid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: parseInt(userId) }),
        });

        if (res.ok) {
          const user = await res.json();
          console.log(user);
          const profileRecent = user?.userImage
            ? `data:image/png;base64,${getBase64FromBuffer(user.userImage)}`
            : "/Images/profile.svg";

          setLoggedUser({
            username: user.username || "User Name",
            userImage: profileRecent,
          });
        } else {
          const data = await res.json();
          toast.error(data.error || "Login failed ❌");
        }
      } catch (error) {
        console.log("Something went wrong 😵:", error);
        toast.error("Server Error ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const addButton = document.getElementById("user-0");
    const form = document.querySelector(".LoginForm");
    const cross = document.getElementById("cross");

    if (!addButton || !form || !cross) return;

    const showForm = () => (form.style.display = "block");
    const hideForm = () => (form.style.display = "none");

    addButton.addEventListener("click", showForm);
    cross.addEventListener("click", hideForm);

    return () => {
      addButton.removeEventListener("click", showForm);
      cross.removeEventListener("click", hideForm);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/registed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const user = await res.json();
        Cookies.set("vibeUser", user.id, {
          expires: 365 * 100,
          path: "/",
        });
        Cookies.set("isLoggedIn", "true", { expires: 1 / 24 });
        router.push("/");
      } else {
        const data = await res.json();
        toast.error(data.error || "Login failed ❌");
      }
    } catch (error) {
      console.log("Something went wrong 😵:", error);
      toast.error("Server Error ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="main-container" style={{ height: "100vh" }}>
      <section>
        <h1 style={{ color: "#0866ff" }}>VibeLink</h1>
        <h1 style={{ fontWeight: "500" }}>Recent Logins</h1>
        <h4 style={{ color: "gray", fontWeight: "lighter" }}>
          Click your picture or add an account.
        </h4>

        <section className="user-accounts">
          <section className="user-1">
            <div
              className="userImage"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: loggedUser
                  ? `url(${loggedUser.userImage})`
                  : "url(/Images/profile.svg)",
              }}
            ></div>
            <h3 className="user-name">
              {loggedUser ? loggedUser.username : "User Name"}
            </h3>
          </section>

          <section id="user-0">
            <div className="AdduserImage">
              <img src="/Images/nav-right-profileAdd.svg" alt="add user" />
            </div>
            <h3 id="addAccountButton" style={{ color: "#1976f2" }}>
              Add Account
            </h3>
          </section>

          <div id="right-section">
            <form
              onSubmit={handleSubmit}
              className="LoginForm"
              style={{
                display: "none",
                position: "absolute",
                top: "2vw",
                left: "auto",
              }}
            >
              <section
                style={{
                  padding: "1vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h1 style={{ fontSize: "1.7vw", fontWeight: "light" }}>
                  Log in to VibeLink
                </h1>
                <div id="cross"></div>
              </section>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="submit"
                value={loading ? "Adding" : "Add Account"}
                disabled={loading}
              />
              <h4>
                <a
                  href="/InitialPage/forgotPassword"
                  style={{ textDecoration: "none" }}
                >
                  Forgotten password?
                </a>
              </h4>
            </form>
          </div>
        </section>
      </section>

      <section id="right-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            value={loading ? "Logging in..." : "Log in"}
            disabled={loading}
          />

          <h4>
            <a
              href="/InitialPage/forgotPassword"
              style={{ textDecoration: "none" }}
            >
              Forgotten password?
            </a>
          </h4>
          <br />
          <hr />
          <br />
          <a
            href="/InitialPage/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            Create new account
          </a>
        </form>
        <p>
          <b>Create a Page</b> for a celebrity, brand or business.
        </p>
      </section>
    </div>
  );
};

export default InitialPage;
