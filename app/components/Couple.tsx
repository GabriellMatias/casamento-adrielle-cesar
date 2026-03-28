import Image from "next/image";
import { WEDDING } from "../lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Couple() {
  return (
    <section id="casal" className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold mb-3">
              Nosso Amor
            </h2>
            <div className="gold-line mt-4" />
          </div>
        </ScrollReveal>

        {/* Couple photo */}
        <ScrollReveal delay={200}>
          <div className="flex justify-center mb-10">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold-light/40 shadow-xl">
              <Image
                src="/images/placeholder-couple.jpg"
                alt={`${WEDDING.couple.bride} e ${WEDDING.couple.groom}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Names */}
        <ScrollReveal delay={300}>
          <div className="text-center mb-10">
            <h3 className="font-[family-name:var(--font-great-vibes)] text-4xl md:text-5xl text-gold mb-4">
              {WEDDING.couple.bride} & {WEDDING.couple.groom}
            </h3>
            <p className="text-text-muted leading-relaxed max-w-lg mx-auto">
              Duas histórias que se encontraram para escrever juntos o capítulo
              mais bonito de suas vidas. Com a graça de Deus e o amor que os
              uniu, celebram agora esta nova jornada.
            </p>
          </div>
        </ScrollReveal>

        {/* Daughter */}
        <ScrollReveal delay={400}>
          <div className="flex flex-col items-center mb-10">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-peach/60 shadow-lg mb-4">
              <Image
                src="/images/placeholder-daughter.jpg"
                alt={WEDDING.daughter}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
            <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-gold">
              {WEDDING.daughter}
            </p>
            <p className="text-text-muted text-sm mt-1">
              A princesinha que completa essa história de amor
            </p>
          </div>
        </ScrollReveal>

        {/* Parents */}
        <ScrollReveal delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-center p-6 rounded-2xl bg-surface/60 border border-gold-light/20 transition-colors duration-300">
              <p className="text-text-light text-xs uppercase tracking-widest mb-3">
                Pais da Noiva
              </p>
              <p className="text-text-dark font-medium">
                {WEDDING.parents.bride.father}
              </p>
              <p className="text-text-muted">&</p>
              <p className="text-text-dark font-medium">
                {WEDDING.parents.bride.mother}
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-surface/60 border border-gold-light/20 transition-colors duration-300">
              <p className="text-text-light text-xs uppercase tracking-widest mb-3">
                Pais do Noivo
              </p>
              <p className="text-text-dark font-medium">
                {WEDDING.parents.groom.father}
              </p>
              <p className="text-text-muted">&</p>
              <p className="text-text-dark font-medium">
                {WEDDING.parents.groom.mother}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
