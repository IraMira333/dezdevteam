"use client";

import React, { useEffect, useRef, useState } from "react";

import { IconSliderArrow } from "../../shared/icons/IconSliderArrow";

export const CubeSlider = ({ list }: { list: string[] }) => {
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [depth, setDepth] = useState(0);
  const [faceWidth, setFaceWidth] = useState(0);
  console.log("🚀 ~ CubeSlider ~ faceWidth:", faceWidth);
  console.log("🚀 ~ CubeSlider ~ depth:", depth);

  useEffect(() => {
    const updateDepth = () => {
      if (containerRef.current) {
        setDepth(containerRef.current.offsetWidth / 4);
        setFaceWidth(containerRef.current.offsetWidth);
      }
    };

    updateDepth();
    window.addEventListener("resize", updateDepth);
    return () => window.removeEventListener("resize", updateDepth);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % list.length);
    setRotation((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col items-center gap-6">
      <div ref={containerRef} className="h-56 w-[80%] max-w-90 perspective-[2000px]">
        <div
          className="mx-auto h-full w-full"
          style={{
            transform: "rotateX(-7deg) rotateY(-10deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${-rotation * 90}deg)`,
            }}
          >
            {list.map((text, i) => (
              <Face
                key={i}
                className={`bg-whitef0 transition-colors duration-700 ease-in-out ${index === i ? "text-grey88" : "text-whitef0"} `}
                style={{
                  transform: `rotateX(${i * 90}deg) translateZ(112px)`,
                }}
              >
                <p className="mb-4 text-right">{`{ 0${i + 1} }`}</p>
                <p>{text}</p>
              </Face>
            ))}

            <Face
              className="bg-[#74bc71]"
              style={{
                width: "224px",
                height: "224px",
                transform: `rotateY(90deg) translateZ(187px)`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="my-10 flex items-center gap-2">
        <div className="flex items-center gap-2">
          {list.map((_, i) => {
            const isActive = i === index;

            return (
              <div
                key={i}
                className={`h-2 transition-all duration-500 ${isActive ? "bg-whiteff w-9" : "bg-greyd9 w-2"} `}
              />
            );
          })}
        </div>
        <button onClick={next} className="">
          <IconSliderArrow className="text-whiteff h-16 w-16" />
        </button>
      </div>
    </div>
  );
};

const Face = ({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={`absolute top-0 left-0 h-full w-full p-4 ${className}`}
      style={{
        ...style,
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
};
