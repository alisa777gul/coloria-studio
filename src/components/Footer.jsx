import { Mail, Phone, Heart, MapPin, Sparkles } from "lucide-react";

import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
relative
overflow-hidden
py-16
px-6
bg-gradient-to-br
from-[#FFF8F0]
via-[#F3EEFF]
to-[#E8F8FF]
"
    >
      <div
        className="
absolute
top-0
right-10
w-72
h-72
bg-pink-400/20
blur-[100px]
rounded-full
"
      />

      <div
        className="
absolute
bottom-0
left-10
w-64
h-64
bg-purple-400/20
blur-[100px]
rounded-full
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
        <div
          className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-10
"
        >
          {/* BRAND */}

          <div>
            <h3
              className="
text-3xl
font-black
text-[#1a1a2e]
"
            >
              KidsPaint
              <span className="text-[#FF2D6B]">Studio</span>
            </h3>

            <p
              className="
mt-5
text-sm
leading-relaxed
text-[#1a1a2e]/60
"
            >
              Tvoríme originálne 3D figúrky a kreatívne sady, ktoré menia detskú
              fantáziu na skutočný zážitok.
            </p>

            <div
              className="
mt-6
flex
items-center
gap-2
font-mono
text-xs
uppercase
text-pink-500
"
            >
              <Sparkles size={15} />
              Kreatívny svet pre deti
            </div>
          </div>

          {/* MENU */}

          <div>
            <h4
              className="
mb-5
font-mono
text-xs
uppercase
tracking-[0.25em]
text-[#1a1a2e]/40
"
            >
              Menu
            </h4>

            <div
              className="
space-y-3
text-sm
text-[#1a1a2e]/70
"
            >
              <a href="#kits" className="block hover:text-pink-500 transition">
                Sady
              </a>

              <a
                href="#birthday"
                className="block hover:text-pink-500 transition"
              >
                Detské párty
              </a>

              <a
                href="#gallery"
                className="block hover:text-pink-500 transition"
              >
                Galéria
              </a>

              <a
                href="#contact"
                className="block hover:text-pink-500 transition"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h4
              className="
mb-5
font-mono
text-xs
uppercase
tracking-[0.25em]
text-[#1a1a2e]/40
"
            >
              Kontakt
            </h4>

            <div
              className="
space-y-4
text-sm
text-[#1a1a2e]/70
"
            >
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-pink-500" />
                info@kidspaint.sk
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-pink-500" />
                +421 900 000 000
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-pink-500" />
                Slovensko
              </div>
            </div>
          </div>

          {/* SOCIAL */}

          <div>
            <h4
              className="
mb-5
font-mono
text-xs
uppercase
tracking-[0.25em]
text-[#1a1a2e]/40
"
            >
              Sledujte nás
            </h4>

            <div
              className="
flex
gap-4
"
            >
              {[FaInstagram, FaFacebookF, FaTiktok].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
w-12
h-12
rounded-2xl
bg-white/70
border
border-white
flex
items-center
justify-center
text-[#1a1a2e]
hover:bg-[#FF2D6B]
hover:text-white
hover:-translate-y-1
transition-all
shadow-sm
"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>

            <p
              className="
mt-5
text-sm
text-[#1a1a2e]/60
leading-relaxed
"
            >
              Objavujte nové kreatívne nápady a inšpirácie každý týždeň.
            </p>
          </div>
        </div>

        <div
          className="
mt-14
pt-8
border-t
border-[#1a1a2e]/10
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
"
        >
          <p
            className="
text-xs
font-mono
text-[#1a1a2e]/50
"
          >
            © {new Date().getFullYear()} KidsPaint Studio. Všetky práva
            vyhradené.
          </p>

          <p
            className="
flex
items-center
gap-2
text-xs
font-mono
text-[#1a1a2e]/50
"
          >
            Vyrobené s
            <Heart
              size={14}
              className="
fill-pink-500
text-pink-500
"
            />
            láskou
          </p>
        </div>
      </div>
    </footer>
  );
}
