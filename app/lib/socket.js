// lib/socket.js
import { io } from "socket.io-client";

const socket = io("http://10.2.32.164:3000", { path: "/api/socketio" });
// replace 10.2.32.164 with your server's LAN IP

export default socket;
