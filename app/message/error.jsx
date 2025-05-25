"use client";

export default function Error({ error, reset }) {
  return (
    <div
      className="chat-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Something went wrong!</h2>
        <p>{error.message || "Failed to load chat"}</p>
        <button
          onClick={reset}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
