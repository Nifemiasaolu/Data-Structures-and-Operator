'use strict';

// Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5.
// const {
//     team1: teamBayern,
//     x: draw,
//     team2: teamDortsmund
// } = game.odds

// console.log(teamBayern, draw, teamDortsmund);

// 6.
// const printGoals = function(...players) {
// console.log(`${players.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// 7)
// teamBayern < teamDortsmund && console.log('Team 1 is more likely to win');
// teamBayern > teamDortsmund && console.log('Team 2 is more likely to win');

// Code Challenge #2

const gameScored = Object.entries(game.scored);
console.log(gameScored);

for (const [i, player] of gameScored) {
  console.log(`Goal ${i}: ${player}`);
}

///////////
const avgOdds = Object.values(game.odds);
console.log(avgOdds);

// const average = (a, b, c) => {
//   return avgOdds / 3;
// };
// console.log(average(avgOdds));


// for (const avg of avgOdds) {
  // console.log(`${avg} / 3`);
// }
/////////////

for(const [key, value] of avgOdds) {
  console.log(`Odd of victory ${key}: ${value}`);
}
