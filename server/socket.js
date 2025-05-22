import { Server } from "socket.io";

let io;

const usersInRoom = {}; // { roomId: { socketId: { userId, username } } }

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("Setting up socket.io");

    io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      console.log("New socket connected:", socket.id);

      socket.on("user-joined", ({ roomId, userId, username }) => {
        socket.join(roomId);

        if (!usersInRoom[roomId]) usersInRoom[roomId] = {};
        usersInRoom[roomId][socket.id] = { userId, username };

        // Send list of other users already in room to this socket
        const others = Object.values(usersInRoom[roomId])
          .filter((u) => u.userId !== userId)
          .map((u) => u.username);

        socket.emit("system-message", {
          text: `Users already in room: ${
            others.length ? others.join(", ") : "No one else here."
          }`,
        });

        // Tell everyone else this user joined
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

    res.socket.server.io = io;
  } else {
    console.log("Socket.io already running");
  }
  res.end();
}
