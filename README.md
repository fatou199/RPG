
# TypeScript

[![GitHub Actions CI](https://github.com/microsoft/TypeScript/workflows/CI/badge.svg)](https://github.com/microsoft/TypeScript/actions?query=workflow%3ACI)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/microsoft/TypeScript/badge)](https://securityscorecards.dev/viewer/?uri=github.com/microsoft/TypeScript)


[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](https://www.typescriptlang.org/play/), and stay up to date via [our blog](https://blogs.msdn.microsoft.com/typescript) and [Twitter account](https://twitter.com/typescript).

Find others who are using TypeScript at [our community page](https://www.typescriptlang.org/community/).

## Installing

For the latest stable version:

```bash
npm install -D typescript
```

# RPG
Le jeu est un RPG au tour par tour. Vous incarnez un personnage qui défie le Château d'Hyrule, une tour composée de 10 étages. A chaque étage vous rencontrez un ennemi et au dernier étage, vous défiez le Boss.
Pour l'instant, votre personnage sera Link. Il possède 60 points de vie (PV) maximum et 15 de force (FOR).
A chaque combat vous affronterez un Bokoblin qui possède 30 PV et 5 FOR.
Pour le boss du 10ème étage, vous devrez vaincre "Ganon" qui aura 150 PV et 20 FOR.
Pendant chaque combat, vous avez le choix entre "Attaquer" et "Soigner" :

"Attaquer" inflige des dégâts à l'adversaire égaux à la statistique FOR du personnage
"Soigner" soignera le personnage de la moitié de ses PV maximum
Après le tour de votre personnage, l'adversaire attaque et inflige des dégâts égaux à sa FOR.
Lorsque les PV de l'adversaire tombent à 0, il est vaincu et le personnage monte d'un étage supplémentaire.
Lorsque les PV du personnage tombent à 0, il meurt et le jeu s'arrête.
Si le boss est vaincu, le jeu s'arrête avec un message de félicitations.
