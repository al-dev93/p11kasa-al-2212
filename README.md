# Développez une application Web avec React et React Router

Onzième projet de la formation développeur d'application JavaScript React d'OpenClassrooms

## Contexte du projet

Kasa vous recrute en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

## Le projet

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel.

* **Objectif :** Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos communiquées. Et ce avec un code de qualité !

* **Back-end / data :** Le Back-End n'est pas terminé. Il faut utiliser le fichier JSON contenant une extraction des 20 dernières annonces de logements pour développer le Front qui correspond.

* **Design :** Les maquettes réalisée sur Figma pour le design d’interface sont fournies.

### Contraintes techniques

Utiliser les coding guidelines de Kasa pour construire l'application.

### Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

* Pour le défilement des photos dans la galerie (composant Gallery) :
  * Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
  * Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image.
  * S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
  * La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
* Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page.
* Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  * Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
  