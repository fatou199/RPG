"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hyrule_castle_1 = require("./hyrule_castle");
var helpers_1 = require("./helpers");
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
var player = (0, helpers_1.getPlayer)(); // Récupère un joueur => la rareté
var ennemie = (0, helpers_1.getEnnemie)(); // Récupère un ennemie => la rareté
var bosse = (0, helpers_1.getBosse)(); // Récupère un boss => la rareté
(0, hyrule_castle_1.default)(player);
