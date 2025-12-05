Decathlon – Coach Postural Intelligent

Projet développé par l’équipe Tiramisu dans le cadre du défi Decathlon Digital – Nuit de l’Info 2025.

Description du projet

Cette application a pour objectif d’aider les utilisateurs à réaliser correctement des mouvements sportifs afin de prévenir les blessures.
Elle utilise un système de profilage sportif et un algorithme de recommandation pour proposer des exercices adaptés au niveau, au sport pratiqué, aux objectifs et aux zones de douleur de l’utilisateur.

Le projet inclut :

Un questionnaire permettant de créer un profil sportif personnalisé

Un système intelligent de recommandation de mouvements

Des instructions détaillées et illustrées pour chaque mouvement

Des produits Decathlon suggérés pour accompagner la pratique sportive

Une prise en compte de plusieurs zones de douleur (sélection multiple)

Des mécanismes de sécurité assurant qu’une liste pertinente de mouvements est toujours affichée

Démo en ligne

L’application est accessible sans installation à l’adresse suivante :
https://decathlon-gamma.vercel.app/

Installation locale

Si vous souhaitez exécuter le projet en local :

Installer les dépendances :

npm install


Lancer le serveur de développement :

npm run dev


Ouvrir l’URL affichée par Vite (ex. http://localhost:5173
).

Fonctionnalités principales
Profilage sportif

Niveau sportif

Sport principal

Objectif

Zones de douleur (sélection multiple)

Recommandation intelligente

Un système de filtrage et de fallback propose des mouvements adaptés selon :

Le niveau

Le sport pratiqué

L’objectif

Les zones de douleur

La sécurité de l’utilisateur

Le système garantit qu’au moins un mouvement pertinent est toujours affiché.

Détails des mouvements

Chaque mouvement comporte :

Une illustration

Une description

Des instructions personnalisées selon le niveau

Une checklist technique

Produits recommandés

Pour chaque mouvement, des produits utiles issus de Decathlon sont proposés pour accompagner et améliorer la pratique sportive.

Technologies utilisées

React

TypeScript

Vite

Tailwind CSS

LocalStorage (stockage du profil)

Vercel (hébergement)

Équipe

Projet développé par l’équipe Tiramisu dans le cadre de la Nuit de l’Info.
