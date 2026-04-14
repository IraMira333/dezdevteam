"use client";

import { useEffect, useRef, useState } from "react";

import { IconSliderArrow } from "../../shared/icons/IconSliderArrow";
import { CubeFace } from "./CubeFace";

export const CubeSlider = ({ list }: { list: string[] }) => {
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [depth, setDepth] = useState(0);
  const [faceWidth, setFaceWidth] = useState(0);

  useEffect(() => {
    const updateDepth = () => {
      if (containerRef.current) {
        setDepth(containerRef.current.offsetHeight / 2);
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
    <div className="flex h-full w-full flex-col items-center justify-between gap-6">
      <div
        ref={containerRef}
        className="tab:h-50 prepc:h-68 prepc:max-w-108 h-46 w-[80%] max-w-96 perspective-[2000px]"
      >
        <div
          className="mx-auto h-full w-full"
          style={{
            transform: "rotateX(-7deg) rotateY(-14deg)",
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
              <CubeFace
                key={i}
                className={`gradient-slider-face transition-colors duration-700 ease-in-out`}
                style={{
                  transform: `rotateX(${i * 90}deg) translateZ(${depth}px)`,
                }}
              >
                <p
                  className={`text-grey88 mb-4 text-right transition-opacity duration-700 ease-in-out ${index === i ? "opacity-100" : "opacity-0"} `}
                >{`{ 0${i + 1} }`}</p>
                <p
                  className={`text-whitef0 tab:text-base transition-opacity duration-700 ease-in-out ${index === i ? "opacity-100" : "opacity-0"} `}
                >
                  {text}
                </p>
              </CubeFace>
            ))}

            <CubeFace
              className="gradient-slider-right"
              style={{
                width: `${depth * 2}px`,
                height: `${depth * 2}px`,
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginTop: `-${depth}px`,
                marginLeft: `-${depth}px`,
                transform: `rotateY(90deg) translateZ(${faceWidth / 2}px)`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="mb-8 flex items-center gap-2">
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
