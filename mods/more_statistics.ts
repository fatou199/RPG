import { startGame } from './hyrule_castle';
import { getPlayer, getEnnemie, getBosse } from './helpers';


const player = getPlayer(); // Récupère un joueur => la rareté
const ennemie = getEnnemie(1); // Récupère un ennemie => la rareté
const bosse = getBosse(); // Récupère un boss => la rareté

startGame();