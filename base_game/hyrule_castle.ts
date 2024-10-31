import { Character, Enemy } from './interface';

import { getBosse, getPlayer, getEnnemie } from './helpers';

const readline = require('readline-sync');
// require ('colors') // a popular color utility

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
const reset = '\u001b[0m'; // Code ANSI pour réinitialiser

// Affichage joueurs
function afficheLife(character: Character, enemie: Enemy) {
  // Affichage des HP du personnage
  let HPplayer = 'HP: ';

  for (let k = 0; k < character.maxHp; k += 1) {
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

// Creation du joueur
// let player: Character = {
//     name: 'Link',
//     hp: 60,
//     str: 15,
//     maxHp: 60,
// }

// Faire la création du joueur grace a la fonction getPlayer
const player: Character = getPlayer();

function baseGame(character: Character) {
  let Fight = 0;
  let level: number = 1;

  const red = '\u001b[31m'; // Code ANSI pour rouge
  const blue = '\u001b[34m';
  const yellow = '\u001b[33m';
  const violet = '\u001b[35m';
  const reset = '\u001b[0m'; // Code ANSI pour réinitialiser

  const choices: string[] = ['Attack', 'Heal'];

  /* tant que le HP de character n'est pas a moins de 0
  et qu'il n'a pas atteint le 10e etage alors cree l'enemy */
  while (character.hp > 0 && level < 10) {
    // Création de l'ennemi
    // const enemy: Enemy = {
    //     name: "Bokoblin",
    //     hp: 30,
    //     str: 5,
    //     maxHp: 30,
    // }

    const enemy: Enemy = getEnnemie();


    afficheLife(character, enemy);

    // tant que character et enemy sont superieur à 0 alors
    while (character.hp > 0 && enemy.hp > 0) {
      console.log(`${blue}******** Level ${level} ********${reset}`);
      
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
    }

    // Si l'ennemie a perdu l'affichage de Ganon
    if (level === 10 && character.hp > 0) {
      console.log(`${blue}******** Level ${level} ********${reset}`);
      // const boss: Enemy = {
      //     name: 'Ganon',
      //     hp: 150,
      //     str: 20,
      //     maxHp: 150
      // }
      const boss: Enemy = getBosse();

      afficheLife(character, boss);

      while (character.hp > 0 && boss.hp > 0) {
        const choice = readline.keyInSelect(choices, '');

        if (choice === 0) {
          attack(character, boss);
          console.log(`${yellow}${character.name} attaque ${boss.name} ${reset}`);
        } else if (choice === 1) {
          heal(character);
          console.log(`${yellow}${character.name} se soigne ${reset}`);
        } else {
          break;
        }
        if (boss.hp > 0) {
          attack(boss, character);
          console.log(`${yellow}${boss.name} attaque et inflige ${boss.str} dégâts ${reset}`);
        }
        afficheLife(character, boss);
      }

      // Si le player a moins de 0 il a perdu et si le boss a moins de 0 c'est lui qui a perdu.
      if (character.hp <= 0) {
        console.log(`${green}${character.name} est mort !${reset}`);
        break;
      } else if (boss.hp <= 0) {
        console.log(`${red}${boss.name} a été vaincu !${reset}`);
        break;
      }
    }
  }
}

export default baseGame;
