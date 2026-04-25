import Link from "next/link";
import { DRINKS } from "../lib/drinks";
import DrinkCard from "./DrinkCard";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

const PREVIEW_COUNT = 3;

export default function DrinksMenuSection() {
  const preview = DRINKS.slice(0, PREVIEW_COUNT);

  return (
    <section
      id="cardapio"
      className="section-padding bg-cream transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            title="Carta de Drinks"
            subtitle="Uma seleção especial preparada para esta noite"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-center text-text-muted max-w-lg mx-auto mb-12 leading-relaxed italic">
            Cada drink foi escolhido com carinho para celebrar este momento
            inesquecível ao lado de vocês.
          </p>
        </ScrollReveal>

        {/* Preview grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {preview.map((drink, i) => (
            <ScrollReveal key={drink.id} delay={200 + i * 100}>
              <DrinkCard drink={drink} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={500}>
          <div className="text-center">
            <Link
              href="/cardapio"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-white rounded-full text-sm tracking-wider uppercase transition-all duration-300 font-medium"
            >
              <span>Ver carta completa</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
