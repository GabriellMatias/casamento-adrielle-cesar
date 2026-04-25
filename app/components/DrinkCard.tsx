"use client";

import { useState } from "react";
import Image from "next/image";
import { type Drink, TAG_COLORS } from "../lib/drinks";

export default function DrinkCard({ drink }: { readonly drink: Drink }) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/images/drinks/${drink.id}.jpg`;

  return (
    <div className="group bg-surface rounded-2xl overflow-hidden border border-gold-light/20 hover:border-gold-light/50 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image area */}
      <div className="relative w-full h-44 bg-cream overflow-hidden">
        {imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cream via-peach/20 to-gold/10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold opacity-40"
              aria-hidden="true"
            >
              <path d="M8 2H16L19 8H5L8 2Z" fill="currentColor" opacity="0.5" />
              <path d="M5 8L7 22H17L19 8H5Z" fill="currentColor" opacity="0.3" />
              <path d="M12 8L10 14H14L12 8Z" fill="currentColor" opacity="0.6" />
            </svg>
            <span className="text-xs text-gold/50 mt-2 font-[family-name:var(--font-lora)] italic">
              {drink.name}
            </span>
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={`Foto do drink ${drink.name}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg text-text-dark mb-1 group-hover:text-gold transition-colors duration-300">
          {drink.name}
        </h3>
        <div className="gold-line mb-3" style={{ margin: "0 0 0.75rem 0", width: "40px" }} />
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {drink.ingredients}
        </p>

        {/* Tags */}
        {drink.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {drink.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2.5 py-0.5 rounded-full font-medium capitalize ${TAG_COLORS[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
