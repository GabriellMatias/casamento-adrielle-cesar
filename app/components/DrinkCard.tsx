"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { type Drink, TAG_COLORS } from "../lib/drinks";

function DrinkModal({
  drink,
  onClose,
}: {
  readonly drink: Drink;
  readonly onClose: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/images/drinks/${drink.id}.jpg`;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do drink ${drink.name}`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-surface rounded-2xl overflow-hidden w-full max-w-md shadow-2xl border border-gold-light/30 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors text-lg leading-none"
        >
          &times;
        </button>

        {/* Image */}
        <div className="relative w-full h-52 bg-cream flex-shrink-0">
          {imgError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cream via-peach/20 to-gold/10">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gold opacity-40"
                aria-hidden="true"
              >
                <path
                  d="M8 2H16L19 8H5L8 2Z"
                  fill="currentColor"
                  opacity="0.5"
                />
                <path
                  d="M5 8L7 22H17L19 8H5Z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M12 8L10 14H14L12 8Z"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={`Foto do drink ${drink.name}`}
              fill
              className="object-cover"
              sizes="448px"
              onError={() => setImgError(true)}
            />
          )}
          {/* Section badge */}
          <span className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full bg-black/40 text-white/90 backdrop-blur-sm font-medium tracking-wide">
            {drink.section}
          </span>
          {!drink.alcoholic && (
            <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-sage/90 text-white font-semibold">
              Sem álcool
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-text-dark mb-1">
            {drink.name}
          </h2>
          <div
            className="gold-line mb-4"
            style={{ width: "48px", margin: "0 0 1rem 0" }}
          />

          <p className="text-text-muted text-sm leading-relaxed italic mb-5">
            {drink.description}
          </p>

          <div className="mb-4">
            <h4 className="text-xs tracking-widest uppercase text-gold font-semibold mb-2">
              Ingredientes
            </h4>
            <ul className="space-y-1">
              {drink.ingredients
                .split(", ")
                .map((item) => item.replace(/\.$/, ""))
                .map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-dark"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
            </ul>
          </div>

          {drink.profile.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs tracking-widest uppercase text-gold font-semibold mb-2">
                Perfil
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {drink.profile.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-cream border border-gold-light/40 text-text-muted capitalize"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {drink.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
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

          {drink.note && (
            <p className="text-xs text-text-light italic border-l-2 border-gold-light/50 pl-3 mt-2">
              {drink.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DrinkCard({ drink }: { readonly drink: Drink }) {
  const [imgError, setImgError] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const imageSrc = `/images/drinks/${drink.id}.jpg`;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full text-left bg-surface rounded-2xl overflow-hidden border border-gold-light/20 hover:border-gold-light/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        aria-label={`Ver detalhes do drink ${drink.name}`}
      >
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
                <path
                  d="M8 2H16L19 8H5L8 2Z"
                  fill="currentColor"
                  opacity="0.5"
                />
                <path
                  d="M5 8L7 22H17L19 8H5Z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M12 8L10 14H14L12 8Z"
                  fill="currentColor"
                  opacity="0.6"
                />
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
          {/* "Ver mais" hint */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
              Ver mais
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-[family-name:var(--font-playfair)] text-lg text-text-dark mb-1 group-hover:text-gold transition-colors duration-300">
            {drink.name}
          </h3>
          <div
            className="gold-line mb-3"
            style={{ margin: "0 0 0.75rem 0", width: "40px" }}
          />
          <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
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
      </button>

      {/* Modal portal */}
      {mounted &&
        open &&
        createPortal(
          <DrinkModal drink={drink} onClose={() => setOpen(false)} />,
          document.body
        )}
    </>
  );
}
