"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#casal", label: "O Casal" },
  { href: "#cerimonia", label: "Cerimônia" },
  { href: "#recepcao", label: "Recepção" },
  { href: "#dresscode", label: "Dress Code" },
  { href: "#cardapio", label: "Drinks" },
  { href: "#presenca", label: "Presença" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur bg-cream/90 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-great-vibes)] text-2xl text-gold hover:text-gold-dark transition-colors"
        >
          A & C
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  scrolled
                    ? "text-text-dark hover:text-gold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-text-dark" : "bg-white"
              } ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-text-dark" : "bg-white"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-text-dark" : "bg-white"
              } ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur bg-cream/95 border-t border-gold-light/30 mt-2">
          <ul className="flex flex-col items-center py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-wider uppercase text-text-dark hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
