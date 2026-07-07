const images = [
  {
    src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
    alt: "Maľovanie 3D figúrky",
  },
  {
    src: "https://images.unsplash.com/photo-1594784053336-8d3d1f8a7e22",
    alt: "Kreatívna sada pre deti",
  },
  {
    src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d",
    alt: "Detská oslava",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    alt: "Party tvorenie",
  },
  {
    src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
    alt: "Detská kreativita",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
    alt: "Tvorivý workshop",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="
py-20
md:py-32
px-4
md:px-6
bg-[#FFF0E6]
overflow-hidden
"
    >
      <div
        className="
max-w-7xl
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
          Naša galéria
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
          Pozrite sa na malé umelecké diela, ktoré vytvorili naši malí
          zákazníci.
        </p>

        <div
          className="
grid
grid-cols-2
lg:grid-cols-3
gap-5
mt-16
"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="
group
overflow-hidden
rounded-3xl
shadow-xl
relative
"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="
w-full
h-44
sm:h-56
lg:h-72
object-cover
transition-transform
duration-700
group-hover:scale-110
"
              />

              <div
                className="
absolute
inset-0
bg-gradient-to-t
from-black/20
via-transparent
opacity-0
group-hover:opacity-100
transition-opacity
duration-500
"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
