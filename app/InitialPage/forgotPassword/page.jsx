"use client";
import React, { useState } from "react";
import "../local.css";
import { toastBottomRight } from "@/app/lib/toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      // Call the API to handle email sending
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email, // Sending the email address to the API
        }),
      });

      // Check if the response is OK
      if (!response.ok) {
        const errorData = await response.text(); // If the response isn't JSON, handle it as text
        toastBottomRight("Error Response:", errorData);
        setError("Something went wrong, please try again.");
        return;
      }

      // Try parsing the JSON response if everything's good
      const data = await response.json();

      // If the response is OK, display the success message
      if (response.ok) {
        setMessage(data.message || "Password sent to your email!");
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (err) {
      toastBottomRight("Error during fetch:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <section
      id="right-section"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "7vw",
        height: "100vh",
        backgroundColor: "#f2f4f7",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "left", position: "relative" }}
        className="forgot-password-form"
      >
        <h1 style={{ color: "#0866ff" }}>VibeLink</h1>
        <h1 style={{ fontWeight: "500" }}>Forgot Password</h1>
        <h4 style={{ color: "gray", fontWeight: "lighter" }}>
          Enter your email so that we can send you the password to your email.
        </h4>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button type="submit">Send Password</button>
          <a className="back_to_login" href="/InitialPage">
            back to login
          </a>
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
