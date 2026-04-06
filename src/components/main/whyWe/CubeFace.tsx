import React from "react";

export const CubeFace = ({
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
      className={`absolute inset-0 p-4 ${className}`}
      style={{
        ...style,
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
};
