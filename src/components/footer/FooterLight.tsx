"use client";
import Image from "next/image";
import { useState } from "react";

export const FooterLight = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-black05 relative h-[400px] w-full overflow-hidden"
    >
      {/* 🔥 LIGHT EFFECT */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition duration-100"
        style={{
          background: `radial-gradient(
            220px circle at ${pos.x}px ${pos.y}px,
            rgba(255,255,255,0.5) 0%,
            rgba(0,0,0,0.9) 80%
          )`,
        }}
      />

      {/* 💡 LAMP */}
      <Image
        src="/images/lamp.png"
        alt="lamp"
        width={480}
        height={480}
        className="pointer-events-none absolute top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2 opacity-80"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        Footer content
      </div>
    </div>
  );
};
