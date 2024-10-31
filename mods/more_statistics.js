"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hyrule_castle_1 = require("./hyrule_castle");
var helpers_1 = require("./helpers");
var player = (0, helpers_1.getPlayer)(); // Récupère un joueur => la rareté
var ennemie = (0, helpers_1.getEnnemie)(1); // Récupère un ennemie => la rareté
var bosse = (0, helpers_1.getBosse)(); // Récupère un boss => la rareté
(0, hyrule_castle_1.startGame)();
