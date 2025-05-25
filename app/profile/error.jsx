"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ marginTop: "7vw", textAlign: "center", padding: "20px" }}>
      <div className="top-main">
        <div
          style={{
            padding: "20px",
            background: "#fff5f5",
            borderRadius: "8px",
            margin: "20px",
          }}
        >
          <h2 style={{ color: "#e53e3e", marginBottom: "10px" }}>
            Something went wrong!
          </h2>
          <p style={{ marginBottom: "20px" }}>
            {error.message || "Failed to load profile"}
          </p>
          <button
            onClick={reset}
            style={{
              padding: "10px 20px",
              backgroundColor: "#e53e3e",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
