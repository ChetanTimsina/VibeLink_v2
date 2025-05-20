"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import "./local.css";
import { toast } from "react-hot-toast";
import { toastBottomRight } from "@/app/lib/toastify";

const InitialPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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

      if (res.status === 200) {
        const user = await res.json();
        // localStorage.setItem("vibeUser", JSON.stringify(user));
        Cookies.set("vibeUser", user.id, {
          expires: 365 * 100,
          path: "/",
        });
        Cookies.set("isLoggedIn", "true", { expires: 1 / 24 });
        // const userfromlocal = JSON.parse(localStorage.getItem("vibeUser"));
        // console.log(userfromlocal?.username);
        router.push("/");
      } else {
        const data = await res.json();

        toast.error(data.error || "Login failed ❌");
      }
    } catch (error) {
      toastBottomRight("Something went wrong 😵:", error);

      toast.error("Server Error ❌");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const AddButton = document.getElementById("user-0");
    const form = document.querySelector(".LoginForm");
    const cross = document.getElementById("cross");
    AddButton.addEventListener("click", () => {
      form.style.display = "block";
    });
    cross.addEventListener("click", () => {
      form.style.display = "none";
    });
  });

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
            <div className="userImage"></div>
            <h3>User Name</h3>
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
