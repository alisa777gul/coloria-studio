import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: "Moja dcéra bola nadšená! Maľovanie 3D figúrky ju bavilo celé popoludnie.",
    name: "Katarína M.",
  },
  {
    text: "Perfektný darček na narodeniny. Deti sa zabavili a vytvorili vlastné diela.",
    name: "Lucia P.",
  },
  {
    text: "Krásne spracovanie, bezpečné materiály a úžasný nápad pre deti.",
    name: "Martina K.",
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
py-20
md:py-32
px-4
md:px-6
bg-[#FFF8F0]
overflow-hidden
"
    >
      <div
        className="
max-w-4xl
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
          Čo hovoria rodičia?
        </h2>

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
px-4
"
              >
                <div
                  className="
bg-white/70
backdrop-blur-xl
border
border-white
rounded-3xl
p-8
md:p-12
text-center
shadow-xl
"
                >
                  <div
                    className="
flex
justify-center
gap-1
mb-6
text-yellow-400
"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={22} fill="currentColor" />
                    ))}
                  </div>

                  <p
                    className="
text-lg
italic
leading-relaxed
text-[#1a1a2e]/80
"
                  >
                    "{review.text}"
                  </p>

                  <p
                    className="
mt-6
font-mono
text-xs
uppercase
tracking-widest
text-pink-500
"
                  >
                    {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* controls */}

        <div
          className="
flex
justify-center
gap-4
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
border
border-white
flex
items-center
justify-center
hover:bg-pink-500
hover:text-white
transition-all
shadow-md
"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="
w-12
h-12
rounded-full
bg-white
border
border-white
flex
items-center
justify-center
hover:bg-pink-500
hover:text-white
transition-all
shadow-md
"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
