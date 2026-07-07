import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Pre aký vek sú 3D kreatívne sady vhodné?",
    answer:
      "Naše sady sú navrhnuté pre deti približne od 3 rokov. Každý produkt má odporúčaný vek uvedený v popise.",
  },
  {
    question: "Čo obsahuje balenie?",
    answer:
      "V balení nájdete 3D figúrku, farby, štetec a všetko potrebné na vytvorenie vlastného originálneho diela.",
  },
  {
    question: "Je možné vytvoriť vlastnú figúrku na mieru?",
    answer:
      "Áno. Ponúkame aj personalizované 3D figúrky podľa vašich predstáv.",
  },
  {
    question: "Ako dlho trvá doručenie?",
    answer:
      "Objednávky pripravujeme čo najskôr. Presný čas doručenia závisí od dostupnosti produktu.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="
py-20
md:py-32
px-4
md:px-6
bg-[#F3EEFF]
"
    >
      <div
        className="
max-w-3xl
mx-auto
"
      >
        <h2
          className="
text-center
text-4xl
sm:text-5xl
md:text-6xl
font-black
text-[#1a1a2e]
"
        >
          Časté otázky
        </h2>

        <div
          className="
mt-12
space-y-4
"
        >
          {questions.map((item, index) => {
            const open = active === index;

            return (
              <div
                key={item.question}
                className="
rounded-2xl
overflow-hidden
bg-white/60
backdrop-blur-xl
border
border-white
transition-all
"
              >
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="
w-full
p-6
flex
items-center
justify-between
text-left
font-semibold
text-[#1a1a2e]
"
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    size={22}
                    className={`
text-pink-500
transition-transform
duration-300

${open ? "rotate-180" : ""}
`}
                  />
                </button>

                <div
                  className={`
grid
transition-all
duration-500
ease-in-out

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
pb-6
text-sm
leading-relaxed
text-[#1a1a2e]/70
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
      </div>
    </section>
  );
}
