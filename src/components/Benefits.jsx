import { ShieldCheck, Brain, Users, Gift, Truck, Heart } from "lucide-react";

const benefits = [
  {
    title: "Bezpečné materiály",
    description: "Používame kvalitné a bezpečné materiály vhodné pre deti.",
    icon: ShieldCheck,
    style: "from-green-300 to-teal-400",
  },
  {
    title: "Rozvoj kreativity",
    description: "Maľovanie podporuje fantáziu, sústredenie a jemnú motoriku.",
    icon: Brain,
    style: "from-yellow-300 to-orange-400",
  },
  {
    title: "Zábava pre celú rodinu",
    description:
      "Spoločné tvorenie vytvára krásne chvíle medzi rodičmi a deťmi.",
    icon: Users,
    style: "from-pink-400 to-purple-400",
  },
  {
    title: "Perfektný darček",
    description: "Originálny darček, ktorý poteší každé kreatívne dieťa.",
    icon: Gift,
    style: "from-pink-300 to-rose-400",
  },
  {
    title: "Rýchle doručenie",
    description: "Vašu objednávku pripravíme a odošleme čo najskôr.",
    icon: Truck,
    style: "from-green-300 to-emerald-400",
  },
  {
    title: "Vyrobené s láskou",
    description: "Každý produkt pripravujeme s dôrazom na detail.",
    icon: Heart,
    style: "from-yellow-300 to-amber-400",
  },
];

export default function Benefits() {
  return (
    <section
      className="
py-20
md:py-32
px-4
md:px-6
relative
overflow-hidden
bg-[#FFF8F0]
"
    >
      <div
        className="
max-w-6xl
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
          Prečo si vybrať nás?
        </h2>

        <p
          className="
max-w-2xl
mx-auto
mt-6
text-center
text-lg
text-[#1a1a2e]/60
"
        >
          Tvoríme produkty, ktoré spájajú zábavu, kreativitu a krásne spomienky.
        </p>

        <div
          className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-16
"
        >
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
group
rounded-3xl
p-8
bg-white/60
backdrop-blur-xl
border
border-white
transition-all
duration-500
hover:-translate-y-3
hover:shadow-2xl
"
              >
                <div
                  className={`
w-12
h-12
rounded-2xl
bg-gradient-to-br
${item.style}
flex
items-center
justify-center
mb-6
transition-transform
duration-500
group-hover:scale-110
`}
                >
                  <Icon
                    size={25}
                    className="
text-white
"
                  />
                </div>

                <h3
                  className="
font-bold
text-lg
text-[#1a1a2e]
"
                >
                  {item.title}
                </h3>

                <p
                  className="
mt-3
text-sm
leading-relaxed
text-[#1a1a2e]/70
"
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
