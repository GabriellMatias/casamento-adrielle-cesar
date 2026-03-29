import Image from "next/image";
import { WEDDING } from "../lib/constants";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import MapEmbed from "./MapEmbed";

export default function Ceremony() {
  return (
    <section
      id="cerimonia"
      className="section-padding bg-surface transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionTitle
            title="Santa Cerimônia"
            subtitle="Celebração religiosa do matrimônio"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Chapel image */}
          <ScrollReveal delay={200}>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gold-light/20">
              <Image
                src="/images/placeholder-chapel.jpg"
                alt={WEDDING.ceremony.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={300}>
            <div className="text-center md:text-left">
              {/* Church icon */}
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gold"
                  >
                    <path d="M12 2L15 8H9L12 2Z" fill="currentColor" />
                    <path
                      d="M3 22V12L7 9V22H3Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M17 22V9L21 12V22H17Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M7 22V8H17V22H7Z"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <rect
                      x="10"
                      y="16"
                      width="4"
                      height="6"
                      fill="currentColor"
                      opacity="0.8"
                    />
                    <rect
                      x="11.5"
                      y="4"
                      width="1"
                      height="4"
                      fill="currentColor"
                    />
                    <rect
                      x="10"
                      y="5.5"
                      width="4"
                      height="1"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-text-dark mb-2">
                {WEDDING.ceremony.name}
              </h3>
              <p className="text-text-muted mb-1">{WEDDING.ceremony.address}</p>
              <div className="flex items-center gap-2 justify-center md:justify-start my-4">
                <div className="w-8 h-[1px] bg-gold-light" />
                <span className="text-gold font-[family-name:var(--font-playfair)] text-lg">
                  {WEDDING.dateDisplay}
                </span>
                <div className="w-8 h-[1px] bg-gold-light" />
              </div>
              <p className="text-text-dark text-lg font-semibold mb-6">
                {WEDDING.timeDisplay}
              </p>

              <a
                href={WEDDING.ceremony.mapsUrl}
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
        </div>

        {/* Embedded map */}
        <ScrollReveal delay={400}>
          <div className="mt-10">
            <MapEmbed
              query={WEDDING.ceremony.mapsQuery}
              title={WEDDING.ceremony.name}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
