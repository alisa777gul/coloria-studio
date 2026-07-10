"use client";

import {
  Sparkles,
  Lightbulb,
  Box,
  Palette,
  PlayCircle,
  ShieldCheck,
  Star,
  Heart,
  Wand2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        pt-32
        pb-24
      "
      style={{
        background:
          "linear-gradient(160deg,#FFF8F0 0%,#FFE8F5 35%,#F3EEFF 70%,#E0F2FE 100%)",
      }}
    >
      {/* BACKGROUND BLOBS */}

      <div
        className="
          absolute
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#FF2D6B]
          opacity-[0.08]
          blur-[100px]
          -top-40
          -right-40
        "
      />

      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-purple-500
          opacity-[0.08]
          blur-[100px]
          -bottom-40
          -left-40
        "
      />

      <div
        className="
          absolute
          w-[250px]
          h-[250px]
          rounded-full
          bg-yellow-300
          opacity-[0.15]
          blur-[80px]
          left-[25%]
          top-[40%]
        "
      />

      {/* FLOATING ELEMENTS */}

      <div
        className="
          hidden
          lg:flex
          absolute
          top-[18%]
          right-[8%]
          w-20
          h-20
          rounded-3xl
          bg-white/60
          backdrop-blur-xl
          shadow-xl
          items-center
          justify-center
          rotate-12
        "
      >
        <Heart className="text-[#FF2D6B]" size={32} fill="currentColor" />
      </div>

      <div
        className="
          hidden
          lg:flex
          absolute
          bottom-[20%]
          left-[6%]
          w-16
          h-16
          rounded-2xl
          bg-white/60
          backdrop-blur-xl
          shadow-xl
          items-center
          justify-center
          -rotate-12
        "
      >
        <Palette className="text-purple-500" size={28} />
      </div>

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-12
          gap-14
          items-center
          relative
          z-10
        "
      >
        {/* LEFT */}

        <div
          className="
            lg:col-span-7
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
              bg-white/60
              backdrop-blur-xl
              border
              border-white
              shadow-sm
              mb-7
            "
          >
            <Sparkles size={16} className="text-[#FF2D6B]" />

            <span
              className="
                text-xs
                font-mono
                uppercase
                tracking-[0.25em]
                text-[#1a1a2e]/70
              "
            >
              Kreatívny svet 3D tvorby
            </span>
          </div>

          <h1
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[5.7rem]
              leading-[0.9]
              font-black
              tracking-tight
              text-[#1a1a2e]
            "
          >
            Vytvorte
            <br />
            vlastnú
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
              3D fantáziu
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-relaxed
              text-[#1a1a2e]/65
            "
          >
            Originálne 3D figúrky na mieru a kreatívne maľovacie sady, ktoré
            premenia detské nápady na skutočné malé umelecké diela.
          </p>

          {/* PROCESS */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >
            <Step icon={<Lightbulb size={18} />} text="Nápad" />

            <span className="text-black/20">→</span>

            <Step icon={<Box size={18} />} text="3D výroba" />

            <span className="text-black/20">→</span>

            <Step icon={<Palette size={18} />} text="Tvorenie" />
          </div>

          {/* BUTTONS */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >
            <a
              href="#kits"
              className="
                px-10
                py-4
                rounded-2xl
                bg-[#FF2D6B]
                text-white
                font-bold
                text-lg
                shadow-[0_20px_60px_rgba(255,45,107,0.35)]
                hover:scale-105
                transition
              "
            >
              Objaviť kolekciu
            </a>

            <a
              href="#gallery"
              className="
                px-7
                py-4
                rounded-2xl
                bg-white/60
                backdrop-blur-xl
                flex
                items-center
                gap-2
                font-medium
                text-[#1a1a2e]/70
                hover:bg-white
                transition
              "
            >
              <PlayCircle size={20} />
              Galéria
            </a>
          </div>

          {/* TRUST */}

          <div
            className="
              mt-10
              flex
              items-center
              gap-5
            "
          ></div>
        </div>

        {/* IMAGE */}

        <div
          className="
            lg:col-span-5
          "
        >
          <div
            className="
              relative
            "
          >
            <div
              className="
                absolute
                -inset-8
                rounded-[3rem]
                bg-gradient-to-br
                from-[#FF2D6B]/20
                via-purple-400/20
                to-yellow-300/20
                blur-3xl
              "
            />

            <div
              className="
                relative
                rounded-[3rem]
                overflow-hidden
                shadow-2xl
                border
                border-white/60
              "
            >
              <img
                src="/images/hero.jpg"
                alt="3D kreatívne sady pre deti"
                className="
                  w-full
                  aspect-[4/5]
                  object-cover
                "
              />
            </div>

            <div
              className="
                absolute
                -bottom-5
                -left-5
                bg-white/85
                backdrop-blur-xl
                rounded-2xl
                px-5
                py-4
                shadow-xl
                flex
                items-center
                gap-3
              "
            >
              <ShieldCheck size={25} className="text-green-500" />

              <div>
                <p className="font-bold text-sm">Bezpečné materiály</p>

                <p className="text-xs text-black/50">Pre malých tvorcov</p>
              </div>
            </div>

            <div
              className="
                absolute
                -top-5
                -right-5
                bg-white/90
                backdrop-blur-xl
                rounded-2xl
                px-5
                py-3
                shadow-xl
                flex
                items-center
                gap-2
                font-bold
                text-sm
              "
            >
              <Wand2 size={18} className="text-[#FF2D6B]" />
              Novinka 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ icon, text }) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-white/60
        backdrop-blur-xl
        text-sm
        font-medium
        text-[#1a1a2e]/70
      "
    >
      {icon}
      {text}
    </div>
  );
}
