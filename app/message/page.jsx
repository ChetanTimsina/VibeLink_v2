"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { io } from "socket.io-client";
import "./local.css";

// Add dynamic export to prevent prerendering
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const runtime = "edge";

let socket;

function ChatComponent() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");
  const userId = searchParams.get("currentUser");
  const [user, setUser] = useState(null);
  const [userCache, setUserCache] = useState({});
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBase64FromBuffer = (bufferData) => {
    if (!bufferData) return null;
    const byteArray = bufferData.data
      ? new Uint8Array(bufferData.data)
      : new Uint8Array(Object.values(bufferData));
    let binary = "";
    byteArray.forEach((b) => (binary += String.fromCharCode(b)));
    return btoa(binary);
  };

  // Init socket once with error handling
  useEffect(() => {
    try {
      if (!socket) {
        socket = io(undefined, {
          path: "/api/socketio",
          reconnectionAttempts: 3,
          timeout: 10000,
        });

        socket.on("connect_error", (err) => {
          setError("Failed to connect to chat server: " + err.message);
        });

        socket.on("connect", () => {
          setIsLoading(false);
        });
      }
    } catch (err) {
      setError("Failed to initialize chat: " + err.message);
    }
  }, []);

  // Fetch current user data
  useEffect(() => {
    if (!userId) return;
    (async () => {
      try {
        const res = await fetch("/api/registed/withid", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: parseInt(userId) }),
        });
        const data = await res.json();
        setUser(data.user);
        // Cache current user image & name for self messages
        setUserCache((prev) => ({
          ...prev,
          [userId]: {
            username: data.user.username,
            image: data.user.userImage
              ? `data:image/png;base64,${getBase64FromBuffer(
                  data.user.userImage
                )}`
              : "/Images/profile.svg",
          },
        }));
      } catch {
        setUser({ username: "Unknown" });
      }
    })();
  }, [userId]);

  // Join room & notify server
  useEffect(() => {
    if (!roomId || !userId || !user?.username) return;
    socket.emit("user-joined", {
      roomId,
      userId: parseInt(userId),
      username: user.username,
    });
  }, [roomId, userId, user?.username]);

  // Listen for incoming messages and system messages
  useEffect(() => {
    if (!roomId) return;

    // Message from other users
    socket.on("receive-message", async (data) => {
      if (data.roomId !== roomId) return;

      // Cache sender info if missing
      if (!userCache[data.senderId]) {
        try {
          const res = await fetch("/api/registed/withid", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: parseInt(data.senderId) }),
          });
          const result = await res.json();
          const senderUser = result.user;
          const base64Img = senderUser?.userImage
            ? `data:image/png;base64,${getBase64FromBuffer(
                senderUser.userImage
              )}`
            : "/Images/profile.svg";

          setUserCache((prev) => ({
            ...prev,
            [data.senderId]: {
              username: senderUser.username || "Unknown",
              image: base64Img,
            },
          }));
        } catch {
          setUserCache((prev) => ({
            ...prev,
            [data.senderId]: {
              username: "Unknown",
              image: "/Images/profile.svg",
            },
          }));
        }
      }

      setChat((prev) => [...prev, data]);
    });

    // System messages (join, leave, already in room list)
    socket.on("system-message", (data) => {
      setChat((prev) => [...prev, { type: "system", text: data.text }]);
    });

    return () => {
      socket.off("receive-message");
      socket.off("system-message");
    };
  }, [roomId, userCache]);

  const handleSend = () => {
    if (!msg.trim()) return;
    socket.emit("send-message", {
      roomId,
      text: msg,
      senderId: parseInt(userId),
    });
    setMsg("");
  };

  // Profile image for self messages
  const profileImageSrc = user?.userImage
    ? `data:image/png;base64,${getBase64FromBuffer(user.userImage)}`
    : "/Images/profile.svg";

  if (error) {
    return (
      <div
        className="chat-wrapper"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <h2>Error</h2>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
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
          Retry
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className="chat-wrapper"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <h2>Connecting to chat...</h2>
        <p>Please wait while we establish connection</p>
      </div>
    );
  }

  if (!roomId) {
    return (
      <div
        className="chat-wrapper"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <h2>Invalid Chat Room</h2>
        <p>No room ID provided</p>
      </div>
    );
  }

  return (
    <div className="chat-wrapper">
      <div className="chat-box">
        <div className="chat-header">
          <h1>🌐 LAN Chat</h1>
          <span>Room: {roomId}</span>
        </div>

        <div className="chat-window">
          {chat.map((c, i) => {
            if (c.type === "system") {
              return (
                <div key={i} className="chat-system-message">
                  <p>{c.text}</p>
                </div>
              );
            }

            const isOwnMessage = c.senderId === parseInt(userId);

            // Grab cached sender info or fallback
            const senderInfo = userCache[c.senderId] || {
              username: isOwnMessage ? user?.username || "You" : "Loading...",
              image: isOwnMessage ? profileImageSrc : "/Images/profile.svg",
            };

            return (
              <div
                key={i}
                className={`chat-message ${isOwnMessage ? "own" : "other"}`}
              >
                <img
                  src={senderInfo.image}
                  alt="profile"
                  className="chat-avatar"
                />
                <div className="chat-bubble">
                  <span className="chat-user">{senderInfo.username}</span>
                  <p className="chat-text">{c.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button onClick={handleSend} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatComponent />
    </Suspense>
  );
}
