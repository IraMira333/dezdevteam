export const CubeFace = ({
  children,
  className,
  style,
}: {
  children?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center p-4 text-center text-white ${className}`}
      style={{
        ...style,
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
};
