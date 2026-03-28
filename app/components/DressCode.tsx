import { WEDDING } from "../lib/constants";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

export default function DressCode() {
  return (
    <section id="dresscode" className="section-padding bg-surface transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            title={WEDDING.dressCode.title}
            subtitle={WEDDING.dressCode.subtitle}
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-center text-text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            {WEDDING.dressCode.description}
          </p>
        </ScrollReveal>

        {/* Outfit icons */}
        <ScrollReveal delay={300}>
          <div className="flex justify-center gap-12 mb-12">
            {/* Female */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-peach/30 flex items-center justify-center mb-3">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold"
                >
                  <circle
                    cx="12"
                    cy="5"
                    r="3"
                    fill="currentColor"
                    opacity="0.7"
                  />
                  <path
                    d="M8 10H16L18 22H6L8 10Z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <path
                    d="M10 10H14V14L12 22L10 14V10Z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </div>
              <span className="text-text-dark text-sm font-medium">
                Feminino
              </span>
              <span className="text-text-muted text-xs mt-1">
                Vestido longo ou midi
              </span>
            </div>

            {/* Male */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mb-3">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold"
                >
                  <circle
                    cx="12"
                    cy="5"
                    r="3"
                    fill="currentColor"
                    opacity="0.7"
                  />
                  <path
                    d="M8 10H16V22H8V10Z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <path
                    d="M11 10H13V16H11V10Z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <path
                    d="M10 10L12 13L14 10"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="currentColor"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <span className="text-text-dark text-sm font-medium">
                Masculino
              </span>
              <span className="text-text-muted text-xs mt-1">
                Camisa social e calça
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Suggested palette */}
        <ScrollReveal delay={400}>
          <div className="text-center mb-8">
            <p className="text-text-dark text-sm font-medium tracking-wider uppercase mb-6">
              Paleta de Cores Sugerida
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {WEDDING.dressCode.suggestedPalette.map((color) => (
                <div key={color.hex} className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full border-2 border-surface shadow-md"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-text-muted text-xs mt-2">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Avoid colors notice */}
        <ScrollReveal delay={500}>
          <div className="mt-8 mx-auto max-w-lg bg-cream/80 border border-gold-light/30 rounded-2xl p-6 text-center">
            <p className="text-text-dark text-sm font-medium mb-2">
              ⚠️ Cores a evitar
            </p>
            <div className="flex justify-center gap-3 mb-3">
              {WEDDING.dressCode.avoidColors.map((color) => (
                <span
                  key={color}
                  className="px-3 py-1 bg-surface border border-gold-light/20 rounded-full text-xs text-text-muted"
                >
                  {color}
                </span>
              ))}
            </div>
            <p className="text-text-muted text-xs italic leading-relaxed">
              {WEDDING.dressCode.avoidNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
