"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Box,
  Cake,
  Image,
  BadgeDollarSign,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500

        ${
          scrolled
            ? `
            bg-white/75
            backdrop-blur-xl
            shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            border-b
            border-white/60
            py-1
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
            flex
            items-center
            gap-3
            group
          "
        >
          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-gradient-to-br
              from-[#FF2D6B]
              to-purple-500
              flex
              items-center
              justify-center
              shadow-lg
              shadow-pink-200
              group-hover:rotate-6
              transition
            "
          >
            <Box size={22} className="text-white" />
          </div>

          <div
            className="
              leading-none
            "
          >
            <p
              className="
                text-xl
                font-black
                tracking-tight
                text-[#1a1a2e]
              "
            >
              Kids
              <span className="text-[#FF2D6B]">Paint</span>
            </p>

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                font-mono
                text-[#1a1a2e]/50
              "
            >
              3D Studio
            </span>
          </div>
        </a>

        {/* DESKTOP MENU */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          <NavLink href="#kits">Sady</NavLink>

          <NavLink href="#birthday">Oslavy</NavLink>

          <NavLink href="#gallery">Galéria</NavLink>

          <NavLink href="#pricing">Cenník</NavLink>

          <a
            href="#contact"
            className="
              relative
              overflow-hidden

              flex
              items-center
              gap-2

              px-7
              py-3

              rounded-full

              bg-[#FF2D6B]

              text-white

              font-bold
              text-sm

              shadow-[0_15px_35px_rgba(255,45,107,0.35)]

              hover:scale-105

              transition-all
            "
          >
            <Sparkles size={16} />
            Objednať
          </a>
        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden

            w-11
            h-11

            rounded-2xl

            bg-white/70

            backdrop-blur-xl

            flex
            items-center
            justify-center

            shadow-sm

          "
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          md:hidden

          mx-5

          overflow-hidden

          transition-all
          duration-500

          ${open ? "max-h-[500px] opacity-100 mb-5" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            bg-white/85
            backdrop-blur-xl

            rounded-3xl

            shadow-xl

            p-6

            flex
            flex-col
            gap-5
          "
        >
          <MobileLink
            href="#kits"
            icon={<Box size={18} />}
            text="3D Sady"
            close={closeMenu}
          />

          <MobileLink
            href="#birthday"
            icon={<Cake size={18} />}
            text="Narodeninové oslavy"
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

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              mt-2

              text-center

              py-3

              rounded-full

              bg-[#FF2D6B]

              text-white

              font-bold
            "
          >
            Vytvoriť objednávku
          </a>
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
        relative

        font-mono

        text-xs

        uppercase

        tracking-[0.2em]

        text-[#1a1a2e]/60

        hover:text-[#FF2D6B]

        transition

        after:absolute
        after:left-0
        after:-bottom-2
        after:w-0
        after:h-[2px]
        after:bg-[#FF2D6B]
        after:transition-all

        hover:after:w-full
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

        text-[#1a1a2e]/70

        font-mono

        text-sm

        uppercase

        tracking-wider

        hover:text-[#FF2D6B]

        transition
      "
    >
      <span
        className="
          text-[#FF2D6B]
        "
      >
        {icon}
      </span>

      {text}
    </a>
  );
}
