"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

const reviews = [
  {
    text: "Moja dcéra bola nadšená! Maľovanie 3D figúrky ju bavilo celé popoludnie.",
    name: "Katarína M.",
    role: "mama malej umelkyne",
    avatar: "K",
  },
  {
    text: "Perfektný darček na narodeniny. Deti sa zabavili a vytvorili vlastné diela.",
    name: "Lucia P.",
    role: "spokojná zákazníčka",
    avatar: "L",
  },
  {
    text: "Krásne spracovanie, bezpečné materiály a úžasný nápad pre deti.",
    name: "Martina K.",
    role: "mama",
    avatar: "M",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function previous() {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }

  function next() {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }

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
max-w-5xl
mx-auto
relative
z-10
"
      >
        {/* HEADER */}

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
            Spokojní rodičia
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
            Tvoríme radosť,
            <br />
            ktorá zostáva
          </h2>

          <p
            className="
mt-6
text-lg
text-[#1a1a2e]/60
"
          >
            Pozrite sa, prečo si rodiny obľúbili naše kreatívne 3D sady.
          </p>
        </div>

        {/* SLIDER */}

        <div
          className="
relative
mt-16
overflow-hidden
"
        >
          <div
            className="
flex
transition-transform
duration-700
ease-out
"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                className="
min-w-full
px-2
"
              >
                <div
                  className="
relative
bg-white
rounded-[2.5rem]
p-8
md:p-12
shadow-[0_30px_80px_-35px_rgba(0,0,0,.25)]
border
border-white
text-center
"
                >
                  <Quote
                    size={50}
                    className="
absolute
top-8
left-8
text-pink-100
"
                  />

                  <div
                    className="
flex
justify-center
gap-1
text-yellow-400
"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={22} fill="currentColor" />
                    ))}
                  </div>

                  <p
                    className="
mt-8
text-xl
leading-relaxed
italic
text-[#1a1a2e]/75
"
                  >
                    “{review.text}”
                  </p>

                  <div
                    className="
mt-8
flex
justify-center
items-center
gap-4
"
                  >
                    <div
                      className="
w-12
h-12
rounded-full
bg-gradient-to-br
from-[#FF2D6B]
to-purple-500
flex
items-center
justify-center
text-white
font-black
"
                    >
                      {review.avatar}
                    </div>

                    <div
                      className="
text-left
"
                    >
                      <p
                        className="
font-bold
text-[#1a1a2e]
"
                      >
                        {review.name}
                      </p>

                      <p
                        className="
text-xs
uppercase
tracking-wider
text-[#1a1a2e]/40
font-mono
"
                      >
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}

        <div
          className="
flex
items-center
justify-center
gap-5
mt-10
"
        >
          <button
            onClick={previous}
            className="
w-12
h-12
rounded-full
bg-white
shadow-lg
flex
items-center
justify-center
hover:bg-[#FF2D6B]
hover:text-white
transition
"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="
flex
gap-2
"
          >
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
w-2
h-2
rounded-full
transition-all

${current === index ? "bg-[#FF2D6B] w-8" : "bg-black/20"}

`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="
w-12
h-12
rounded-full
bg-white
shadow-lg
flex
items-center
justify-center
hover:bg-[#FF2D6B]
hover:text-white
transition
"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
