import Image from "next/image";
import Link from "next/link";
import { DRINKS } from "../lib/drinks";
import DrinkCard from "../components/DrinkCard";
import QrCodePlaceholder from "../components/QrCodePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carta de Drinks — Adrielle & Cézar",
  description:
    "Conheça a seleção especial de drinks preparada para o casamento de Adrielle e Cézar.",
};

export default function CardapioPage() {
  return (
    <main className="min-h-screen bg-cream pt-28 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-gold text-sm transition-colors mb-10 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Voltar ao site
        </Link>

        {/* Header */}
        <header className="flex flex-col items-center text-center mb-16">
          <div className="relative w-24 h-24 mb-6">
            <Image
              src="/images/logo-ac.png"
              alt="Logo do casal Adrielle e Cézar"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-6xl text-gold mb-3">
            Carta de Drinks
          </h1>
          <p className="font-[family-name:var(--font-playfair)] text-xl text-text-dark mb-4">
            Adrielle &amp; Cézar
          </p>
          <div className="gold-line mb-5" />
          <p className="text-text-muted max-w-md leading-relaxed italic text-sm">
            Celebre conosco com uma seleção especial de drinks preparada para
            esta noite inesquecível.
          </p>
        </header>

        {/* Drinks grid */}
        <section aria-label="Lista de drinks">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {DRINKS.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="floral-divider mb-16">
          <span className="text-gold text-xl" aria-hidden="true">✦</span>
        </div>

        {/* QR Code + footer message */}
        <footer className="flex flex-col items-center gap-8 text-center">
          <QrCodePlaceholder label="Acesse o cardápio digital" />

          <div>
            <p className="font-[family-name:var(--font-great-vibes)] text-3xl text-gold mb-2">
              Brinde, celebre e aproveite
            </p>
            <p className="text-text-muted text-sm tracking-wider">
              Com amor, Adrielle &amp; Cézar · 25 de Abril de 2026
            </p>
          </div>

          <Link
            href="/"
            className="mt-2 text-xs text-text-light hover:text-gold tracking-wider uppercase transition-colors"
          >
            ← Voltar ao convite
          </Link>
        </footer>
      </div>
    </main>
  );
}
