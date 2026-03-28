"use client";

import { useState, useEffect } from "react";
import { WEDDING } from "../lib/constants";

function getTimeLeft() {
  const target = new Date(WEDDING.date).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl border border-gold-light/40 bg-surface shadow-sm transition-colors duration-300">
        <span className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs md:text-sm text-text-muted uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof getTimeLeft
  > | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-surface text-center transition-colors duration-300">
      <p className="text-text-muted text-sm tracking-widest uppercase mb-8">
        Contagem Regressiva
      </p>
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <CountdownUnit value={timeLeft?.dias ?? 0} label="Dias" />
        <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-gold-light mt-[-1rem]">
          :
        </span>
        <CountdownUnit value={timeLeft?.horas ?? 0} label="Horas" />
        <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-gold-light mt-[-1rem]">
          :
        </span>
        <CountdownUnit value={timeLeft?.minutos ?? 0} label="Min" />
        <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-gold-light mt-[-1rem]">
          :
        </span>
        <CountdownUnit value={timeLeft?.segundos ?? 0} label="Seg" />
      </div>
    </section>
  );
}
