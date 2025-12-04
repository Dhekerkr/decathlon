export type Product = {
  id: string;
  name: string;
  description: string;
  url: string;
  movementIds: string[];
};

export const products: Product[] = [
  {
    id: "tapis-yoga",
    name: "Tapis de yoga antidérapant",
    description:
      "Tapis confortable et antidérapant pour toutes vos séances de yoga et d'étirements.",
    url: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-yoga-pilates/_/N-12fdw5",
    movementIds: ["yoga", "plank"],
  },
  {
    id: "bande-resistance",
    name: "Bandes de résistance élastiques",
    description:
      "Set de bandes élastiques pour progresser en douceur et renforcer tous les groupes musculaires.",
    url: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-musculation-cross-training/_/N-1bx3hm1",
    movementIds: ["squat", "pushup"],
  },
  {
    id: "halteres",
    name: "Paire d'haltères ajustables",
    description:
      "Haltères modulables pour ajouter de la charge progressive à vos exercices.",
    url: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-musculation-cross-training/c2-halteres-poids/_/N-12zrhzb",
    movementIds: ["squat"],
  },
  {
    id: "poignees-pompes",
    name: "Poignées de pompes",
    description:
      "Poignées ergonomiques pour augmenter l'amplitude et protéger vos poignets.",
    url: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-musculation-cross-training/_/N-1bx3hm1",
    movementIds: ["pushup"],
  },
  {
    id: "tshirt-respirant",
    name: "T-shirt technique respirant",
    description:
      "Vêtement léger et respirant pour tous types d'entraînements.",
    url: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-vetements-de-sport/_/N-wbq75h",
    movementIds: ["squat", "pushup", "plank", "yoga"],
  },
  {
    id: "chaussures-training",
    name: "Chaussures de training",
    description:
      "Chaussures stables et confortables pour vos entraînements de renforcement.",
    url: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-chaussures-de-sport/_/N-12a62oi",
    movementIds: ["squat", "pushup", "plank"],
  },
  {
    id: "rouleau-massage",
    name: "Rouleau de massage (foam roller)",
    description:
      "Rouleau pour auto-massage et récupération musculaire après l'effort.",
    url: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-yoga-pilates/_/N-12fdw5",
    movementIds: ["squat", "pushup", "plank", "yoga"],
  },
  {
    id: "sangle-yoga",
    name: "Sangle de yoga",
    description:
      "Accessoire pratique pour améliorer votre souplesse et maintenir certaines postures.",
    url: "https://www.decathlon.fr/browse/c0-tous-les-sports/c1-yoga-pilates/_/N-12fdw5",
    movementIds: ["yoga"],
  },
];
