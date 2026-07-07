import {
  User,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle,
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
      py-20
      md:py-32
      px-4
      md:px-6
      bg-[#FFF8F0]
      relative
      overflow-hidden
      "
    >
      {/* background */}

      <div
        className="
        absolute
        w-[300px]
        h-[300px]
        rounded-full
        bg-pink-400/20
        blur-[100px]
        top-10
        left-10
        "
      />

      <div
        className="
        max-w-3xl
        mx-auto
        relative
        z-10
        "
      >
        {/* TITLE */}

        <div className="text-center">
          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            text-[#1a1a2e]
            "
          >
            Kontaktujte nás
          </h2>

          <p
            className="
            mt-5
            text-lg
            text-[#1a1a2e]/60
            "
          >
            Máte otázku alebo chcete vytvoriť vlastnú 3D figúrku? Napíšte nám.
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="
          mt-12
          space-y-5
          "
        >
          <div className="relative">
            <User
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-pink-500
              "
              size={20}
            />

            <input
              required
              type="text"
              placeholder="Meno"
              className="
              w-full
              pl-14
              pr-6
              py-4
              rounded-2xl
              bg-white/60
              backdrop-blur-xl
              border
              border-white
              outline-none
              focus:ring-2
              focus:ring-pink-400
              transition
              "
            />
          </div>

          <div className="relative">
            <Mail
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-pink-500
              "
              size={20}
            />

            <input
              required
              type="email"
              placeholder="Email"
              className="
              w-full
              pl-14
              pr-6
              py-4
              rounded-2xl
              bg-white/60
              backdrop-blur-xl
              border
              border-white
              outline-none
              focus:ring-2
              focus:ring-pink-400
              transition
              "
            />
          </div>

          <div className="relative">
            <Phone
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-pink-500
              "
              size={20}
            />

            <input
              type="tel"
              placeholder="Telefón"
              className="
              w-full
              pl-14
              pr-6
              py-4
              rounded-2xl
              bg-white/60
              backdrop-blur-xl
              border
              border-white
              outline-none
              focus:ring-2
              focus:ring-pink-400
              transition
              "
            />
          </div>

          <div className="relative">
            <MessageCircle
              className="
              absolute
              left-5
              top-5
              text-pink-500
              "
              size={20}
            />

            <textarea
              required
              rows="5"
              placeholder="Správa"
              className="
              w-full
              pl-14
              pr-6
              py-4
              rounded-2xl
              bg-white/60
              backdrop-blur-xl
              border
              border-white
              outline-none
              focus:ring-2
              focus:ring-pink-400
              resize-none
              transition
              "
            />
          </div>

          <button
            type="submit"
            className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-4
            rounded-2xl
            bg-pink-500
            text-white
            font-bold
            text-lg
            hover:bg-pink-600
            hover:scale-[1.02]
            transition-all
            shadow-xl
            "
          >
            Odoslať správu
            <Send size={20} />
          </button>
        </form>

        {/* SUCCESS */}

        {submitted && (
          <div
            className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-green-100
            text-green-700
            p-5
            font-semibold
            "
          >
            <CheckCircle size={22} />
            Ďakujeme! Ozveme sa vám čoskoro.
          </div>
        )}
      </div>
    </section>
  );
}
