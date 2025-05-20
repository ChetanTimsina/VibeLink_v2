"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // For setting cookies after login
import { toastBottomRight } from "@/app/lib/toastify";

import "../local.css";

const Register = () => {
  const router = useRouter(); // For redirecting programmatically
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const registerResponse = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, isLogin: false }),
      });

      const registerData = await registerResponse.json();

      if (registerResponse.ok) {
        // 🎯 Success
        setSuccessMessage("Account created successfully! Logging you in...");
        setTimeout(() => {
          // Set user info in cookie after registration
          Cookies.set("vibeUser", registerData.userId, {
            expires: 365 * 100,
            path: "/",
          });
          router.push("/InitialPage"); // 🛫 Redirect to homepage
        }, 1000);
      } else if (registerData.error === "User already exists 🚨") {
        // 🧠 Try login
        const loginResponse = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password, isLogin: true }),
        });

        const loginData = await loginResponse.json();

        if (loginResponse.ok) {
          setSuccessMessage("Login successful! Redirecting...");
          Cookies.set("vibeUser", loginData.userId, {
            expires: 365 * 100,
            path: "/",
          });
          setTimeout(() => {
            router.push("/"); // 🛫 Redirect to homepage
          }, 1000);
        } else {
          setErrorMessage(loginData.error || "Login failed!");
        }
      } else {
        setErrorMessage(registerData.error || "Something went wrong!");
      }
    } catch (error) {
      toastBottomRight(error);
      setErrorMessage("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        marginTop: "7vw",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f2f4f7",
        height: "100vh",
      }}
    >
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
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={loading ? "Loading..." : "Register / Login"}
            disabled={loading}
          />
          <br />
          <br />
          <a className="back_to_login" href="/InitialPage">
            back to login
          </a>
        </form>
      </section>
    </div>
  );
};

export default Register;
