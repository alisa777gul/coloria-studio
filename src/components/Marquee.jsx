"use client";

import { Sparkles } from "lucide-react";

export default function Marquee() {
  const items = [
    "MAĽUJ",
    "TVOR",
    "OBJAVUJ",
    "FANTÁZIA",
    "3D FIGÚRKY",
    "KREATÍVNE SADY",
    "RADOSŤ Z TVORENIA",
  ];

  return (
    <section
      className="
relative
overflow-hidden
py-5
bg-gradient-to-r
from-[#FF2D6B]
via-purple-500
to-blue-500
"
    >
      <div
        className="
absolute
inset-0
bg-white/10
"
      />

      <div
        className="
flex
w-max
animate-marquee
relative
z-10
"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="
flex
items-center
"
          >
            <span
              className="
mx-8
text-white
font-mono
text-sm
uppercase
tracking-[0.3em]
font-bold
whitespace-nowrap
"
            >
              {item}
            </span>

            <Sparkles
              size={18}
              className="
text-yellow-300/80
"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
