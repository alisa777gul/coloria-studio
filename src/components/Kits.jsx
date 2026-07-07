import { Sparkles } from "lucide-react";
import { kits } from "../data/kits";
import SectionDecor from "./SectionDecor";

export default function Kits() {
  return (
    <section
      id="kits"
      className="
      py-20 md:py-32 
      px-4 md:px-6 
      relative overflow-hidden
      bg-[#FFF8F0]
      "
    >
      <SectionDecor type="kits" />
      <div
        className="
        absolute 
        w-[250px] h-[250px]
        rounded-full
        bg-pink-400/20
        blur-[80px]
        top-10 left-5
        "
      />

      <div
        className="
        absolute 
        w-[200px] h-[200px]
        rounded-full
        bg-yellow-300/30
        blur-[70px]
        right-10 bottom-20
        "
      />

      <div
        className="
        max-w-7xl 
        mx-auto 
        relative z-10
      "
      >
        {/* TITLE */}

        <div
          className="
          text-center
          mb-16
        "
        >
          <div
            className="
            flex
            justify-center
            items-center
            gap-2
            text-pink-500
            font-mono
            text-xs
            uppercase
            tracking-[0.3em]
            mb-4
          "
          >
            <Sparkles size={16} />
            Kolekcia 2026
          </div>

          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            text-[#1a1a2e]
            "
          >
            Kreatívne 3D sady
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-lg
            text-[#1a1a2e]/60
            "
          >
            Originálne 3D figúrky a maľovacie sety, ktoré premieňajú detskú
            fantáziu na realitu.
          </p>
        </div>

        {/* CARDS */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {kits.map((kit) => (
            <article
              key={kit.id}
              className="
              group
              perspective
              "
            >
              <div
                className="
                rounded-3xl
                overflow-hidden
                bg-white/60
                backdrop-blur-xl
                border
                border-white
                shadow-[0_30px_80px_-20px_rgba(0,0,0,.12)]
                transition-all
                duration-500
                group-hover:-translate-y-3
                group-hover:rotate-1
                "
              >
                {/* IMAGE */}

                <div
                  className="
                  overflow-hidden
                  "
                >
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="
                    w-full
                    h-64
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    "
                  />
                </div>

                {/* CONTENT */}

                <div className="p-6">
                  <h3
                    className="
                    font-bold
                    text-xl
                    text-[#1a1a2e]
                    "
                  >
                    {kit.title}
                  </h3>

                  <div
                    className="
                    inline-block
                    mt-3
                    text-2xl
                    font-black
                    text-pink-500
                    relative
                    "
                  >
                    {kit.price}

                    <span
                      className="
                      absolute
                      bottom-1
                      left-0
                      w-full
                      h-2
                      bg-yellow-300/40
                      -z-10
                      "
                    />
                  </div>

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

                  <span
                    className="
                    inline-block
                    mt-5
                    px-4
                    py-2
                    rounded-full
                    bg-pink-100
                    text-pink-600
                    text-xs
                    font-bold
                    uppercase
                    tracking-wide
                    "
                  >
                    {kit.age}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
