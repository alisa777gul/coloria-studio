import { Package, Palette, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Vyberte si svoju sadu",
    description:
      "Vyberte obľúbenú 3D figúrku alebo kreatívny balíček podľa veku a záujmov dieťaťa.",
    icon: Package,
    color: "from-yellow-300 to-orange-300",
  },
  {
    number: "02",
    title: "Namaľujte vlastný príbeh",
    description:
      "Deti rozvíjajú fantáziu, kreativitu a vytvárajú jedinečné farebné dielo.",
    icon: Palette,
    color: "from-pink-400 to-purple-400",
  },
  {
    number: "03",
    title: "Užite si radosť z tvorenia",
    description:
      "Hotová figúrka zostane krásnou spomienkou alebo originálnym darčekom.",
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
py-20
md:py-32
px-4
md:px-6
bg-[#FFF0E6]
"
    >
      <div
        className="
max-w-5xl
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
          Ako to funguje?
        </h2>

        <div
          className="
mt-20
relative
"
        >
          {/* vertical line */}

          <div
            className="
hidden
md:block
absolute
left-1/2
top-0
bottom-0
w-px
bg-[#1a1a2e]/10
"
          />

          <div
            className="
space-y-12
md:space-y-20
"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`
relative
flex
flex-col
md:flex-row
items-center
gap-8

${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
`}
                >
                  {/* icon */}

                  <div
                    className={`
shrink-0
w-24
h-24
rounded-3xl
bg-gradient-to-br
${step.color}
flex
items-center
justify-center
shadow-xl
relative
z-10
`}
                  >
                    <Icon
                      size={40}
                      className="
text-[#1a1a2e]
"
                    />
                  </div>

                  {/* text */}

                  <div
                    className={`
max-w-md
bg-white/60
backdrop-blur-xl
border
border-white
rounded-3xl
p-8
shadow-sm

${index % 2 !== 0 ? "md:text-right" : ""}
`}
                  >
                    <div
                      className="
font-mono
text-xs
tracking-[0.3em]
text-pink-500
mb-3
"
                    >
                      KROK {step.number}
                    </div>

                    <h3
                      className="
text-xl
font-bold
text-[#1a1a2e]
"
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
mt-3
text-[#1a1a2e]/70
leading-relaxed
"
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
