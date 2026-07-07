import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Mini",
    price: "19,90 €",
    description: "Perfektný začiatok kreatívneho tvorenia.",
    features: ["1× 3D figúrka", "Farby na maľovanie", "Štetec"],
    button: "Vybrať Mini",
    popular: false,
  },

  {
    name: "Premium",
    price: "39,90 €",
    description: "Najobľúbenejšia sada pre malých umelcov.",
    features: [
      "2× 3D figúrka",
      "Kompletná sada farieb",
      "Extra kreatívne doplnky",
      "Darčekové balenie",
    ],
    button: "Vybrať Premium",
    popular: true,
  },

  {
    name: "Party",
    price: "od 99 €",
    description: "Ideálne riešenie pre detské oslavy.",
    features: [
      "Viacero figúrok",
      "Pre skupiny detí",
      "Individuálna téma",
      "Podpora pri výbere",
      "Špeciálne balenie",
    ],
    button: "Objednať párty",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
py-20
md:py-32
px-4
md:px-6
bg-[#F3EEFF]
relative
overflow-hidden
"
    >
      <div
        className="
max-w-5xl
mx-auto
"
      >
        {/* title */}

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
          Vyberte si svoju sadu
        </h2>

        <p
          className="
text-center
max-w-xl
mx-auto
mt-5
text-lg
text-[#1a1a2e]/60
"
        >
          Jednoduché balíčky pre malé aj veľké kreatívne zážitky.
        </p>

        <div
          className="
grid
md:grid-cols-3
gap-8
mt-16
items-center
"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
relative
rounded-3xl
p-8
backdrop-blur-xl
border
transition-all
duration-500

${
  plan.popular
    ? "bg-white shadow-2xl border-pink-300 md:scale-105"
    : "bg-white/60 border-white hover:-translate-y-3 hover:shadow-xl"
}

`}
            >
              {plan.popular && (
                <div
                  className="
absolute
-top-4
left-1/2
-translate-x-1/2
px-5
py-2
rounded-full
bg-pink-500
text-white
font-mono
text-xs
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

              <h3
                className="
font-mono
uppercase
tracking-widest
text-sm
text-[#1a1a2e]/60
"
              >
                {plan.name}
              </h3>

              <div
                className="
mt-5
text-4xl
font-black
text-[#1a1a2e]
"
              >
                {plan.price}
              </div>

              <p
                className="
mt-3
text-sm
text-[#1a1a2e]/60
leading-relaxed
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
                    <Check
                      size={18}
                      className="
text-green-500
"
                    />

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
transition-all
duration-300

${
  plan.popular
    ? "bg-pink-500 text-white hover:scale-105 shadow-lg"
    : "bg-[#1a1a2e] text-white hover:scale-105"
}

`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
