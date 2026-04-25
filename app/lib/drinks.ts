export type DrinkTag = "cítrico" | "refrescante" | "frutado" | "sem álcool" | "borbulhante";

export interface Drink {
  id: string;
  name: string;
  ingredients: string;
  tags: DrinkTag[];
  imagePlaceholder?: string;
}

export const DRINKS: Drink[] = [
  {
    id: "gin-tonica",
    name: "Gin Tônica",
    ingredients: "Laranja, gin, água tônica, gelo.",
    tags: ["cítrico", "refrescante"],
  },
  {
    id: "gin-tropical",
    name: "Gin Tropical",
    ingredients: "Gin, laranja, energético tropical, gelo.",
    tags: ["frutado", "refrescante"],
  },
  {
    id: "gin-mediterraneo",
    name: "Gin Mediterrâneo",
    ingredients: "Gin, suco de abacaxi, xarope de maçã verde, gelo.",
    tags: ["frutado", "cítrico"],
  },
  {
    id: "spring",
    name: "Spring",
    ingredients:
      "Manjericão, laranja, gin, xarope de tangerina, limão siciliano, Sprite, gelo.",
    tags: ["cítrico", "refrescante"],
  },
  {
    id: "caipiroska-abacaxi",
    name: "Caipiroska de Abacaxi",
    ingredients: "Abacaxi, açúcar, vodka ou gin, gelo.",
    tags: ["frutado", "refrescante"],
  },
  {
    id: "caipiroska-limao",
    name: "Caipiroska de Limão",
    ingredients: "Limão, açúcar, vodka ou gin, gelo.",
    tags: ["cítrico", "refrescante"],
  },
  {
    id: "lagoa-azul",
    name: "Lagoa Azul",
    ingredients: "Curaçau Blue, vodka, limão, Sprite, gelo.",
    tags: ["cítrico", "refrescante"],
  },
  {
    id: "soda-italiana",
    name: "Soda Italiana",
    ingredients: "Xarope de maçã verde, água com gás, gelo.",
    tags: ["sem álcool", "refrescante", "borbulhante"],
  },
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    ingredients: "Aperol, espumante, Sprite ou água com gás, laranja, gelo.",
    tags: ["cítrico", "borbulhante"],
  },
  {
    id: "john-collins",
    name: "John Collins",
    ingredients: "Vodka, limão, água com gás, limão siciliano, gelo.",
    tags: ["cítrico", "borbulhante"],
  },
  {
    id: "limoncello-spritz",
    name: "Limoncello Spritz",
    ingredients: "Limoncello, Sprite ou espumante, água com gás.",
    tags: ["cítrico", "borbulhante"],
  },
];

export const TAG_COLORS: Record<DrinkTag, string> = {
  "cítrico": "bg-gold/10 text-gold-dark",
  "refrescante": "bg-sage/20 text-sage",
  "frutado": "bg-peach/30 text-text-muted",
  "sem álcool": "bg-surface border border-gold-light/50 text-text-muted",
  "borbulhante": "bg-gold/5 text-gold",
};
