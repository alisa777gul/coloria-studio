import { Mail, Phone, Heart, MapPin } from "lucide-react";

import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      py-16
      px-6
      bg-[#F3EEFF]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        "
      >
        <div
          className="
          grid
          md:grid-cols-3
          gap-12
          "
        >
          {/* LOGO + DESCRIPTION */}

          <div>
            <h3
              className="
              text-2xl
              font-black
              text-[#1a1a2e]
              "
            >
              KidsPaint Studio
            </h3>

            <p
              className="
              mt-4
              max-w-sm
              text-sm
              leading-relaxed
              text-[#1a1a2e]/60
              "
            >
              Kreatívne 3D figúrky a maľovacie sady pre deti. Pomáhame deťom
              objavovať fantáziu cez tvorenie.
            </p>
          </div>

          {/* CONTACT */}

          <div>
            <h4
              className="
              mb-5
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#1a1a2e]/40
              "
            >
              Kontakt
            </h4>

            <div
              className="
              space-y-4
              "
            >
              <a
                href="mailto:info@kidspaint.sk"
                className="
                flex
                items-center
                gap-3
                text-sm
                text-[#1a1a2e]/70
                hover:text-pink-500
                transition
                "
              >
                <Mail size={18} className="text-pink-500" />
                info@kidspaint.sk
              </a>

              <a
                href="tel:+421900000000"
                className="
                flex
                items-center
                gap-3
                text-sm
                text-[#1a1a2e]/70
                hover:text-pink-500
                transition
                "
              >
                <Phone size={18} className="text-pink-500" />
                +421 900 000 000
              </a>

              <div
                className="
                flex
                items-center
                gap-3
                text-sm
                text-[#1a1a2e]/70
                "
              >
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
              tracking-[0.2em]
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
              <a
                href="#"
                aria-label="Instagram"
                className="
                w-12
                h-12
                rounded-full
                bg-white/70
                backdrop-blur-xl
                border
                border-white
                flex
                items-center
                justify-center
                text-[#1a1a2e]
                hover:bg-pink-500
                hover:text-white
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-sm
                "
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                w-12
                h-12
                rounded-full
                bg-white/70
                backdrop-blur-xl
                border
                border-white
                flex
                items-center
                justify-center
                text-[#1a1a2e]
                hover:bg-pink-500
                hover:text-white
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-sm
                "
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="
                w-12
                h-12
                rounded-full
                bg-white/70
                backdrop-blur-xl
                border
                border-white
                flex
                items-center
                justify-center
                text-[#1a1a2e]
                hover:bg-pink-500
                hover:text-white
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-sm
                "
              >
                <FaTiktok size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
          mt-12
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
