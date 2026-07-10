"use client";

import {
  User,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle,
  Sparkles,
  Clock,
  Heart,
} from "lucide-react";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  }

  return (
    <section
      id="contact"
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
right-0
w-[400px]
h-[400px]
rounded-full
bg-pink-300/20
blur-[120px]
"
      />

      <div
        className="
max-w-6xl
mx-auto
relative
z-10
grid
lg:grid-cols-2
gap-14
items-center
"
      >
        {/* LEFT */}

        <div>
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
            Kontakt
          </div>

          <h2
            className="
mt-5
text-4xl
sm:text-5xl
md:text-6xl
font-black
leading-tight
text-[#1a1a2e]
"
          >
            Vytvorme spolu
            <br />
            niečo{" "}
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
              výnimočné
            </span>
          </h2>

          <p
            className="
mt-6
text-lg
leading-relaxed
text-[#1a1a2e]/60
max-w-lg
"
          >
            Máte záujem o kreatívnu sadu, vlastnú figúrku alebo detskú oslavu?
            Napíšte nám a pripravíme riešenie podľa vašich predstáv.
          </p>

          <div
            className="
mt-10
space-y-5
"
          >
            <div
              className="
flex
items-center
gap-4
"
            >
              <div
                className="
w-12
h-12
rounded-2xl
bg-pink-100
flex
items-center
justify-center
"
              >
                <Heart size={22} className="text-[#FF2D6B]" />
              </div>

              <p
                className="
text-[#1a1a2e]/70
"
              >
                Produkty vytvorené s láskou pre deti
              </p>
            </div>

            <div
              className="
flex
items-center
gap-4
"
            >
              <div
                className="
w-12
h-12
rounded-2xl
bg-yellow-100
flex
items-center
justify-center
"
              >
                <Clock size={22} className="text-orange-500" />
              </div>

              <p
                className="
text-[#1a1a2e]/70
"
              >
                Odpovieme vám čo najskôr
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}

        <div
          className="
bg-white/70
backdrop-blur-xl
border
border-white
rounded-[2.5rem]
p-7
md:p-10
shadow-[0_30px_90px_-40px_rgba(0,0,0,.3)]
"
        >
          <form
            onSubmit={handleSubmit}
            className="
space-y-5
"
          >
            <Input icon={<User size={20} />} placeholder="Meno" />

            <Input icon={<Mail size={20} />} placeholder="Email" type="email" />

            <Input icon={<Phone size={20} />} placeholder="Telefón" />

            <div className="relative">
              <MessageCircle
                className="
absolute
left-5
top-5
text-[#FF2D6B]
"
                size={20}
              />

              <textarea
                required
                rows="5"
                placeholder="Napíšte nám, čo potrebujete..."
                className="
w-full
pl-14
py-4
rounded-2xl
bg-[#FFF8F0]
border
border-transparent
outline-none
focus:border-pink-300
resize-none
"
              />
            </div>

            <button
              className="
w-full
py-4
rounded-2xl
bg-[#FF2D6B]
text-white
font-bold
text-lg
flex
items-center
justify-center
gap-3
hover:scale-105
transition
shadow-xl
"
            >
              Odoslať správu
              <Send size={20} />
            </button>
          </form>

          {submitted && (
            <div
              className="
mt-5
flex
items-center
justify-center
gap-2
rounded-2xl
bg-green-100
text-green-700
p-4
font-semibold
"
            >
              <CheckCircle size={22} />
              Ďakujeme! Ozveme sa vám čoskoro.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Input({ icon, placeholder, type = "text" }) {
  return (
    <div className="relative">
      <div
        className="
absolute
left-5
top-1/2
-translate-y-1/2
text-[#FF2D6B]
"
      >
        {icon}
      </div>

      <input
        required
        type={type}
        placeholder={placeholder}
        className="
w-full
pl-14
py-4
rounded-2xl
bg-[#FFF8F0]
border
border-transparent
outline-none
focus:border-pink-300
transition
"
      />
    </div>
  );
}
