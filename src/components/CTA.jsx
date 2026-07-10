"use client";

import { Sparkles, Palette, ArrowRight, Gift, Heart, Star } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="
relative
overflow-hidden
py-28
px-5
"
    >
      <div
        className="
absolute
inset-0
bg-gradient-to-br
from-[#FFF8F0]
via-[#F5EEFF]
to-[#E8F8FF]
"
      />

      <div
        className="
absolute
top-20
left-20
w-48
h-48
rounded-full
bg-pink-400/20
blur-[100px]
"
      />

      <div
        className="
absolute
bottom-10
right-20
w-64
h-64
rounded-full
bg-purple-400/20
blur-[100px]
"
      />

      <div
        className="
relative
max-w-6xl
mx-auto
"
      >
        <div
          className="
relative
rounded-[3rem]
bg-white/70
backdrop-blur-xl
border
border-white
shadow-[0_40px_120px_-40px_rgba(0,0,0,.25)]
p-8
md:p-16
text-center
overflow-hidden
"
        >
          {/* DECOR */}

          <div
            className="
absolute
top-8
right-10
text-yellow-300/60
"
          >
            <Star size={35} fill="currentColor" />
          </div>

          <div
            className="
absolute
bottom-10
left-10
text-pink-300/60
"
          >
            <Sparkles size={40} />
          </div>

          <div
            className="
mx-auto
w-20
h-20
rounded-3xl
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
            <Gift size={38} />
          </div>

          <h2
            className="
mt-8
text-4xl
sm:text-5xl
md:text-6xl
font-black
leading-[0.95]
text-[#1a1a2e]
"
          >
            Darujte deťom
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
              radosť z tvorenia
            </span>
          </h2>

          <p
            className="
mt-6
max-w-2xl
mx-auto
text-lg
leading-relaxed
text-[#1a1a2e]/60
"
          >
            Objavte kreatívne 3D sady alebo vytvorte vlastnú figúrku, ktorá bude
            jedinečnou spomienkou.
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
flex
items-center
gap-3
px-10
py-4
rounded-2xl
bg-[#FF2D6B]
text-white
font-bold
text-lg
shadow-[0_20px_60px_-20px_rgba(255,45,107,.6)]
hover:scale-105
transition
"
            >
              Vybrať kreatívnu sadu
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
flex
items-center
gap-3
px-10
py-4
rounded-2xl
bg-white
border
border-black/5
text-[#1a1a2e]
font-bold
text-lg
hover:scale-105
transition
"
            >
              <Palette size={20} />
              Vlastná figúrka
            </a>
          </div>

          {/* TRUST */}

          <div
            className="
mt-12
flex
justify-center
flex-wrap
gap-6
font-mono
text-xs
uppercase
tracking-wider
text-[#1a1a2e]/50
"
          >
            <span
              className="
flex
items-center
gap-2
"
            >
              <Heart size={15} />
              Vyrobené s láskou
            </span>

            <span>✦</span>

            <span>Bezpečné materiály</span>

            <span>✦</span>

            <span>Od 3 rokov</span>
          </div>
        </div>
      </div>
    </section>
  );
}
