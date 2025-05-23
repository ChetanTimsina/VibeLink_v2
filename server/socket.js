// server/socket.js
const { Server } = require("socket.io");

const usersInRoom = {}; // { roomId: { socketId: { userId, username } } }

function setupSocket(server) {
  const io = new Server(server, {
    path: "/api/socketio",
  });

  io.on("connection", (socket) => {
    console.log("🔌 New socket connected:", socket.id);

    socket.on("user-joined", ({ roomId, userId, username }) => {
      socket.join(roomId);

      if (!usersInRoom[roomId]) usersInRoom[roomId] = {};
      usersInRoom[roomId][socket.id] = { userId, username };

      const others = Object.values(usersInRoom[roomId])
        .filter((u) => u.userId !== userId)
        .map((u) => u.username);

      socket.emit("system-message", {
        text: `Users already in room: ${
          others.length ? others.join(", ") : "No one else here."
        }`,
      });

      socket.to(roomId).emit("system-message", {
        text: `${username} has joined the chat!`,
      });
    });

    socket.on("send-message", (data) => {
      io.to(data.roomId).emit("receive-message", data);
    });

    socket.on("disconnect", () => {
      for (const roomId in usersInRoom) {
        if (usersInRoom[roomId][socket.id]) {
          const username = usersInRoom[roomId][socket.id].username;
          delete usersInRoom[roomId][socket.id];
          io.to(roomId).emit("system-message", {
            text: `${username} has left the chat.`,
          });

          if (Object.keys(usersInRoom[roomId]).length === 0) {
            delete usersInRoom[roomId];
          }
          break;
        }
      }
    });
  });
}

module.exports = { setupSocket };
