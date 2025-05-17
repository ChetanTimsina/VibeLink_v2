"use client";

import { useEffect, useRef, useState } from "react";

export default function EmojiPicker() {
  const inputRef = useRef(null);
  const pickerRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    import("emoji-picker-element"); // 👈 loads the custom element
    if (pickerRef.current) {
      pickerRef.current.addEventListener("emoji-click", (e) => {
        inputRef.current.value += e.detail.unicode;
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setShowPicker((prev) => !prev)}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        😊
      </button>

      {showPicker && (
        <emoji-picker
          ref={pickerRef}
          style={{ maxWidth: "300px", height: "350px" }}
        ></emoji-picker>
      )}
    </div>
  );
}
