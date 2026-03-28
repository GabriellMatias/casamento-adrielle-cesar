import Image from "next/image";
import { WEDDING } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#3D3428] dark:bg-[#0F0D0B] text-center transition-colors duration-300">
      <div className="max-w-md mx-auto px-4">
        <Image
          src="/images/logo-ac.png"
          alt="A & C"
          width={100}
          height={66}
          className="mx-auto mb-4 opacity-80 w-auto h-auto"
        />
        <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-gold-light mb-2">
          {WEDDING.couple.bride} & {WEDDING.couple.groom}
        </p>
        <p className="text-white/40 text-sm mb-6">
          {WEDDING.dateDisplay} · Posse, Goiás
        </p>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-6" />
        <p className="text-white/30 text-xs">
          Feito com amor para um dia inesquecível ♥
        </p>
      </div>
    </footer>
  );
}
