import { useEffect, useState } from "react";
import { Flame, Award, Shirt } from "lucide-react";
import { Link } from "react-router-dom";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

function Hero() {
  const images = [banner1, banner2];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
  className="
    relative
    w-full
    aspect-[20/10]
    md:aspect-[20/10]
    lg:aspect-[20/10]
    overflow-hidden
  "
>
      {/* Image Slider */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Hero"
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-4 md:pb-8">
        {/* Shop Button */}
        <Link to="/shop">
          <button
            className="
  bg-yellow-400
  text-black
  px-3
  md:px-9
  py-1
  md:py-3
  rounded-md
  text-[10px]
  md:text-base
  font-bold
  shadow-lg
  hover:bg-yellow-300
  transition
"
          >
            SHOP NOW
          </button>
        </Link>

        {/* Features */}
        <div className="mt-4 md:mt-6 w-full max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-3 gap-2 md:gap-12 text-white">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <div className="bg-white/10 p-1 md:p-3 rounded-full">
                <Flame size={12} className="md:w-6 md:h-6" />
              </div>

              <div>
                <h3 className="font-bold text-[10px] md:text-base">
                  BOLD DESIGN
                </h3>

                <p className="hidden md:block text-gray-300 text-sm">
                  Stand Out Always
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <div className="bg-white/10 p-1 md:p-3 rounded-full">
                <Award size={12} className="md:w-6 md:h-6" />
              </div>

              <div>
                <h3 className="font-bold text-[10px] md:text-base">
                  PREMIUM QUALITY
                </h3>

                <p className="hidden md:block text-gray-300 text-sm">
                  Built To Last
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <div className="bg-white/10 p-1 md:p-3 rounded-full">
                <Shirt size={12} className="md:w-6 md:h-6" />
              </div>

              <div>
                <h3 className="font-bold text-[10px] md:text-base">
                  OVERSIZED FIT
                </h3>

                <p className="hidden md:block text-gray-300 text-sm">
                  Comfort Meets Confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
              current === index
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;