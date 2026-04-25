export type DrinkTag =
  | "cítrico"
  | "refrescante"
  | "frutado"
  | "sem álcool"
  | "borbulhante";

export type DrinkSection =
  | "Gin Drinks"
  | "Caipiroska"
  | "Clássicos"
  | "Spritz & Espumantes";

export interface Drink {
  id: string;
  name: string;
  ingredients: string;
  description: string;
  profile: string[];
  alcoholic: boolean;
  section: DrinkSection;
  note?: string;
  tags: DrinkTag[];
}

export const DRINK_SECTIONS: DrinkSection[] = [
  "Gin Drinks",
  "Caipiroska",
  "Clássicos",
  "Spritz & Espumantes",
];

export const DRINKS: Drink[] = [
  // ── GIN DRINKS ─────────────────────────────────────────────
  {
    id: "gin-tonica",
    name: "Gin Tônica",
    ingredients: "Laranja, gin, água tônica, gelo.",
    description:
      "Um clássico efervescente e elegante. O gin encontra a água tônica e uma rodela de laranja fresca para um drinque aromático e perfeito para começar a noite.",
    profile: ["herbáceo", "cítrico", "leve"],
    alcoholic: true,
    section: "Gin Drinks",
    tags: ["cítrico", "refrescante"],
  },
  {
    id: "gin-tropical",
    name: "Gin Tropical",
    ingredients: "Gin, laranja, energético tropical, gelo.",
    description:
      "Uma explosão de sabores que transporta para os trópicos. O gin se casa perfeitamente com o energético tropical e o frescor da laranja, criando uma experiência vibrante.",
    profile: ["frutado", "energético", "vibrante"],
    alcoholic: true,
    section: "Gin Drinks",
    tags: ["frutado", "refrescante"],
  },
  {
    id: "gin-mediterraneo",
    name: "Gin Mediterrâneo",
    ingredients: "Gin, suco de abacaxi, xarope de maçã verde, gelo.",
    description:
      "Inspirado nas praias do Mediterrâneo. O abacaxi suculento harmoniza com o xarope de maçã verde para um drinque exótico, sofisticado e surpreendente.",
    profile: ["tropical", "adocicado", "sofisticado"],
    alcoholic: true,
    section: "Gin Drinks",
    tags: ["frutado", "cítrico"],
  },
  {
    id: "spring",
    name: "Spring",
    ingredients:
      "Manjericão, laranja, gin, xarope de tangerina, limão siciliano, Sprite, gelo.",
    description:
      "Fresco como uma manhã de primavera. O manjericão aromático harmoniza com os cítricos e o xarope suave de tangerina nessa criação especial — floral, leve e inesquecível.",
    profile: ["aromático", "floral", "refrescante"],
    alcoholic: true,
    section: "Gin Drinks",
    note: "Preparado com folhas de manjericão fresco.",
    tags: ["cítrico", "refrescante"],
  },
  // ── CAIPIROSKA ──────────────────────────────────────────────
  {
    id: "caipiroska-abacaxi",
    name: "Caipiroska de Abacaxi",
    ingredients: "Abacaxi, açúcar, vodka ou gin, gelo.",
    description:
      "Brasil em festa! O abacaxi tropical macerado com açúcar encontra a vodka ou o gin para um drinque doce, frutado e irresistível — perfeito para uma noite assim.",
    profile: ["doce", "tropical", "frutado"],
    alcoholic: true,
    section: "Caipiroska",
    tags: ["frutado", "refrescante"],
  },
  {
    id: "caipiroska-limao",
    name: "Caipiroska de Limão",
    ingredients: "Limão, açúcar, vodka ou gin, gelo.",
    description:
      "O clássico nacional em sua versão mais adorada. Limão fresco macerado, açúcar e vodka formam a tríade perfeita de um drinque acessível, equilibrado e delicioso.",
    profile: ["ácido", "equilibrado", "clássico"],
    alcoholic: true,
    section: "Caipiroska",
    tags: ["cítrico", "refrescante"],
  },
  // ── CLÁSSICOS ───────────────────────────────────────────────
  {
    id: "lagoa-azul",
    name: "Lagoa Azul",
    ingredients: "Curaçau Blue, vodka, limão, Sprite, gelo.",
    description:
      "Visualmente encantador com sua cor azul-serena. O Curaçau Blue traz um toque exótico e colorido, enquanto o limão e a Sprite garantem leveza e frescor — uma obra-prima no copo.",
    profile: ["visual", "cítrico", "refrescante"],
    alcoholic: true,
    section: "Clássicos",
    tags: ["cítrico", "refrescante"],
  },
  {
    id: "john-collins",
    name: "John Collins",
    ingredients: "Vodka, limão, água com gás, limão siciliano, gelo.",
    description:
      "Um clássico americano com história desde 1876. Vodka suave, suco de limão fresco, água com gás e o toque especial do limão siciliano — simples, elegante e incrivelmente refrescante.",
    profile: ["clássico", "cítrico", "efervescente"],
    alcoholic: true,
    section: "Clássicos",
    note: "Servido em copo alto com rodela de limão siciliano.",
    tags: ["cítrico", "borbulhante"],
  },
  // ── SPRITZ & ESPUMANTES ──────────────────────────────────────
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    ingredients: "Aperol, espumante, Sprite ou água com gás, laranja, gelo.",
    description:
      "O ícone de toda celebração italiana. O Aperol com suas notas amargas de laranja encontra o espumante e a leveza do Sprite — harmonioso, borbulhante e irresistível.",
    profile: ["amargo suave", "frutado", "borbulhante"],
    alcoholic: true,
    section: "Spritz & Espumantes",
    note: "Decorado com rodela de laranja fresca.",
    tags: ["cítrico", "borbulhante"],
  },
  {
    id: "limoncello-spritz",
    name: "Limoncello Spritz",
    ingredients: "Limoncello, Sprite ou espumante, água com gás.",
    description:
      "A dolce vita italiana em cada bolha. O licor de limão artesanal se une ao espumante para uma experiência elegante, borbulhante e cítrica — o verdadeiro sabor da Itália.",
    profile: ["cítrico intenso", "doce", "borbulhante"],
    alcoholic: true,
    section: "Spritz & Espumantes",
    tags: ["cítrico", "borbulhante"],
  },
  {
    id: "soda-italiana",
    name: "Soda Italiana",
    ingredients: "Xarope de maçã verde, água com gás, gelo.",
    description:
      "Sofisticação para todos os paladares. O xarope de maçã verde traz frescor e um sabor delicado, transformado em drinque elegante e leve com a água com gás — sem álcool.",
    profile: ["leve", "adocicado", "efervescente"],
    alcoholic: false,
    section: "Spritz & Espumantes",
    note: "Opção sem álcool. Ideal para todos os convidados.",
    tags: ["sem álcool", "refrescante", "borbulhante"],
  },
];

export const TAG_COLORS: Record<DrinkTag, string> = {
  cítrico: "bg-gold/10 text-gold-dark",
  refrescante: "bg-sage/20 text-sage",
  frutado: "bg-peach/30 text-text-muted",
  "sem álcool": "bg-surface border border-gold-light/50 text-text-muted",
  borbulhante: "bg-gold/5 text-gold",
};
