// lib/toastify.js
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function toastBottomRight(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
    position: "right",
    backgroundColor: "#444",
    close: true,
  }).showToast();
}
