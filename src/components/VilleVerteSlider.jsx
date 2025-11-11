import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VilleVerteSlider({ images = [], className = "" }) {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const go = (dir) => {
    if (!validImages.length) return;
    setIndex((i) => (i + dir + validImages.length) % validImages.length);
  };

  // Auto-play: change image every 1.5s
  useEffect(() => {
    if (!validImages.length) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % validImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, [validImages.length]);

  if (!validImages.length) return null;

  return (
    <div className={`w-full max-w-full overflow-x-hidden ${className}`}>
      <div className="relative overflow-hidden rounded-xl shadow bg-white w-full">
        <div className="aspect-[16/9] bg-gray-100">
          <img
            src={validImages[index]}
            alt={`Ville Verte ${index + 1}`}
            className="w-full h-full object-cover max-w-full"
            loading="eager"
          />
        </div>

        <button
          aria-label="Précédent"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Suivant"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* hide scrollbar visually on WebKit */}
        <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
        {validImages.map((src, i) => (
          <button
            key={src + i}
            className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden ring-1 ring-black/5 ${
              i === index ? "outline outline-2 outline-[#c2b5a9]" : ""
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Voir image ${i + 1}`}
          >
            <img
              src={src}
              alt="miniature Ville Verte"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
