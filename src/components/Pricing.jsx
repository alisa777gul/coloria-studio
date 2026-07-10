"use client";

import { Check, Sparkles, Gift, Crown, PartyPopper } from "lucide-react";

const plans = [
  {
    name: "Mini",
    icon: Gift,
    price: "19,90 €",
    description: "Malý kreatívny začiatok pre prvé vlastné 3D dielo.",
    features: ["1× 3D figúrka", "Farby na maľovanie", "Štetec"],
    button: "Vybrať Mini",
    popular: false,
  },

  {
    name: "Premium",
    icon: Crown,
    price: "39,90 €",
    description: "Najobľúbenejšia sada pre deti, ktoré milujú tvorenie.",
    features: [
      "2× 3D figúrka",
      "Kompletná sada farieb",
      "Kreatívne doplnky",
      "Darčekové balenie",
    ],
    button: "Vybrať Premium",
    popular: true,
  },

  {
    name: "Party",
    icon: PartyPopper,
    price: "od 99 €",
    description: "Kreatívny zážitok pre narodeniny a skupinové oslavy.",
    features: [
      "Viacero figúrok",
      "Pre skupiny detí",
      "Individuálna téma",
      "Pomoc s výberom",
      "Špeciálne balenie",
    ],
    button: "Naplánovať párty",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        py-24
        md:py-36
        px-5
        bg-[#F3EEFF]
      "
    >
      {/* DECOR */}

      <div
        className="
          absolute
          top-0
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
          blur-[100px]
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
              font-mono
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#FF2D6B]
            "
          >
            <Sparkles size={16} />
            Vyberte si zážitok
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
            Kreativita pre
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
              každého malého umelca
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-[#1a1a2e]/60
            "
          >
            Vyberte balíček podľa príležitosti — malé tvorenie, veľký darček
            alebo nezabudnuteľná oslava.
          </p>
        </div>

        {/* PLANS */}

        <div
          className="
            mt-16
            grid
            md:grid-cols-3
            gap-8
            items-center
          "
        >
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`
                relative
                rounded-[2rem]
                p-8
                transition-all
                duration-500

                ${
                  plan.popular
                    ? `
                  bg-white
                  shadow-[0_30px_90px_-30px_rgba(255,45,107,.35)]
                  md:scale-110
                  border-2
                  border-[#FF2D6B]/30
                  `
                    : `
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-white
                  hover:-translate-y-3
                  hover:shadow-xl
                  `
                }
              `}
            >
              {plan.popular && (
                <div
                  className="
                    absolute
                    -top-5
                    left-1/2
                    -translate-x-1/2
                    px-5
                    py-2
                    rounded-full
                    bg-[#FF2D6B]
                    text-white
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Sparkles size={14} />
                  Najobľúbenejšie
                </div>
              )}

              {/* ICON */}

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-pink-100
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <plan.icon size={28} className="text-[#FF2D6B]" />
              </div>

              <h3
                className="
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  font-mono
                  text-black/40
                "
              >
                {plan.name}
              </h3>

              <div
                className="
                  mt-4
                  text-5xl
                  font-black
                  text-[#1a1a2e]
                "
              >
                {plan.price}
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-relaxed
                  text-[#1a1a2e]/60
                "
              >
                {plan.description}
              </p>

              <ul
                className="
                  mt-8
                  space-y-4
                "
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-[#1a1a2e]/80
                    "
                  >
                    <Check size={18} className="text-green-500" />

                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full
                  mt-10
                  py-4
                  rounded-2xl
                  font-bold
                  transition
                  hover:scale-105

                  ${
                    plan.popular
                      ? `
                    bg-[#FF2D6B]
                    text-white
                    shadow-lg
                    `
                      : `
                    bg-[#1a1a2e]
                    text-white
                    `
                  }
                `}
              >
                {plan.button}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
