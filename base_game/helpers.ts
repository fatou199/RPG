import { Character, Enemy } from './interface';

const fs = require('fs');

// Lecture des json
const playersData = fs.readFileSync('./jsonfiles/players.json', 'utf-8');
const ennemiesData = fs.readFileSync('./jsonfiles/ennemies.json', 'utf-8');
const bossesData = fs.readFileSync('./jsonfiles/bosses.json', 'utf-8');

const jsonPlayers = JSON.parse(playersData);
const jsonEnnemies = JSON.parse(ennemiesData);
const jsonBosses = JSON.parse(bossesData);

// Calcul
let randomRarity:number = Math.ceil(Math.random() * 100 + 1);
// console.log(randomRarity);

if (randomRarity > 50 && randomRarity <= 100) {
  randomRarity = 1;
} else if (randomRarity > 20 && randomRarity <= 50) {
  randomRarity = 2;
} else if (randomRarity > 5 && randomRarity <= 20) {
  randomRarity = 3;
} else if (randomRarity > 1 && randomRarity <= 5) {
  randomRarity = 4;
} else if (randomRarity === 1) {
  randomRarity = 5;
} else {
  randomRarity = 0;
}

// Fonction pour recuperer le joueur grace a sa rareté
function getPlayer() {
  // console.log(`La rarity ${randomRarity}`);

  const tab: Character[] = [];
  for (let i = 0; i < jsonPlayers.length; i += 1) {
    if (jsonPlayers[i].rarity === randomRarity) {
      tab.push(jsonPlayers[i]);
    }
    // console.log(`le jsonplayer ${JSON.stringify(jsonPlayer[i])}`);
  }

  // console.log("=========== table ========");
  // console.log(tab.length);
  // console.log(`Le messsage ${tab.length}`);
  // console.log("=========== fin ========");

  const randomPlayers = Math.floor(Math.random() * tab.length);
  // console.log("=========== randomPlayer ========");
  // console.log(randomPlayers);
  // console.log("=========== fin randomPlayer ========");

  return {
    name: tab[randomPlayers].name,
    hp: tab[randomPlayers].hp,
    str: tab[randomPlayers].str,
    maxHp: tab[randomPlayers].hp,
  };
}

// Fonction pour recuperer l'ennemie grace a sa rareté
function getEnnemie() {
  // console.log(`La rarity ${randomRarity}`);

  const tab: Enemy[] = [];
  for (let i = 0; i < jsonEnnemies.length; i += 1) {
    if (jsonEnnemies[i].rarity === randomRarity) {
      tab.push(jsonEnnemies[i]);
    }
    // console.log(`le jsonplayer ${JSON.stringify(jsonPlayer[i])}`);
  }

  // console.log("=========== table ========");
  // console.log(tab.length);
  // console.log(`Le messsage ${tab.length}`);
  // console.log("=========== fin ========");

  const randomEnnemies = Math.floor(Math.random() * tab.length);
  // console.log("=========== randomPlayer ========");
  // console.log(randomEnnemies);
  // console.log("=========== fin randomPlayer ========");
  return {
    name: tab[randomEnnemies].name,
    hp: tab[randomEnnemies].hp,
    str: tab[randomEnnemies].str,
    maxHp: tab[randomEnnemies].hp,
  };
}

// Fonction pour recuperer le boss grace a sa rareté
function getBosse() {
  // console.log(`La rarity ${randomRarity}`);

  const tab: Enemy[] = [];
  for (let i = 0; i < jsonBosses.length; i += 1) {
    if (jsonBosses[i].rarity === randomRarity) {
      tab.push(jsonBosses[i]);
    }
    // console.log(`le jsonplayer ${JSON.stringify(jsonPlayer[i])}`);
  }

  // console.log("=========== table ========");
  // console.log(tab.length);
  // console.log(`Le messsage ${tab.length}`);
  // console.log("=========== fin ========");

  const randomBosses = Math.floor(Math.random() * tab.length);
  // console.log("=========== randomPlayer ========");
  // console.log(randomBosses);
  // console.log("=========== fin randomPlayer ========");

  return {
    name: tab[randomBosses].name,
    hp: tab[randomBosses].hp,
    str: tab[randomBosses].str,
    maxHp: tab[randomBosses].hp,
  };
}

export { getPlayer, getEnnemie, getBosse };
