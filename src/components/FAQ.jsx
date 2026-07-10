"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const questions = [
  {
    question: "Pre aký vek sú 3D kreatívne sady vhodné?",
    answer:
      "Naše sady sú vhodné približne od 3 rokov. Pri každom produkte nájdete odporúčaný vek a informácie pre rodičov.",
  },

  {
    question: "Čo obsahuje balenie?",
    answer:
      "Každá sada obsahuje 3D figúrku, farby, štetec a všetko potrebné na vytvorenie vlastného originálneho diela.",
  },

  {
    question: "Je možné vytvoriť vlastnú figúrku na mieru?",
    answer:
      "Áno. Vytvárame aj personalizované 3D figúrky podľa vašej predstavy — napríklad podľa témy oslavy alebo vlastného nápadu.",
  },

  {
    question: "Ako dlho trvá doručenie?",
    answer:
      "Objednávky pripravujeme čo najrýchlejšie. Čas doručenia závisí od dostupnosti konkrétneho produktu.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="
relative
overflow-hidden
py-24
md:py-36
px-5
bg-[#F3EEFF]
"
    >
      <div
        className="
absolute
left-0
top-20
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
right-0
bottom-0
w-[300px]
h-[300px]
rounded-full
bg-yellow-300/30
blur-[100px]
"
      />

      <div
        className="
max-w-4xl
mx-auto
relative
z-10
"
      >
        {/* TITLE */}

        <div
          className="
text-center
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
            Pomoc rodičom
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
            Máte otázky?
            <br />
            Máme odpovede
          </h2>

          <p
            className="
mt-6
text-lg
text-[#1a1a2e]/60
"
          >
            Všetko dôležité pred objednaním vašej kreatívnej sady.
          </p>
        </div>

        {/* FAQ */}

        <div
          className="
mt-14
space-y-5
"
        >
          {questions.map((item, index) => {
            const open = active === index;

            return (
              <div
                key={item.question}
                className={`
rounded-[2rem]
overflow-hidden
border
transition-all
duration-500

${
  open
    ? "bg-white shadow-xl border-pink-200"
    : "bg-white/60 backdrop-blur-xl border-white"
}

`}
              >
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="
w-full
p-6
md:p-7
flex
items-center
gap-5
text-left
"
                >
                  <div
                    className="
hidden
sm:flex
w-10
h-10
rounded-xl
bg-pink-100
items-center
justify-center
font-mono
text-sm
font-bold
text-[#FF2D6B]
"
                  >
                    0{index + 1}
                  </div>

                  <span
                    className="
flex-1
font-bold
text-[#1a1a2e]
"
                  >
                    {item.question}
                  </span>

                  <div
                    className={`
w-10
h-10
rounded-full
flex
items-center
justify-center
transition

${open ? "bg-[#FF2D6B] text-white" : "bg-pink-100 text-[#FF2D6B]"}

`}
                  >
                    <ChevronDown
                      size={20}
                      className={`
transition-transform
${open ? "rotate-180" : ""}
`}
                    />
                  </div>
                </button>

                <div
                  className={`
grid
transition-all
duration-500

${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}

`}
                >
                  <div
                    className="
overflow-hidden
"
                  >
                    <p
                      className="
px-6
md:px-7
pb-7
text-[#1a1a2e]/65
leading-relaxed
"
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}

        <div
          className="
mt-12
flex
justify-center
"
        >
          <a
            href="#contact"
            className="
inline-flex
items-center
gap-3
px-7
py-4
rounded-2xl
bg-[#1a1a2e]
text-white
font-bold
hover:scale-105
transition
"
          >
            <HelpCircle size={20} />
            Stále máte otázku?
          </a>
        </div>
      </div>
    </section>
  );
}
