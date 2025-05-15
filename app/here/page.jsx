"use client"; // ← super important if not already there

import { useEffect, useState } from "react";

export default function Home() {
  const [userfromlocal, setUserfromlocal] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("vibeUser");
    if (storedUser) {
      setUserfromlocal(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (!userfromlocal?.id) return;

    const fetchUserPosts = async () => {
      try {
        const res = await fetch(`/api/getPosts?authorId=${userfromlocal.id}`);
        const data = await res.json();
        console.log("Fetched Posts:", data.posts);
      } catch (err) {
        console.error("Error fetching posts", err);
      }
    };

    fetchUserPosts();
  }, [userfromlocal]);

  return (
    <div>
      <h1>Welcome {userfromlocal?.username || "Guest"} ✨</h1>
    </div>
  );
}
