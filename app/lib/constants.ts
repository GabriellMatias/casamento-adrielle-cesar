export const WEDDING = {
  couple: {
    bride: "Adrielle",
    groom: "Cézar",
  },
  daughter: "Helena",
  date: "2026-04-25T17:30:00-03:00",
  dateDisplay: "25 de Abril de 2026",
  timeDisplay: "17h30",
  verse: {
    text: "Para que todos vejam, saibam, e considerem, e juntamente entendam que a mão do Senhor fez isso.",
    reference: "Isaías 41:20",
  },
  parents: {
    bride: {
      father: "Adrião Manoel Pereira Filho",
      mother: "Elza Gomes de Araújo",
    },
    groom: {
      father: "Armelindo Manenti",
      mother: "Rosa Maria Zanelatto",
    },
  },
  ceremony: {
    name: "Capela do Divino Espírito Santo",
    address: "Av. Padre Trajano, 32 – Centro, Posse – GO",
    mapsQuery: "Capela+do+Divino+Espirito+Santo+Posse+GO",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Capela+do+Divino+Espirito+Santo+Posse+GO",
  },
  reception: {
    name: "Chácara Vó Joana",
    subtitle: "Fazenda Água Quente",
    address: "Zona Rural – Posse, Goiás",
    mapsQuery: "Fazenda+Agua+Quente+Chacara+Vo+Joana+Posse+GO",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fazenda+Agua+Quente+Chacara+Vo+Joana+Posse+GO",
  },
  rsvp: {
    whatsappNumber: "5500000000000",
    message:
      "Olá! Confirmo minha presença no casamento da Adrielle e do Cézar! Estou muito feliz com o convite! 🎉💒",
  },
  dressCode: {
    title: "Dress Code",
    subtitle: "Traje Esporte Fino",
    description:
      "Pedimos gentilmente que os convidados sigam o dress code para manter a harmonia visual da celebração.",
    avoidColors: ["Branco", "Off-white", "Creme"],
    avoidNote:
      "Por gentileza, evite tons claros que se assemelhem ao branco — essas tonalidades são reservadas para a noiva.",
    suggestedPalette: [
      { name: "Rose", hex: "#C9928E" },
      { name: "Terracota", hex: "#B5705A" },
      { name: "Verde Salvia", hex: "#8B9A7B" },
      { name: "Azul Serenity", hex: "#6B8DAE" },
      { name: "Dourado", hex: "#C4A44A" },
      { name: "Marsala", hex: "#7A3B3E" },
    ],
  },
} as const;
