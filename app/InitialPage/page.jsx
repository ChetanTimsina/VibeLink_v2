"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./local.css";

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
        body: JSON.stringify({ username, password }), // 🛑 no email sent bro
      });

      if (res.status === 200) {
        console.log("Login success!");
        router.push("/"); // 🚀 move to homepage
      } else {
        const data = await res.json();
        alert(data.error || "Login failed ❌");
      }
    } catch (error) {
      console.error("Something went wrong 😵:", error);
      alert("Server Error ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="main-container">
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

          <section className="user-0">
            <div className="AdduserImage">
              <img src="/Images/nav-right-profileAdd.svg" alt="add user" />
            </div>
            <h3 style={{ color: "#1976f2" }}>Add Account</h3>
          </section>
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
            <a href="#" style={{ textDecoration: "none" }}>
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
