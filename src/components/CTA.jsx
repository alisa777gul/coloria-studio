import { Sparkles, Palette, ArrowRight, Gift } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-28
      px-6
      "
    >
      {/* Background */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#FFF1F7]
        via-[#F5F0FF]
        to-[#E8F8FF]
        "
      />

      {/* Floating lights */}

      <div
        className="
        absolute
        top-10
        left-10
        w-40
        h-40
        rounded-full
        bg-pink-400/20
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-10
        right-10
        w-60
        h-60
        rounded-full
        bg-purple-400/20
        blur-3xl
        "
      />

      <div
        className="
        relative
        max-w-5xl
        mx-auto
        "
      >
        <div
          className="
          rounded-[3rem]
          bg-white/60
          backdrop-blur-xl
          border
          border-white
          shadow-2xl
          p-10
          md:p-16
          text-center
          "
        >
          {/* icon */}

          <div
            className="
            mx-auto
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-[#FF2D6B]
            to-purple-500
            flex
            items-center
            justify-center
            text-white
            shadow-xl
            "
          >
            <Gift size={32} />
          </div>

          <h2
            className="
            mt-8
            text-4xl
            md:text-6xl
            font-black
            leading-tight
            text-[#1a1a2e]
            "
          >
            Vytvorte niečo
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
              jedinečné
            </span>
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
            Vyberte si kreatívnu sadu alebo si nechajte vytvoriť vlastnú 3D
            figúrku podľa vašej predstavy. Každý výrobok vzniká s láskou a
            fantáziou.
          </p>

          <div
            className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
            "
          >
            <a
              href="#kits"
              className="
              group
              px-10
              py-4
              rounded-2xl
              bg-[#FF2D6B]
              text-white
              font-bold
              text-lg
              flex
              items-center
              gap-3
              shadow-[0_20px_50px_-15px_rgba(255,45,107,.5)]
              hover:scale-105
              transition
              "
            >
              Vybrať sadu
              <ArrowRight
                size={20}
                className="
                group-hover:translate-x-1
                transition
                "
              />
            </a>

            <a
              href="#contact"
              className="
              px-10
              py-4
              rounded-2xl
              bg-white
              text-[#1a1a2e]
              font-bold
              text-lg
              border
              border-black/5
              hover:scale-105
              transition
              flex
              items-center
              gap-2
              "
            >
              <Palette size={20} />
              Vlastná figurka
            </a>
          </div>

          <div
            className="
            mt-10
            flex
            justify-center
            gap-6
            flex-wrap
            font-mono
            text-xs
            uppercase
            text-[#1a1a2e]/40
            "
          >
            <span className="flex items-center gap-2">
              <Sparkles size={15} />
              Ručná tvorba
            </span>

            <span>✦</span>

            <span>Bezpečné materiály</span>

            <span>✦</span>

            <span>Pre deti 3+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
