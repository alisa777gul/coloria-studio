"use client";

import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { kits } from "../data/kits";
import SectionDecor from "./SectionDecor";

export default function Kits() {
  return (
    <section
      id="kits"
      className="
        relative
        overflow-hidden
        px-5
        py-24
        md:px-6
        md:py-36
        bg-[#FFF8F0]
      "
    >
      <SectionDecor type="kits" />

      {/* BACKGROUND */}

      <div
        className="
          absolute
          -top-20
          left-0
          w-[350px]
          h-[350px]
          rounded-full
          bg-pink-300/20
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[300px]
          h-[300px]
          rounded-full
          bg-yellow-300/30
          blur-[90px]
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >
        {/* HEADER */}

        <div
          className="
            text-center
            max-w-3xl
            mx-auto
            mb-16
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white
              shadow-sm
              text-[#FF2D6B]
              font-mono
              text-xs
              uppercase
              tracking-[0.25em]
            "
          >
            <Sparkles size={15} />
            Kolekcia 2026
          </div>

          <h2
            className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              leading-tight
              text-[#1a1a2e]
            "
          >
            Vyberte si svoju
            <br />
            <span
              className="
                bg-gradient-to-r
                from-[#FF2D6B]
                via-purple-500
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              kreatívnu 3D sadu
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-[#1a1a2e]/60
            "
          >
            Každá sada ukrýva malý svet fantázie, ktorý deti vytvoria vlastnými
            rukami.
          </p>
        </div>

        {/* CARDS */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-7
          "
        >
          {kits.map((kit, index) => (
            <article
              key={kit.id}
              className="
                group
                relative
              "
            >
              {/* BADGE */}

              {index === 0 && (
                <div
                  className="
                    absolute
                    -top-3
                    left-5
                    z-20
                    px-4
                    py-2
                    rounded-full
                    bg-[#FF2D6B]
                    text-white
                    text-xs
                    font-bold
                    shadow-lg
                  "
                >
                  ⭐ Najobľúbenejšie
                </div>
              )}

              <div
                className="
                  h-full
                  bg-white
                  rounded-[2rem]
                  overflow-hidden
                  shadow-[0_25px_70px_-25px_rgba(0,0,0,.18)]
                  border
                  border-white
                  transition-all
                  duration-500
                  group-hover:-translate-y-3
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    overflow-hidden
                    h-72
                  "
                >
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      w-10
                      h-10
                      rounded-full
                      bg-white/90
                      flex
                      items-center
                      justify-center
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  >
                    <Heart size={18} className="text-[#FF2D6B]" />
                  </div>
                </div>

                {/* CONTENT */}

                <div
                  className="
                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-black
                      text-[#1a1a2e]
                    "
                  >
                    {kit.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-[#1a1a2e]/60
                    "
                  >
                    {kit.description}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-2xl
                        font-black
                        text-[#FF2D6B]
                      "
                    >
                      {kit.price}
                    </span>

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-pink-100
                        text-pink-600
                        text-xs
                        font-bold
                      "
                    >
                      {kit.age}
                    </span>
                  </div>

                  <button
                    className="
                      mt-6
                      w-full
                      py-3
                      rounded-xl
                      bg-[#1a1a2e]
                      text-white
                      flex
                      items-center
                      justify-center
                      gap-2
                      font-bold
                      opacity-0
                      translate-y-3
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                    "
                  >
                    Pozrieť sadu
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
