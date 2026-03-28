import Image from "next/image";
import { WEDDING } from "../lib/constants";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import MapEmbed from "./MapEmbed";

export default function Reception() {
  return (
    <section id="recepcao" className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            title="Recepção"
            subtitle="Após a cerimônia, os noivos recepcionarão os convidados"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Info (order reversed on desktop) */}
          <ScrollReveal delay={200}>
            <div className="text-center md:text-left order-2 md:order-1">
              {/* Party icon */}
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gold"
                  >
                    <path
                      d="M2 22L4 2H20L22 22H2Z"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <path
                      d="M6 22V10L12 6L18 10V22H6Z"
                      fill="currentColor"
                      opacity="0.6"
                    />
                    <rect
                      x="10"
                      y="16"
                      width="4"
                      height="6"
                      fill="currentColor"
                      opacity="0.8"
                    />
                    <path
                      d="M8 12H10V14H8V12Z"
                      fill="currentColor"
                      opacity="0.4"
                    />
                    <path
                      d="M14 12H16V14H14V12Z"
                      fill="currentColor"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-text-dark mb-1">
                {WEDDING.reception.name}
              </h3>
              <p className="text-gold text-sm font-medium mb-2">
                {WEDDING.reception.subtitle}
              </p>
              <p className="text-text-muted mb-6">
                {WEDDING.reception.address}
              </p>

              <p className="text-text-muted italic text-sm leading-relaxed mb-6">
                Após a cerimônia religiosa, os noivos recepcionarão os
                convidados para uma noite especial de festa e celebração.
              </p>

              <a
                href={WEDDING.reception.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-full hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Ver no Google Maps
              </a>
            </div>
          </ScrollReveal>

          {/* Farm image */}
          <ScrollReveal delay={300}>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gold-light/20 order-1 md:order-2">
              <Image
                src="/images/placeholder-farm.jpg"
                alt={WEDDING.reception.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Embedded map */}
        <ScrollReveal delay={400}>
          <div className="mt-10">
            <MapEmbed
              query={WEDDING.reception.mapsQuery}
              title={WEDDING.reception.name}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
