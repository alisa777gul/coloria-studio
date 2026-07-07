"use client";

import {
  Sparkles,
  Lightbulb,
  Box,
  Palette,
  PlayCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <header
      className="
      relative
      min-h-screen
      flex
      items-center
      px-6
      pt-28
      pb-20
      overflow-hidden
      "
      style={{
        background:
          "linear-gradient(160deg,#FFF8F0 0%,#FFE8F5 35%,#F3EEFF 70%,#E0F2FE 100%)",
      }}
    >
      {/* Background blur orbs */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#FF2D6B]
        opacity-[0.08]
        blur-[80px]
        top-[-10%]
        right-[-5%]
        "
      />

      <div
        className="
        absolute
        w-[600px]
        h-[600px]
        rounded-full
        bg-purple-500
        opacity-[0.06]
        blur-[80px]
        bottom-[-15%]
        left-[-10%]
        "
      />

      <div
        className="
        absolute
        w-[300px]
        h-[300px]
        rounded-full
        bg-[#FFE600]
        opacity-[0.12]
        blur-[80px]
        top-[30%]
        left-[20%]
        "
      />

      {/* Floating shapes */}

      <div
        className="
        hidden lg:block
        absolute
        top-[15%]
        right-[12%]
        w-16 h-16
        rounded-2xl
        bg-gradient-to-br
        from-yellow-300
        to-orange-300
        opacity-60
        "
      />

      <div
        className="
        hidden lg:block
        absolute
        top-[60%]
        left-[8%]
        w-12 h-12
        rounded-full
        bg-gradient-to-br
        from-pink-500
        to-purple-400
        opacity-50
        "
      />

      <div
        className="
        hidden lg:block
        absolute
        bottom-[20%]
        right-[25%]
        w-10 h-10
        rounded-xl
        bg-gradient-to-br
        from-green-400
        to-teal-300
        opacity-50
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        grid
        lg:grid-cols-12
        gap-12
        items-center
        relative
        z-10
        "
      >
        {/* LEFT CONTENT */}

        <div className="lg:col-span-7">
          <p
            className="
            font-mono
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#FF2D6B]
            mb-6
            flex
            items-center
            gap-2
            "
          >
            <Sparkles size={16} />
            Kreatívne 3D sady pre deti
          </p>

          <h1
            className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-[5.5rem]
            font-black
            leading-[0.9]
            text-[#1a1a2e]
            "
          >
            Vytvorte si
            <br />
            vlastný svet
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
              3D fantázie
            </span>
          </h1>

          <p
            className="
            mt-8
            text-lg
            leading-relaxed
            max-w-lg
            text-[#1a1a2e]/70
            "
          >
            Originálne 3D figúrky a kreatívne maľovacie sady, ktoré rozvíjajú
            detskú predstavivosť, tvorivosť a radosť z vlastného výrobku.
          </p>

          {/* Steps */}

          <div
            className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-3
            font-mono
            text-xs
            uppercase
            tracking-wider
            text-[#1a1a2e]/50
            "
          >
            <span className="flex items-center gap-1">
              <Lightbulb size={16} className="text-yellow-400" />
              Fantázia
            </span>

            <span>→</span>

            <span className="flex items-center gap-1">
              <Box size={16} className="text-[#FF2D6B]" />
              3D Model
            </span>

            <span>→</span>

            <span className="flex items-center gap-1">
              <Palette size={16} className="text-green-500" />
              Produkt
            </span>
          </div>

          {/* Buttons */}

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
              hover:scale-105
              transition
              shadow-[0_20px_60px_-15px_rgba(255,45,107,0.4)]
              "
            >
              Objavte sady
            </a>

            <a
              href="#gallery"
              className="
              px-6
              py-4
              rounded-2xl
              font-mono
              text-sm
              uppercase
              flex
              items-center
              gap-2
              text-[#1a1a2e]/60
              hover:text-[#1a1a2e]
              "
            >
              <PlayCircle size={20} />
              Galéria
            </a>
          </div>

          {/* Reviews */}

          <div
            className="
            mt-10
            flex
            items-center
            gap-6
            "
          >
            <div className="flex -space-x-3">
              <img
                src="/avatars/avatar1.jpg"
                className="
                w-11
                h-11
                rounded-full
                border-[3px]
                border-white
                object-cover
                "
              />

              <img
                src="/avatars/avatar2.jpg"
                className="
                w-11
                h-11
                rounded-full
                border-[3px]
                border-white
                object-cover
                "
              />

              <img
                src="/avatars/avatar3.jpg"
                className="
                w-11
                h-11
                rounded-full
                border-[3px]
                border-white
                object-cover
                "
              />
            </div>

            <div>
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} size={16} fill="currentColor" />
                ))}
              </div>

              <p
                className="
                font-mono
                text-xs
                text-[#1a1a2e]/50
                mt-1
                "
              >
                500+ spokojných rodín
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="
              absolute
              -inset-8
              rounded-[2rem]
              bg-gradient-to-br
              from-[#FF2D6B]/20
              via-purple-400/15
              to-[#FFE600]/20
              blur-3xl
              "
            />

            <div
              className="
              relative
              rounded-[2rem]
              overflow-hidden
              shadow-2xl
              "
            >
              <img
                src="/public/images/hero.jpg"
                alt="3D kids kit"
                className="
                w-full
                aspect-[3/4]
                object-cover
                
                "
              />
            </div>

            {/* Safety badge */}

            <div
              className="
              absolute
              -bottom-4
              -left-4
              bg-white/70
              backdrop-blur-xl
              px-5
              py-3
              rounded-2xl
              shadow-xl
              flex
              items-center
              gap-2
              text-sm
              font-bold
              "
            >
              <ShieldCheck size={20} className="text-green-500" />
              Certifikované & bezpečné
            </div>

            {/* New badge */}

            <div
              className="
              absolute
              -top-4
              -right-4
              bg-white/70
              backdrop-blur-xl
              px-4
              py-2
              rounded-xl
              shadow-xl
              text-xs
              font-mono
              font-bold
              uppercase
              "
            >
              <span className="text-green-500">●</span> Nové 2026
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
