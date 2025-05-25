export default function Loading() {
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
        <h2>Loading chat...</h2>
        <p>Please wait while we connect to the server</p>
      </div>
    </div>
  );
}
