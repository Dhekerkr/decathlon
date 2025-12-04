export type QuestionOption = string;

export type Question = {
  id: string;
  question: string;
  options: QuestionOption[];
};

export const questions: Question[] = [
  {
    id: "level",
    question: "Quel est ton niveau sportif ?",
    options: ["Débutant", "Intermédiaire", "Avancé"],
  },
  {
    id: "mainSport",
    question: "Quel sport pratiques-tu le plus souvent ?",
    options: ["Musculation", "Course à pied", "Yoga", "Autre"],
  },
  {
    id: "goal",
    question: "Quel est ton objectif principal ?",
    options: [
      "Renforcement musculaire",
      "Mobilité",
      "Prévention des blessures",
      "Perte de poids",
    ],
  },
  {
    id: "painZone",
    question: "As-tu des zones de douleur ?",
    options: ["Genoux", "Dos", "Épaules", "Aucune"],
  },
];

export type SportProfile = {
  level: "Débutant" | "Intermédiaire" | "Avancé";
  mainSport: string;
  goal: string;
  painZone: string;
};

export type QCMAnswers = {
  [key: string]: string;
};
