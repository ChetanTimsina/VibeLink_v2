// lib/socket.js
import { io } from "socket.io-client";

const socket = io("http://10.2.26.117:3000", { path: "/api/socketio" });
// replace 10.2.26.117 with your server's LAN IP

export default socket;
