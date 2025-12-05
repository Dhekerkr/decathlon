export type MovementInstructionByLevel = {
  [level: string]: string[];
};

export type MovementData = {
  id: string;
  label: string;
  description: string;
  instructions: MovementInstructionByLevel;
  checklist: string[];
  imageUrl: string;

  recommendedFor: {
    goals: string[];
    sports: string[];
    avoidPainZones: string[];
  };
};


export const movements: MovementData[] = [
  {
    id: "squat",
    label: "Squat",
    description:
      "Le squat est un exercice fondamental pour renforcer les jambes et les fessiers tout en améliorant la mobilité.",
    instructions: {
      Débutant: [
        "Commence avec un écartement des pieds à largeur d'épaules",
        "Descends lentement comme si tu t'asseyais sur une chaise",
        "Garde ton poids sur tes talons",
        "Ne descends pas trop bas au début, vise un angle de 90° au niveau des genoux",
        "Utilise un support (chaise, mur) si nécessaire pour l'équilibre",
      ],
      Intermédiaire: [
        "Écarte tes pieds légèrement plus que la largeur des épaules",
        "Descends jusqu'à ce que tes cuisses soient parallèles au sol",
        "Pousse sur tes talons pour remonter",
        "Garde ton dos droit et ta poitrine relevée",
        "Fais 3 séries de 12-15 répétitions",
      ],
      Avancé: [
        "Expérimente différentes variantes (squat sumo, bulgare, pistol)",
        "Ajoute du poids progressivement (haltères, barre)",
        "Travaille la profondeur : descends en dessous du parallèle",
        "Focus sur l'explosivité lors de la remontée",
        "Intègre des pauses en bas pour augmenter la difficulté",
      ],
    },
    checklist: [
      "Pieds bien ancrés au sol, légèrement tournés vers l'extérieur",
      "Genoux alignés avec les orteils (ne partent pas vers l'intérieur)",
      "Dos droit, regard devant soi",
      "Poids sur les talons, pas sur les orteils",
      "Respiration : inspire en descendant, expire en remontant",
    ],
    imageUrl: "https://osaforme.fr/wp-content/uploads/2023/02/position-squat.jpg",
    recommendedFor: {
      goals: ["Renforcement", "Perte de poids"],
      sports: ["Musculation", "Course à pied"],
      avoidPainZones: ["Genoux"],
    },
  },
  {
    id: "pushup",
    label: "Pompe (Push-up)",
    description:
      "La pompe est un exercice polyvalent qui renforce le haut du corps : pectoraux, épaules, triceps et sangle abdominale.",
    instructions: {
      Débutant: [
        "Commence par des pompes sur les genoux ou contre un mur",
        "Place tes mains légèrement plus larges que tes épaules",
        "Garde ton corps aligné de la tête aux genoux",
        "Descends lentement en pliant les coudes",
        "Remonte en poussant fort dans tes mains",
      ],
      Intermédiaire: [
        "Adopte la position classique : pieds joints, corps gainé",
        "Descends jusqu'à ce que ta poitrine touche presque le sol",
        "Garde tes coudes à 45° de ton corps (pas trop écartés)",
        "Effectue 3 séries de 10-15 répétitions",
        "Maintiens un rythme contrôlé",
      ],
      Avancé: [
        "Teste des variantes : pompes diamant, déclinées, explosives",
        "Ajoute un clap des mains en position haute",
        "Utilise des poignées de pompe pour augmenter l'amplitude",
        "Intègre des pauses isométriques en position basse",
        "Travaille en séries longues ou en pyramides",
      ],
    },
    checklist: [
      "Corps aligné comme une planche : tête, dos, fesses, jambes",
      "Coudes à environ 45° du corps",
      "Sangle abdominale engagée (ne laisse pas tes hanches tomber)",
      "Descente contrôlée, remontée dynamique",
      "Respiration : inspire en descendant, expire en poussant",
    ],
    imageUrl: "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg",
    recommendedFor: {
      goals: ["Renforcement"],
      sports: ["Musculation"],
      avoidPainZones: ["Épaules"],
    },
  },
  {
    id: "plank",
    label: "Planche (Plank)",
    description:
      "La planche est un exercice isométrique excellent pour renforcer la sangle abdominale et stabiliser tout le corps.",
    instructions: {
      Débutant: [
        "Commence en position sur les avant-bras et les genoux",
        "Garde ton corps droit sans cambrer le dos",
        "Tiens la position 15-30 secondes",
        "Respire calmement et régulièrement",
        "Fais 3 séries avec des pauses entre chaque",
      ],
      Intermédiaire: [
        "Adopte la planche complète : avant-bras et pointes de pieds",
        "Corps parfaitement aligné de la tête aux pieds",
        "Tiens 45-60 secondes",
        "Engage activement tes abdominaux et tes fessiers",
        "Fais 3 à 4 séries",
      ],
      Avancé: [
        "Augmente la durée : vise 90 secondes ou plus",
        "Teste des variantes : planche latérale, avec levée de jambe",
        "Ajoute de l'instabilité (swiss ball, TRX)",
        "Enchaine plusieurs types de planches sans pause",
        "Intègre des mouvements dynamiques (mountain climbers depuis la planche)",
      ],
    },
    checklist: [
      "Corps droit comme une planche, sans cambrer ni arrondir le dos",
      "Coudes directement sous les épaules",
      "Fessiers et abdominaux contractés",
      "Tête dans le prolongement de la colonne (regarde le sol)",
      "Respiration continue et régulière",
    ],
    imageUrl: "https://bodyhit.fr/wp-content/uploads/2018/04/Comment_bien_faire_la_planche.jpg",
    recommendedFor: {
      goals: ["Mobilité", "Détente"],
      sports: ["Yoga", "Course à pied"],
      avoidPainZones: ["Épaules"],
    },
  },
  {
    id: "yoga",
    label: "Posture de yoga (Chien tête en bas)",
    description:
      "Le chien tête en bas est une posture de yoga qui étire tout le corps, renforce les bras et améliore la mobilité.",
    instructions: {
      Débutant: [
        "Commence à quatre pattes, mains sous les épaules",
        "Lève doucement tes hanches vers le ciel",
        "Garde les genoux légèrement fléchis si nécessaire",
        "Ne force pas l'étirement, reste dans ta zone de confort",
        "Tiens la posture 20-30 secondes",
      ],
      Intermédiaire: [
        "Pousse activement dans tes mains",
        "Essaie de tendre tes jambes progressivement",
        "Cherche à poser tes talons au sol (sans forcer)",
        "Allonge ta colonne vertébrale",
        "Tiens 45-60 secondes en respirant profondément",
      ],
      Avancé: [
        "Perfectionne l'alignement : corps en V inversé",
        "Talons complètement au sol, jambes tendues",
        "Épaules actives, poussent loin des oreilles",
        "Engage les cuisses et tire les rotules vers le haut",
        "Utilise cette posture comme transition dans des flows dynamiques",
      ],
    },
    checklist: [
      "Mains bien ancrées, doigts écartés",
      "Épaules éloignées des oreilles",
      "Dos long et droit (pas arrondi)",
      "Hanches hautes, poids réparti entre mains et pieds",
      "Respiration profonde et calme",
    ],
    imageUrl: "https://namaste.yoga/wp-content/uploads/2019/12/chien-tete-en-bas-1460x800.jpg",
    recommendedFor: {
      goals: ["Mobilité", "Détente"],
      sports: ["Yoga", "Course à pied"],
      avoidPainZones: ["Épaules"],
    },
  },
  {
  id: "fullbody-stretch",
  label: "Étirement complet du corps",
  description:
    "Séquence d’étirements doux permettant d’améliorer la mobilité générale et la récupération après l’effort.",
  instructions: {
    Débutant: [
      "Maintiens chaque étirement pendant 20 à 30 secondes.",
      "Ne force jamais : reste dans une zone confortable.",
      "Respire profondément pour détendre les muscles.",
    ],
    Intermédiaire: [
      "Tiens les étirements 30 à 45 secondes.",
      "Ajoute des mouvements dynamiques contrôlés.",
      "Alternez tension et relâchement musculaire.",
    ],
    Avancé: [
      "Ajoute des étirements actifs pour augmenter la mobilité.",
      "Incorpore des positions de yoga comme le guerrier.",
      "Maintiens les positions jusqu’à 1 minute.",
    ],
  },
  checklist: [
    "Respiration lente et profonde",
    "Pas de douleur aiguë",
    "Posture stable et contrôlée",
  ],
  imageUrl: "https://cdn8.futura-sciences.com/a1280/images/etirements-musculaires-vieillissement.png",

  recommendedFor: {
    goals: ["Renforcement", "Mobilité", "Détente", "Perte de poids"],
    sports: ["Yoga", "Course à pied", "Musculation", "Autre"],
    avoidPainZones: [],
  },
},

{
  id: "active-walk",
  label: "Marche active",
  description:
    "Exercice universel faible impact qui améliore la circulation, brûle des calories et renforce la posture.",
  instructions: {
    Débutant: [
      "Marche 10 minutes à rythme modéré.",
      "Garde un bon alignement du dos.",
      "Utilise tes bras pour rythmer ta marche.",
    ],
    Intermédiaire: [
      "Marche 20 minutes à rythme soutenu.",
      "Alterner 1 min rapide / 1 min normale.",
      "Posture fière : épaules basses, regard loin.",
    ],
    Avancé: [
      "Marche 30 minutes rapide ou en côte.",
      "Accentue l’impulsion des bras.",
      "Varie les terrains pour solliciter la stabilité.",
    ],
  },
  checklist: [
    "Dos droit",
    "Respiration fluide",
    "Foulée dynamique mais contrôlée",
  ],
  imageUrl: "https://ffepgv.fr/images/demo/18.jpg",

  recommendedFor: {
    goals: ["Perte de poids", "Mobilité", "Détente"],
    sports: ["Autre", "Course à pied", "Musculation", "Yoga"],
    avoidPainZones: [],
  },
},

  
];
