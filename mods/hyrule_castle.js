"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseGame = exports.defineFight = exports.startGame = void 0;
// Lancement du jeu avec un choix 
// Entre Nouvelle partie & Quitter 
// Création de deux fonctions
var readline = require('readline-sync');
var helpers_1 = require("./helpers");
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
var blue = '\u001b[34m';
var yellow = '\u001b[33m';
var violet = '\u001b[35m';
var reset = '\u001b[0m'; // Code ANSI pour réinitialiser
// Affichage joueurs
function afficheLife(character, enemie) {
    // Affichage des HP du personnage
    var HPplayer = 'HP: ';
    for (var k = 1; k < character.maxHp; k += 1) {
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
// Faire la création du joueur grace a la fonction getPlayer
var player = (0, helpers_1.getPlayer)();
// Demearer le jeu
function startGame() {
    console.log('Bienvenue dans le mod customization');
    var options = ['Nouvelle partie', 'Quitter'];
    var choix = readline.keyInSelect(options, 'Veuillez choisir entre les deux options :');
    if (choix === 0) {
        newGame();
    }
    else if (choix === 1) {
        quit();
    }
    else {
        console.log('Vous n\'avez pas choisi le bon chiifre');
    }
}
exports.startGame = startGame;
// Commencer une nouvelle partie
function newGame() {
    var niveau = ['Normal', 'Difficult', 'Insane'];
    var choix = readline.keyInSelect(niveau, 'Veuillez choisir le niveau de difficulté :');
    // console.log(typeof(choix));
    if (choix === 0) {
        baseGame(player, 1); // difficult
        // console.log(getEnnemie());
    }
    else if (choix === 1) {
        //console.log(`Garrr${getEnnemie()}`);
        baseGame(player, 1.5); // difficult
    }
    else if (choix === 2) {
        baseGame(player, 2); // difficult
    }
    //return baseGame(player, 1)
}
// Quitter le jeu
function quit() {
    console.log('Vous avez quitter la partie');
}
// definir un nombre de combat
function defineFight() {
    var fight = [10, 20, 50, 100];
    var choix = readline.keyInSelect(fight, 'Veuillez choisir le nombre de combat :');
    return fight[choix];
}
exports.defineFight = defineFight;
// gagner des points
// function gainCoins(){
//   let coins = 12;
//   if (condition) {
//   }
// }
// La base du jeu 
function baseGame(character, difficulty) {
    var level = 1;
    var choices = ['Attack', 'Heal'];
    // Affichage du nombre d'etage
    var NombreEtage = defineFight();
    console.log("etage ".concat(NombreEtage));
    var currentFight = 1;
    var coins = 12;
    //tant que le HP de character n'est pas a moins de 0
    // et qu'il n'a pas atteint le 10e etage alors cree l'enemy 
    while (character.hp > 0 && currentFight <= NombreEtage) {
        var enemy = currentFight % 10 === 0 ? (0, helpers_1.getBosse)() : (0, helpers_1.getEnnemie)(difficulty);
        // console.log(enemy);
        // console.log(level);
        // console.log(currentFight);
        afficheLife(character, enemy);
        // tant que character et enemy sont superieur à 0 alors
        while (character.hp > 0 && enemy.hp > 0) {
            console.log("".concat(blue, "******** Level ").concat(level, " ********").concat(reset));
            console.log("".concat(blue, "======== FIGHT ").concat(currentFight, " ========").concat(reset));
            afficheLife(character, enemy);
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
            afficheLife(character, enemy);
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
            console.log("Vous avez gagner ".concat(coins += 1, " points"));
        }
        currentFight += 1;
    }
}
exports.baseGame = baseGame;
exports.default = { baseGame: baseGame };