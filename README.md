
# Projet The Hyrule Castle

## Prérequis
* Node.js (version >= 14.x)
* NPM (généralement installé avec Node.js)

## Installation
Pour démarrer ce projet, suivez les étapes ci-dessous :

- Clonez le dépôt
Clonez ce projet sur votre machine locale :

```bash
git clone <URL_du_dépôt>
cd base_game
``` 

- Installez les dépendances

```bash
npm install
``` 

- Si il n'y avait pas le package.json on aurait pu executer le script dans chaque dossier 
```bash
chmod u+ script.sh
../script.sh
``` 

- Compilez et exécutez le projet

```bash
basegame: tsc main.ts && node main.js
modgame: tsc more_statistics.ts && node more_statistics.js
``` 


## Objectifs

Dans ce projet, vous allez :

- Appliquer les concepts de base de TypeScript à travers le développement d'un jeu.
- Traiter des problématiques liées aux mécaniques de jeu.
- Gérer l'entrée de l'utilisateur et le traitement des erreurs.
- Améliorer vos compétences en programmation en créant un script.
- Créer des mécaniques de jeu autour de fonctions algorithmiques et mathématiques.

## Instructions

Au cours de ce projet, vous développerez un petit jeu RPG avec des mécaniques personnalisables. Vous commencerez par un jeu de base, puis ajouterez des *mods* pour enrichir le gameplay.

### Structure du projet

1. **Jeu de base** : Développez la structure principale du jeu.
2. **Mods** : Ajoutez des *mods* à partir d'une liste prédéfinie, chacun apportant de nouvelles fonctionnalités ou mécaniques de jeu.
3. **Organisation des fichiers** :
   - Le jeu de base doit être placé dans le dossier `base_game/` pour la soumission et la correction.
   - Pour les versions modifiées, utilisez un dossier `mods/` avec un fichier par mod.

## Étape 1 : Jeu de base

Avant d'ajouter des *mods*, assurez-vous que le jeu de base fonctionne correctement. Il s'agira d'un jeu RPG au tour par tour dans lequel le joueur (Link) devra gravir une tour de 10 étages, en affrontant des ennemis à chaque étage, avec un combat final contre un boss à l'étage 10.

### Mécaniques de jeu de base :

- **Caractéristiques du personnage** :
  - Link : 60 HP, 15 STR.
  - Bokoblin : 30 HP, 5 STR.
  - Ganon (Boss à l'étage 10) : 150 HP, 20 STR.

- **Options de combat** :
  - **Attaquer** : Inflige des dégâts égaux à la caractéristique STR du joueur.
  - **Soigner** : Restaure la moitié des points de vie max du joueur.
  - Après le tour du joueur, l'ennemi attaque avec des dégâts égaux à sa propre caractéristique STR.

- **Déroulement du jeu** :
  - Vous combattez des ennemis à chaque étage.
  - Si les HP de l'ennemi tombent à 0, il est vaincu et vous passez à l'étage suivant.
  - Si vos HP tombent à 0, le jeu s'arrête.
  - Lorsque Ganon est vaincu, le jeu s'arrête avec un message de félicitations.

---

## Étape 2 : Personnages dynamiques

Pour ajouter une sélection dynamique des personnages, vous allez récupérer les données du joueur, des ennemis et du boss à partir des fichiers JSON suivants :

- `players.json` : Récupère les données du personnage joueur.
- `enemies.json` : Récupère les données des ennemis.
- `bosses.json` : Récupère les données du boss.

Les personnages (joueur, ennemis et boss) seront sélectionnés de manière aléatoire, en utilisant la rareté comme vecteur de probabilité. Cela rendra chaque session de jeu unique.

---

## Étape 3 : Mod - Plus de Statistiques

Une fois le jeu de base terminé, vous ajouterez un *mod* pour enrichir les statistiques du personnage. Ce *mod* ajoutera des statistiques supplémentaires telles que la défense, la vitesse, ou d'autres caractéristiques selon vos choix.
