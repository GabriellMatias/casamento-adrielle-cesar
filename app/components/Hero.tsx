import Image from "next/image";
import { WEDDING } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B9A7B]/30 via-cream/80 to-cream dark:from-[#0F1510]/80 dark:via-cream/90 z-10" />

      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-cream">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/placeholder-chapel.jpg')] bg-cover bg-center" />
      </div>

      {/* Floral top decoration */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#8B9A7B]/20 to-transparent dark:from-[#0F1510]/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-2xl mx-auto px-6">
        {/* Logo */}
        <div className="animate-scale-in mb-6">
          <Image
            src="/images/logo-ac.png"
            alt="A & C — Adrielle e Cézar"
            width={180}
            height={120}
            className="mx-auto drop-shadow-lg w-auto h-auto"
            priority
          />
        </div>

        {/* Verse */}
        <p
          className="animate-fade-in text-text-muted italic text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          &ldquo;{WEDDING.verse.text}&rdquo;
          <br />
          <span className="text-gold-light font-semibold text-xs mt-1 inline-block">
            — {WEDDING.verse.reference}
          </span>
        </p>

        {/* Names */}
        <h1
          className="animate-fade-in-up font-[family-name:var(--font-great-vibes)] text-5xl md:text-7xl text-text-dark mb-4"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          {WEDDING.couple.bride} <span className="text-gold">&</span>{" "}
          {WEDDING.couple.groom}
        </h1>

        {/* Blessing text */}
        <p
          className="animate-fade-in text-text-muted text-sm tracking-widest uppercase mb-6"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          Com a bênção de Deus e de seus pais
        </p>

        {/* Date */}
        <div
          className="animate-fade-in-up inline-block border border-gold/40 rounded-full px-8 py-3 bg-surface/60 backdrop-blur-sm transition-colors duration-300"
          style={{ animationDelay: "1s", animationFillMode: "both" }}
        >
          <span className="text-gold font-[family-name:var(--font-playfair)] text-lg md:text-xl tracking-wide">
            {WEDDING.dateDisplay} · {WEDDING.timeDisplay}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 z-20 animate-bounce-subtle"
        style={{ animationDelay: "1.5s", animationFillMode: "both" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gold/60"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
