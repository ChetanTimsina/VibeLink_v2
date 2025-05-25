"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { io } from "socket.io-client";
import "./local.css";

// Add dynamic export to prevent prerendering
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

let socket;

export default function Home() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");
  const userId = searchParams.get("currentUser");
  const [user, setUser] = useState(null);
  const [userCache, setUserCache] = useState({});
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");

  const getBase64FromBuffer = (bufferData) => {
    if (!bufferData) return null;
    const byteArray = bufferData.data
      ? new Uint8Array(bufferData.data)
      : new Uint8Array(Object.values(bufferData));
    let binary = "";
    byteArray.forEach((b) => (binary += String.fromCharCode(b)));
    return btoa(binary);
  };

  // Init socket once
  useEffect(() => {
    if (!socket) {
      socket = io(undefined, { path: "/api/socketio" });
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

  return (
    <div className="chat-wrapper">
      {roomId ? (
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
      ) : (
        <p className="no-room">Invalid chat session or missing roomId</p>
      )}
    </div>
  );
}
