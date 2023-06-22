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

///////////////////////
// Code Challenge #2

// 1.
const gameScored = game.scored.entries(); //Array Entry
// console.log(gameScored);
for (const [i, player] of gameScored) {
  // console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let average = 0;

const odds = Object.values(game.odds);
for (const odd of odds) 
average += odd;
average /= odds.length;
// console.log(average);

// 3.
const gameOdds = Object.entries(game.odds);  //Object Entry

for(const [team, odd] of gameOdds) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  // console.log(`Odd of ${teamStr}:  ${odd}`);
}

// Code Challenge #3 

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);

  const events = [...new Set(gameEvents.values())];
  // console.log(events);

  gameEvents.delete(64);
  // console.log(gameEvents);

for(const [i, value] of gameEvents) {
  const half = (i <= 45) ? `FIRST` : `SECOND`
//  console.log(`[${half} HALF] ${i}: ${value}`);//
}