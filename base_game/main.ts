import baseGame from './hyrule_castle';
import { Character, Enemy } from './interface';
import { getPlayer, getEnnemie, getBosse } from './helpers';

// const character: Character = {
//     name: "Zelda",
//     hp: 60,
//     str: 15,
//     maxHp: 60,
// }

// const enemy: Enemy = {
//     name: "Bokoblin",
//     hp: 30,
//     str: 5,
//     maxHp: 30,

// }

const player = getPlayer(); // Récupère un joueur => la rareté
const ennemie = getEnnemie(); // Récupère un ennemie => la rareté
const bosse = getBosse(); // Récupère un boss => la rareté

baseGame(player);
