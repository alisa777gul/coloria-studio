import { Cake, Sparkles, Gift, PartyPopper } from "lucide-react";
import SectionDecor from "./SectionDecor";

const birthdayOptions = [
  {
    title: "Malá oslava",
    description: "Kreatívna sada pre malé oslavy plné farieb, hier a radosti.",
    price: "od 49 €",
    icon: Gift,
    image: "/images/birthday/birthday1.jpg",
  },
  {
    title: "Veľká párty",
    description:
      "Kompletný balíček 3D figúrok a maľovania pre celú skupinu detí.",
    price: "od 99 €",
    icon: PartyPopper,
    image: "/images/birthday/birthday2.jpg",
  },
  {
    title: "Tematická oslava",
    description:
      "Vyberte si vlastnú tému – dinosaury, rozprávky alebo hrdinovia.",
    price: "od 129 €",
    icon: Sparkles,
    image: "/images/birthday/birthday3.jpg",
  },
  {
    title: "Vlastná figúrka",
    description: "Originálny 3D model vytvorený podľa vašej predstavy.",
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
      py-20
      md:py-32
      px-4
      md:px-6
      bg-[#F3EEFF]
      "
    >
      <SectionDecor type="birthday" />

      <div
        className="
        absolute
        w-[250px]
        h-[250px]
        rounded-full
        bg-yellow-300
        opacity-20
        blur-[90px]
        right-10
        top-10
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}

        <div className="text-center">
          <div
            className="
            inline-flex
            items-center
            justify-center
            mb-5
            text-pink-500
            "
          >
            <Cake size={32} />
          </div>

          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            text-[#1a1a2e]
            "
          >
            Nezabudnuteľná detská párty
          </h2>

          <p
            className="
            max-w-2xl
            mx-auto
            mt-5
            text-lg
            text-[#1a1a2e]/60
            "
          >
            Pripravíme kreatívny zážitok, ktorý deti milujú. Maľovanie, tvorenie
            a vlastné 3D figúrky.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          mt-16
          "
        >
          {birthdayOptions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                group
                "
              >
                <div
                  className="
                  h-full
                  overflow-hidden
                  rounded-3xl
                  bg-white/60
                  backdrop-blur-xl
                  border
                  border-white
                  transition-all
                  duration-700
                  group-hover:-translate-y-3
                  group-hover:shadow-2xl
                  "
                >
                  {/* Image */}

                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                      w-full
                      h-48
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Content */}

                  <div className="p-6">
                    <div
                      className="
                      w-12
                      h-12
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      mb-5
                      bg-gradient-to-br
                      from-pink-400
                      to-purple-400
                      text-white
                      "
                    >
                      <Icon size={24} />
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

                    <span
                      className="
                      inline-block
                      mt-5
                      px-4
                      py-2
                      rounded-xl
                      bg-pink-100
                      text-pink-600
                      font-mono
                      text-sm
                      font-bold
                      "
                    >
                      {item.price}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
