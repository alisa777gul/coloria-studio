"use client";

import {
  ShieldCheck,
  Brain,
  Users,
  Gift,
  Truck,
  Heart,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    title: "Bezpečné materiály",
    description:
      "Používame kvalitné materiály vhodné pre deti, aby bolo tvorenie bezpečné a príjemné.",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    title: "Rozvoj fantázie",
    description:
      "Tvorenie podporuje kreativitu, koncentráciu a jemnú motoriku detí.",
    icon: Brain,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    title: "Spoločné chvíle",
    description:
      "Kreatívna aktivita, pri ktorej vznikajú krásne rodinné spomienky.",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    title: "Originálny darček",
    description:
      "Niečo viac než hračka — vlastnoručne vytvorený výrobok plný emócií.",
    icon: Gift,
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    title: "Rýchle doručenie",
    description: "Objednávky pripravujeme starostlivo a posielame čo najskôr.",
    icon: Truck,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    title: "Vyrobené s láskou",
    description: "Každý produkt pripravujeme s dôrazom na kvalitu a detail.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-100",
  },
];

export default function Benefits() {
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
          top-20
          left-0
          w-[300px]
          h-[300px]
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
            Prečo práve my
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
            Viac než len
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
              obyčajná hračka
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-[#1a1a2e]/60
            "
          >
            Vytvárame produkty, ktoré spájajú radosť, učenie a nezabudnuteľné
            chvíle.
          </p>
        </div>

        {/* CARDS */}

        <div
          className="
            mt-16
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  relative
                "
              >
                <div
                  className="
                    relative
                    h-full
                    bg-white
                    rounded-[2rem]
                    p-8
                    border
                    border-white
                    shadow-[0_25px_70px_-35px_rgba(0,0,0,.2)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                  "
                >
                  {/* NUMBER */}

                  <span
                    className="
                      absolute
                      right-7
                      top-5
                      text-5xl
                      font-black
                      text-black/5
                    "
                  >
                    0{index + 1}
                  </span>

                  <div
                    className={`
                      w-14
                      h-14
                      rounded-2xl
                      ${item.bg}
                      flex
                      items-center
                      justify-center
                      mb-6
                      transition
                      duration-500
                      group-hover:scale-110
                    `}
                  >
                    <Icon size={28} className={item.color} />
                  </div>

                  <h3
                    className="
                      text-xl
                      font-black
                      text-[#1a1a2e]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-relaxed
                      text-[#1a1a2e]/60
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
