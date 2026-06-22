import { Check } from "lucide-react";

function Band() {
  const items = [
    "PREMIUM QUALITY",
    "FREE SHIPPING",
    "NEW COLLECTION",
  ];

  return (
    <div className="bg-gray-300 py-1 md:py-2 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items, ...items].map(
          (text, index) => (
            <div
              key={index}
              className="flex items-center mx-5 md:mx-10 gap-2 md:gap-3"
            >
              <div
                className="
                  w-5
                  h-5
                  md:w-7
                  md:h-7
                  rounded-full
                  border
                  md:border-2
                  border-gray-700
                  flex
                  items-center
                  justify-center
                "
              >
                <Check
                  size={10}
                  className="md:w-4 md:h-4 text-gray-700"
                />
              </div>

              <span
                className="
                  text-[10px]
                  md:text-base
                  text-gray-700
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                "
              >
                {text}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Band;