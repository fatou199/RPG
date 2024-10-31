// Lancement du jeu avec un choix 
// Entre Nouvelle partie & Quitter 
// Création de deux fonctions
const readline = require('readline-sync');

import { Character, Enemy } from './interface';
import { getBosse, getPlayer, getEnnemie } from './helpers';

// Création des fonctions
// On aura deux fonctions: attack et heal

// attack: inflige des degats à l'adversaire egaux a la stat de STR
function attack(character: Character, enemy: Enemy) {
  enemy.hp -= character.str;
  if (enemy.hp < 0) {
    enemy.hp = 0;
  }
}

// heal: soigne uniqument le joueur de la moitié des HP
function heal(character: Character) {
  character.hp += character.maxHp / 2;
  // si elle depasse la santé maximal
  if (character.hp > character.maxHp) {
    character.hp = character.maxHp; // alors tu l'augmente jusqu'au au maxHP
  }
}

const red = '\u001b[31m'; // Code ANSI pour rouge
const green = '\u001b[32m'; // Code ANSI pour green
const blue:string = '\u001b[34m';
const yellow:string = '\u001b[33m';
const violet:string = '\u001b[35m';
const reset:string = '\u001b[0m'; // Code ANSI pour réinitialiser

// Affichage joueurs
function afficheLife(character: Character, enemie: Enemy) {
  
  // Affichage des HP du personnage
  let HPplayer = 'HP: ';
  for (let k = 1; k < character.maxHp; k += 1) {
    if (k < character.hp) {
      HPplayer += ('I');
    } else {
      HPplayer += ('_');
    }
  }
  console.log(`${green}${character.name}${reset}`);
  console.log(`${HPplayer} ${character.hp} / ${character.maxHp}`);

  console.log('\n');

  // Affichage des HP de l'ennemi
  let HPenemy = 'HP: ';
  for (let j = 0; j < enemie.maxHp; j += 1) {
    if (j < enemie.hp) {
      HPenemy += ('I');
    } else {
      HPenemy += ('_');
    }
  }
  console.log(`${red}${enemie.name}${reset}`);
  console.log(`${HPenemy} ${enemie.hp} / ${enemie.maxHp}`);
}

// Faire la création du joueur grace a la fonction getPlayer
const player: Character = getPlayer();

// Demearer le jeu
export function startGame() {
  console.log('Bienvenue dans le mod customization');

  const options: string[] = ['Nouvelle partie', 'Quitter']
  const choix = readline.keyInSelect(options, 'Veuillez choisir entre les deux options :')

  if (choix === 0) {
    newGame()
  } else if (choix === 1) {
    quit()
  } else {
    console.log('Vous n\'avez pas choisi le bon chiifre');
  }

}

// Commencer une nouvelle partie
function newGame() {
  const niveau: string[] = ['Normal', 'Difficult', 'Insane']
  const choix = readline.keyInSelect(niveau, 'Veuillez choisir le niveau de difficulté :')

  // console.log(typeof(choix));
  
  if (choix === 0) {
    baseGame(player, 1); // difficult
    // console.log(getEnnemie());
  } else if (choix === 1) {
    //console.log(`Garrr${getEnnemie()}`);
    baseGame(player, 1.5); // difficult
  } else if (choix === 2) {
    baseGame(player, 2); // difficult
  }
  //return baseGame(player, 1)
}

// Quitter le jeu
function quit() {
  console.log('Vous avez quitter la partie')
}

// definir un nombre de combat
export function defineFight() {
  const fight: number[] = [10, 20, 50, 100]
  const choix = readline.keyInSelect(fight, 'Veuillez choisir le nombre de combat :')
  return fight[choix]
}


// gagner des points
// function gainCoins(){
//   let coins = 12;

//   if (condition) {
    
//   }
// }

// La base du jeu 
export function baseGame(character: Character, difficulty: number) {
  let level: number = 1;
  const choices: string[] = ['Attack', 'Heal'];
  
  // Affichage du nombre d'etage
  let NombreEtage:number = defineFight(); 
  console.log(`etage ${NombreEtage}`)
  let currentFight: number = 1;
  let coins: number = 12;
  

  //tant que le HP de character n'est pas a moins de 0
 // et qu'il n'a pas atteint le 10e etage alors cree l'enemy 
  while (character.hp > 0 && currentFight <= NombreEtage) {

  let enemy: Enemy = currentFight % 10 === 0 ? getBosse() : getEnnemie(difficulty);
  
    // console.log(enemy);
    // console.log(level);
    // console.log(currentFight);
    
    
    afficheLife(character, enemy);

    // tant que character et enemy sont superieur à 0 alors
    while (character.hp > 0 && enemy.hp > 0) {
      console.log(`${blue}******** Level ${level} ********${reset}`);
      console.log(`${blue}======== FIGHT ${currentFight} ========${reset}`);

      afficheLife(character, enemy);

      console.log(`${blue}======== Options =======)${reset}`);
      const choice = readline.keyInSelect(choices, 'Veuillez choisir entre 1 et 2');

      // choix d'attaquer ou se soigner
      if (choice === 0) {
        attack(character, enemy);
        console.log(`${yellow}${character.name} attaque et inflige ${character.str} dégâts ${reset}`);
      } else if (choice === 1) {
        heal(character);
        console.log(`${violet}${character.name} se soigne ${reset}`);
      } else {
        console.log('Veuillez choisir entre 0 et 1');
        break;
      }
      afficheLife(character, enemy);


      // Si l'ennemie est encore en vie
      if (enemy.hp > 0) {
        // character.hp -= enemy.str
        attack(enemy, character);

        console.log(`${yellow}${enemy.name} attaque et inflige ${enemy.str} dégâts${reset}`);
      }
      afficheLife(character, enemy);
    }

    // si le player est mort
    if (character.hp <= 0) {
      console.log(`${yellow}${character.name} est mort ${reset}`);
      break;
    } else {
      console.log(`${yellow}${enemy.name} a perdu ${reset}`);
      level += 1;
      console.log(`Vous avez gagner ${coins += 1} points`);
    }
      currentFight += 1
    }
  }


export default { baseGame };
