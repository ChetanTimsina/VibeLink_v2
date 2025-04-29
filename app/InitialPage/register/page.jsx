"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // 🛩️

import "../local.css";

const Register = () => {
  const router = useRouter(); // to programmatically redirect
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // 👾 First, TRY to register
      const registerResponse = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, isLogin: false }),
      });

      const registerData = await registerResponse.json();

      if (registerResponse.ok) {
        // 🎯 Registration Success
        setSuccessMessage("Account created successfully! Logging you in...");
        // Optionally auto login here, but let's just route them
        setTimeout(() => {
          router.push("/"); // 🛫 send to homepage
        }, 1000);
      } else if (registerData.error === "User already exists 🚨") {
        // 🧠 If user already exists, then TRY login instead
        const loginResponse = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password, isLogin: true }),
        });

        const loginData = await loginResponse.json();

        if (loginResponse.ok) {
          setSuccessMessage("Login successful! Redirecting...");
          setTimeout(() => {
            router.push("/");
          }, 1000);
        } else {
          setErrorMessage(loginData.error || "Login failed!");
        }
      } else {
        setErrorMessage(registerData.error || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <div
      style={{ marginTop: "7vw", display: "flex", justifyContent: "center" }}
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
            type="text"
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
          <input type="submit" value="Register / Login" />
          {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
          {successMessage && (
            <h4 style={{ color: "green" }}>{successMessage}</h4>
          )}
        </form>
      </section>
    </div>
  );
};

export default Register;
