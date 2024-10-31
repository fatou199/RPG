interface Character {
  name: string;
  hp: number;
  str: number;
  maxHp: number
}

interface Enemy {
  name: string;
  hp: number;
  str: number;
  maxHp: number;

}

export { Character, Enemy };
