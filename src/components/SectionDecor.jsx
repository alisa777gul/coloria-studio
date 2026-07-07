import { Sparkles, Star, Heart, Palette } from "lucide-react";

export default function SectionDecor({ type = "default" }) {
  if (type === "birthday") {
    return (
      <>
        <Sparkles
          className="
          absolute
          top-20
          right-20
          w-10
          h-10
          text-pink-400/40
          animate-float
          "
        />

        <Heart
          className="
          absolute
          bottom-20
          left-16
          w-12
          h-12
          text-red-300/40
          animate-float-delay
          "
        />
      </>
    );
  }

  if (type === "kits") {
    return (
      <>
        <Palette
          className="
          absolute
          top-24
          left-10
          w-14
          h-14
          text-purple-400/30
          animate-float
          "
        />

        <Star
          className="
          absolute
          bottom-20
          right-20
          w-10
          h-10
          text-yellow-400/40
          animate-spin-slow
          "
        />
      </>
    );
  }

  return (
    <>
      <Sparkles
        className="
        absolute
        top-10
        right-10
        text-pink-400/30
        animate-float
        "
      />
    </>
  );
}
