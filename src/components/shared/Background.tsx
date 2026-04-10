export const Background = () => {
  return (
    <div className="tab:block fixed inset-0 -z-10 hidden">
      <div className="absolute inset-0 bg-[url('/bgimages/bg-hero-image.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/85" />
    </div>
  );
};
