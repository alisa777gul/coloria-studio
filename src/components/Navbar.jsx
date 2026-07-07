import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Box,
  Cake,
  Image,
  BadgeDollarSign,
  MessageCircle,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50

        transition-all duration-500

        ${
          scrolled
            ? `
            bg-[#FFF8F0]/80
            backdrop-blur-xl

            shadow-[0_10px_40px_rgba(0,0,0,0.08)]

            border-b
            border-white/50

          `
            : `
            bg-transparent
          `
        }

      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          py-5

          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}

        <a
          href="/"
          className="
            text-xl
            font-black
            tracking-tight

            text-[#1a1a2e]

            transition
          "
        >
          KidsPaint
          <span className="text-[#FF2D6B]"> Studio</span>
        </a>

        {/* DESKTOP MENU */}

        <div
          className="
            hidden md:flex

            items-center

            gap-8
          "
        >
          <NavLink href="#kits">Sady</NavLink>

          <NavLink href="#birthday">Party</NavLink>

          <NavLink href="#gallery">Galéria</NavLink>

          <NavLink href="#pricing">Cenník</NavLink>

          <a
            href="#contact"
            className="
              font-mono

              text-xs

              uppercase

              tracking-[0.2em]


              px-6
              py-3

              rounded-full


              border-2

              border-[#FF2D6B]


              hover:bg-[#FF2D6B]

              hover:text-white


              transition-all

              duration-300
            "
          >
            Kontakt
          </a>
        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden

            p-2

            rounded-xl

            hover:bg-white/50

            transition
          "
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          md:hidden

          mx-4

          overflow-hidden

          transition-all

          duration-500


          ${open ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}

        `}
      >
        <div
          className="
            rounded-3xl

            bg-white/75

            backdrop-blur-xl

            shadow-xl

            px-6

            py-6

            flex

            flex-col

            gap-5
          "
        >
          <MobileLink
            href="#kits"
            icon={<Box size={18} />}
            text="Sady"
            close={closeMenu}
          />

          <MobileLink
            href="#birthday"
            icon={<Cake size={18} />}
            text="Party"
            close={closeMenu}
          />

          <MobileLink
            href="#gallery"
            icon={<Image size={18} />}
            text="Galéria"
            close={closeMenu}
          />

          <MobileLink
            href="#pricing"
            icon={<BadgeDollarSign size={18} />}
            text="Cenník"
            close={closeMenu}
          />

          <MobileLink
            href="#contact"
            icon={<MessageCircle size={18} />}
            text="Kontakt"
            close={closeMenu}
          />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="
        font-mono

        text-xs

        uppercase

        tracking-[0.2em]

        text-[#1a1a2e]/60


        hover:text-[#FF2D6B]


        transition-colors

        duration-300
      "
    >
      {children}
    </a>
  );
}

function MobileLink({ href, icon, text, close }) {
  return (
    <a
      href={href}
      onClick={close}
      className="
        flex

        items-center

        gap-3


        font-mono

        text-sm

        uppercase

        tracking-wider


        text-[#1a1a2e]/70


        hover:text-[#FF2D6B]


        transition
      "
    >
      {icon}

      {text}
    </a>
  );
}
