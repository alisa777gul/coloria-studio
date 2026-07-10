"use client";

import { Package, Palette, Heart, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Vyberte si svoju sadu",
    description:
      "Vyberte si 3D figúrku alebo kreatívny balíček, ktorý najviac poteší malého tvorcu.",
    icon: Package,
    color: "from-yellow-300 to-orange-400",
  },
  {
    number: "02",
    title: "Vytvorte vlastný dizajn",
    description:
      "Deti maľujú, experimentujú a premieňajú obyčajnú figúrku na vlastné umelecké dielo.",
    icon: Palette,
    color: "from-pink-400 to-purple-500",
  },
  {
    number: "03",
    title: "Hotové dielo plné radosti",
    description:
      "Výsledná figúrka zostane krásnou spomienkou, dekoráciou alebo originálnym darčekom.",
    icon: Heart,
    color: "from-green-300 to-teal-400",
  },
];

export default function Steps() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        md:py-36
        px-5
        bg-[#FFF8F0]
      "
    >
      {/* DECOR */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[350px]
          h-[350px]
          bg-pink-300/20
          blur-[100px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[300px]
          h-[300px]
          bg-yellow-300/30
          blur-[100px]
          rounded-full
        "
      />

      <div
        className="
          max-w-6xl
          mx-auto
          relative
          z-10
        "
      >
        {/* TITLE */}

        <div
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-[#FF2D6B]
              font-mono
              text-xs
              uppercase
              tracking-[0.3em]
            "
          >
            <Sparkles size={16} />
            Jednoduchá tvorba
          </div>

          <h2
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              text-[#1a1a2e]
            "
          >
            Od nápadu
            <br />k vlastnému{" "}
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
              3D dielu
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-[#1a1a2e]/60
            "
          >
            Kreatívny proces, pri ktorom deti objavujú svoju fantáziu a
            vytvárajú niečo úplne vlastné.
          </p>
        </div>

        {/* STEPS */}

        <div
          className="
            mt-20
            grid
            md:grid-cols-3
            gap-8
          "
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="
                relative
                group
              "
            >
              <div
                className="
                  h-full
                  bg-white
                  rounded-[2rem]
                  p-8
                  shadow-[0_25px_70px_-30px_rgba(0,0,0,.18)]
                  border
                  border-white
                  transition-all
                  duration-500
                  group-hover:-translate-y-3
                "
              >
                {/* NUMBER */}

                <span
                  className="
                    absolute
                    top-6
                    right-7
                    text-6xl
                    font-black
                    text-black/5
                  "
                >
                  {step.number}
                </span>

                {/* ICON */}

                <div
                  className={`
                    w-20
                    h-20
                    rounded-3xl
                    bg-gradient-to-br
                    ${step.color}
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  `}
                >
                  <step.icon size={34} className="text-[#1a1a2e]" />
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-black
                    text-[#1a1a2e]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-[#1a1a2e]/60
                  "
                >
                  {step.description}
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#FF2D6B]
                  "
                >
                  Začať tvorenie
                  <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
