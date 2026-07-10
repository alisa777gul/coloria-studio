"use client";

import {
  Cake,
  Sparkles,
  Gift,
  PartyPopper,
  ArrowRight,
  Star,
} from "lucide-react";

import SectionDecor from "./SectionDecor";

const birthdayOptions = [
  {
    title: "Malá oslava",
    description:
      "Kreatívne tvorenie pre menšiu skupinu detí plné farieb a zábavy.",
    price: "od 49 €",
    icon: Gift,
    image: "/images/birthday/birthday1.jpg",
  },

  {
    title: "Veľká párty",
    description: "Kompletný zážitok s 3D figúrkami a maľovaním pre viac detí.",
    price: "od 99 €",
    icon: PartyPopper,
    image: "/images/birthday/birthday2.jpg",
    popular: true,
  },

  {
    title: "Tematická oslava",
    description:
      "Dinosaury, rozprávky alebo hrdinovia — vytvoríme párty podľa vašej témy.",
    price: "od 129 €",
    icon: Sparkles,
    image: "/images/birthday/birthday3.jpg",
  },

  {
    title: "Vlastná figúrka",
    description: "Jedinečný 3D model vytvorený presne podľa vašej predstavy.",
    price: "Individuálne",
    icon: Cake,
    image: "/images/birthday/birthday4.jpg",
  },
];

export default function Birthday() {
  return (
    <section
      id="birthday"
      className="
relative
overflow-hidden
py-24
md:py-36
px-5
bg-[#F3EEFF]
"
    >
      <SectionDecor type="birthday" />

      <div
        className="
absolute
right-0
top-20
w-[350px]
h-[350px]
rounded-full
bg-yellow-300/30
blur-[100px]
"
      />

      <div
        className="
max-w-7xl
mx-auto
relative
z-10
"
      >
        {/* HEADER */}

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
px-4
py-2
rounded-full
bg-white
shadow-sm
text-[#FF2D6B]
font-mono
text-xs
uppercase
tracking-[0.25em]
"
          >
            <Cake size={16} />
            Detské oslavy
          </div>

          <h2
            className="
mt-6
text-4xl
sm:text-5xl
md:text-6xl
font-black
text-[#1a1a2e]
leading-tight
"
          >
            Oslava, na ktorú
            <br />
            deti nikdy{" "}
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
              nezabudnú
            </span>
          </h2>

          <p
            className="
mt-6
text-lg
text-[#1a1a2e]/60
"
          >
            Kreatívne narodeninové zážitky, kde deti tvoria, maľujú a odnášajú
            si vlastný originálny výrobok.
          </p>
        </div>

        {/* CARDS */}

        <div
          className="
mt-16
grid
md:grid-cols-2
lg:grid-cols-4
gap-7
"
        >
          {birthdayOptions.map((item) => (
            <article
              key={item.title}
              className="
relative
group
"
            >
              {item.popular && (
                <div
                  className="
absolute
-top-4
left-5
z-10
px-4
py-2
rounded-full
bg-[#FF2D6B]
text-white
text-xs
font-bold
shadow-lg
"
                >
                  ⭐ Najobľúbenejšie
                </div>
              )}

              <div
                className="
bg-white
rounded-[2rem]
overflow-hidden
shadow-[0_25px_70px_-30px_rgba(0,0,0,.2)]
border
border-white
transition-all
duration-500
group-hover:-translate-y-3
"
              >
                {/* IMAGE */}

                <div
                  className="
relative
h-56
overflow-hidden
"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
w-full
h-full
object-cover
transition
duration-700
group-hover:scale-110
"
                  />

                  <div
                    className="
absolute
bottom-4
left-4
w-12
h-12
rounded-2xl
bg-white/90
backdrop-blur-xl
flex
items-center
justify-center
"
                  >
                    <item.icon size={24} className="text-[#FF2D6B]" />
                  </div>
                </div>

                {/* CONTENT */}

                <div
                  className="
p-6
"
                >
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
mt-3
text-sm
leading-relaxed
text-[#1a1a2e]/60
"
                  >
                    {item.description}
                  </p>

                  <div
                    className="
mt-5
flex
items-center
justify-between
"
                  >
                    <span
                      className="
text-xl
font-black
text-[#FF2D6B]
"
                    >
                      {item.price}
                    </span>

                    <div
                      className="
flex
text-yellow-400
"
                    >
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}

        <div
          className="
mt-16
text-center
"
        >
          <a
            href="#contact"
            className="
inline-flex
items-center
gap-3
px-8
py-4
rounded-2xl
bg-[#1a1a2e]
text-white
font-bold
hover:scale-105
transition
"
          >
            Naplánovať oslavu
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
