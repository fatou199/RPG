"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var readline = require('readline-sync');
// require ('colors') // a popular color utility
// Création des fonctions
// On aura deux fonctions: attack et heal
// attack: inflige des degats à l'adversaire egaux a la stat de STR
function attack(character, enemy) {
    enemy.hp -= character.str;
    if (enemy.hp < 0) {
        enemy.hp = 0;
    }
}
// heal: soigne uniqument le joueur de la moitié des HP
function heal(character) {
    character.hp += character.maxHp / 2;
    // si elle depasse la santé maximal
    if (character.hp > character.maxHp) {
        character.hp = character.maxHp; // alors tu l'augmente jusqu'au au maxHP
    }
}
var red = '\u001b[31m'; // Code ANSI pour rouge
var green = '\u001b[32m'; // Code ANSI pour green
var reset = '\u001b[0m'; // Code ANSI pour réinitialiser
// Affichage joueurs
function afficheLife(character, enemie) {
    // Affichage des HP du personnage
    var HPplayer = 'HP: ';
    for (var k = 0; k < character.maxHp; k += 1) {
        if (k < character.hp) {
            HPplayer += ('I');
        }
        else {
            HPplayer += ('_');
        }
    }
    console.log("".concat(green).concat(character.name).concat(reset));
    console.log("".concat(HPplayer, " ").concat(character.hp, " / ").concat(character.maxHp));
    console.log('\n');
    // Affichage des HP de l'ennemi
    var HPenemy = 'HP: ';
    for (var j = 0; j < enemie.maxHp; j += 1) {
        if (j < enemie.hp) {
            HPenemy += ('I');
        }
        else {
            HPenemy += ('_');
        }
    }
    console.log("".concat(red).concat(enemie.name).concat(reset));
    console.log("".concat(HPenemy, " ").concat(enemie.hp, " / ").concat(enemie.maxHp));
}
// Creation du joueur
// let player: Character = {
//     name: 'Link',
//     hp: 60,
//     str: 15,
//     maxHp: 60,
// }
// Faire la création du joueur grace a la fonction getPlayer
var player = (0, helpers_1.getPlayer)();
function baseGame(character) {
    var Fight = 0;
    var level = 1;
    var red = '\u001b[31m'; // Code ANSI pour rouge
    var blue = '\u001b[34m';
    var yellow = '\u001b[33m';
    var violet = '\u001b[35m';
    var reset = '\u001b[0m'; // Code ANSI pour réinitialiser
    var choices = ['Attack', 'Heal'];
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
        var enemy = (0, helpers_1.getEnnemie)();
        afficheLife(character, enemy);
        // tant que character et enemy sont superieur à 0 alors
        while (character.hp > 0 && enemy.hp > 0) {
            console.log("".concat(blue, "******** Level ").concat(level, " ********").concat(reset));
            console.log("".concat(blue, "======== Options =======)").concat(reset));
            var choice = readline.keyInSelect(choices, 'Veuillez choisir entre 1 et 2');
            // choix d'attaquer ou se soigner
            if (choice === 0) {
                attack(character, enemy);
                console.log("".concat(yellow).concat(character.name, " attaque et inflige ").concat(character.str, " d\u00E9g\u00E2ts ").concat(reset));
            }
            else if (choice === 1) {
                heal(character);
                console.log("".concat(violet).concat(character.name, " se soigne ").concat(reset));
            }
            else {
                console.log('Veuillez choisir entre 0 et 1');
                break;
            }
            // Si l'ennemie est encore en vie
            if (enemy.hp > 0) {
                // character.hp -= enemy.str
                attack(enemy, character);
                console.log("".concat(yellow).concat(enemy.name, " attaque et inflige ").concat(enemy.str, " d\u00E9g\u00E2ts").concat(reset));
            }
            afficheLife(character, enemy);
        }
        // si le player est mort
        if (character.hp <= 0) {
            console.log("".concat(yellow).concat(character.name, " est mort ").concat(reset));
            break;
        }
        else {
            console.log("".concat(yellow).concat(enemy.name, " a perdu ").concat(reset));
            level += 1;
        }
        // Si l'ennemie a perdu l'affichage de Ganon
        if (level === 10 && character.hp > 0) {
            console.log("".concat(blue, "******** Level ").concat(level, " ********").concat(reset));
            // const boss: Enemy = {
            //     name: 'Ganon',
            //     hp: 150,
            //     str: 20,
            //     maxHp: 150
            // }
            var boss = (0, helpers_1.getBosse)();
            afficheLife(character, boss);
            while (character.hp > 0 && boss.hp > 0) {
                var choice = readline.keyInSelect(choices, '');
                if (choice === 0) {
                    attack(character, boss);
                    console.log("".concat(yellow).concat(character.name, " attaque ").concat(boss.name, " ").concat(reset));
                }
                else if (choice === 1) {
                    heal(character);
                    console.log("".concat(yellow).concat(character.name, " se soigne ").concat(reset));
                }
                else {
                    break;
                }
                if (boss.hp > 0) {
                    attack(boss, character);
                    console.log("".concat(yellow).concat(boss.name, " attaque et inflige ").concat(boss.str, " d\u00E9g\u00E2ts ").concat(reset));
                }
                afficheLife(character, boss);
            }
            // Si le player a moins de 0 il a perdu et si le boss a moins de 0 c'est lui qui a perdu.
            if (character.hp <= 0) {
                console.log("".concat(green).concat(character.name, " est mort !").concat(reset));
                break;
            }
            else if (boss.hp <= 0) {
                console.log("".concat(red).concat(boss.name, " a \u00E9t\u00E9 vaincu !").concat(reset));
                break;
            }
        }
    }
}
exports.default = baseGame;
