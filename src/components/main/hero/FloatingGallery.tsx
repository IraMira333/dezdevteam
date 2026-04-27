"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { GlowButton } from "../../shared/GlowButton";

const images = [
  "/images/card-anvil.jpg",
  "/images/card-bestortho.jpg",
  "/images/card-boc.jpg",
  "/images/card-mapium.jpg",
  "/images/card-willow.jpg",
  "/images/card-anvil.jpg",
  "/images/card-bestortho.jpg",
  "/images/card-boc.jpg",
  "/images/card-mapium.jpg",
  "/images/card-willow.jpg",
];

const seededRandom = (seed: number, base: number) => {
  const x = Math.sin(seed + base * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

export const FloatingGallery = () => {
  const seed = 1337;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const cols = 6;
  const rows = Math.ceil(images.length / cols);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const items = images.map((src, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);

    const cellW = 100 / cols;
    const cellH = 100 / rows;

    const baseLeft = col * cellW + cellW / 2;
    const baseTop = row * cellH + cellH / 2;

    const offsetX = (seededRandom(seed, i * 2.1) - 0.5) * (cellW * 0.6);

    const offsetY = (seededRandom(seed, i * 3.7) - 0.5) * (cellH * 0.6);
    const isActive = i === activeIndex;
    return {
      src,
      left: baseLeft + offsetX,
      top: baseTop + offsetY,
      scale: 0.9 + seededRandom(seed, i * 4.1) * 0.2,
      isActive,
    };
  });

  return (
    <div className="relative" style={{ aspectRatio: "1.25 / 1" }}>
      {items.map((item, i) => (
        <Image
          key={`${item.src}-${i}`}
          src={item.src}
          alt=""
          className="absolute object-cover transition-all duration-700 ease-in-out"
          width={627}
          height={503}
          style={{
            width: item.isActive ? "80%" : "calc(100% / 6)",
            height: item.isActive ? "auto" : "auto",

            zIndex: item.isActive ? 10 : 1,
            transitionDelay: item.isActive ? "0ms" : "100ms",
            left: item.isActive ? "50%" : `${item.left}%`,
            top: item.isActive ? "50%" : `${item.top}%`,

            transform: item.isActive
              ? "translate(-50%, -50%) scale(1)"
              : `translate(-50%, -50%) scale(${item.scale})`,
          }}
        />
      ))}
      <div className="absolute right-[25%] -bottom-[1%] z-[21] hidden">
        <GlowButton text="Дивитись проєкт" />
      </div>
    </div>
  );
};
