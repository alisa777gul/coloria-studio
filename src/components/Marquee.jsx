export default function Marquee() {
  const items = [
    "MAĽUJ",
    "TVOR",
    "OBJAVUJ",
    "FANTÁZIA",
    "RADOSŤ",
    "3D FIGÚRKY",
  ];

  return (
    <section
      className="
      overflow-hidden
      py-5
      bg-gradient-to-r
      from-pink-500
      via-purple-500
      to-pink-500
      "
    >
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="
            flex
            items-center
            "
          >
            <span
              className="
              mx-8
              text-white/90
              font-mono
              text-sm
              uppercase
              tracking-[0.25em]
              font-bold
              whitespace-nowrap
              "
            >
              {item}
            </span>

            <span
              className="
              text-white/50
              text-xl
              "
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
