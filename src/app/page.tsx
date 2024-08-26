"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    alert("Hello");
  }, []);

  return (
    <div>
      <p className="text-red-400">Hello</p>
    </div>
  );
}
