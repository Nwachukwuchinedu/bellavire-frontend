import React, { useState, useEffect } from "react";

const images: string[] = ["/authImg1.png", "/authImg2.png", "/authImg3.png"];

const overlayContents = [
  {
    title: "FInd Your Next Home with Ease",
    description:
      "Discover quality rentals in your preferred location. Browse listings, compare features, and choose what feels like home—all in one place.",
  },
  {
    title: "Smart Renting Starts Here",
    description:
      "Manage your applications, chat with landlords, and track your tenancy journey—whether you're just searching or ready to move in.",
  },
  {
    title: "Secure & Hassle-Free Experience",
    description:
      "We've built a safe platform where your data is protected, and your rental process is smooth from sign-up to move-in.",
  },
];

type BottomProps = {
  bottom: number;
}

const AuthSlider: React.FC<BottomProps> = ({ bottom }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Sliding Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute top-20 md:top-8 mb-10 left-1/2 transform -translate-x-1/2 z-30 block lg:hidden">
        <img src="/loginLogoWhite.png" alt="Logo" className="w-36 md:w-52" />
      </div>
      <div
        className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-[80%] h-[250px] bg-[#1e1e1e]/30 rounded-[16px] items-center justify-start px-10 z-20`}
        style={{ bottom: `${bottom}px` }}
      >
        <div className="text-left max-w-xl text-white space-y-2">
          <h2 className="text-4xl w-[90%] font-bold">
            {overlayContents[currentIndex].title}
          </h2>
          <p className="text-md w-[90%] leading-relaxed">
            {overlayContents[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Pagination Dots – hidden on small screens */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthSlider;
