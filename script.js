'use strict';

// Data needed for a later exercise
const flights =
  `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30`;

// Data needed for first part of the sections
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 Enhanced Object Literals
  openingHours,

  orderDelivery: function ({
    starterIndex = 3,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`;
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//=================== WORKING WITH STRINGS = Part 3 ===============
// Other String Methods

//============== Split Method ============
// console.log(('a+very+nice+string').split('+')); // ['a', 'very', 'nice', 'string']

//  Converts Strings into Arrays
// console.log('Jonas Schmedtmann'.split(' ')); //['Jonas', 'Schmedtmann']

// Destructure Strings into Arrays
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' '); //Jonas Schmedtmann

//============ Join Method ==============
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// Exercise
const capitalName = function (name) {
  const names = name.split(' ');
  // console.log(names);
  const newNames = [];

  for (const n of names) {
    newNames.push(n[0].toUpperCase() + n.slice(1));
  }
  // console.log(newNames.join(' '));
};
capitalName('jessica ann smith davis');
capitalName('jonas schmedtmann');
capitalName('dianna clark');

//======= Padding A String Method ==========
// It means adding a number of characters to a string, until...
// ...the string has it's desired length.

const message = 'Go to gate 23';
// console.log(message.padStart(20, '*').padEnd(30, '+'));
// console.log('Schmedtmann'.padStart(20, '+').padEnd(30, '^'));

// Example

const maskedCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
// console.log(maskedCreditCard(2398445));
// console.log(maskedCreditCard(30520898644085));
// console.log(maskedCreditCard('0598934-7643835759495245'));

//==== Repeat Method ======
const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(7));

const planesInLine = function (n) {
  // console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(3);
planesInLine(5);
planesInLine(12);

//////////////////////////////////////////////////////
//=================== WORKING WITH STRINGS = Part 2 ===============
const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix Capitalisation in Name

const passenger = 'jOnAs sChmeDg'; // Jonas
const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Comparing email

const email = 'hello@gmail.io';
const loginEmail = ' HeLLo@gmail.IO \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
//
const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
// console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23';

// console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate')); //Using Regualar Expression to replace all at once

// Booleans

const plane = 'Airbus A320';
// console.log(plane.includes('A320'));
// console.log(plane.includes('B737'));
// console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  // console.log(`Part of the new Airbus Family`);
}

// Practice Exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    // console.log(`You are NOT allowed on board`);
  } else {
    // console.log(`Welcome aboard!`);
  }
};

checkBaggage(`I have a laptop, some Food and a pocket knife`);
checkBaggage(`Socks and camera`);
checkBaggage('Got some snacks and a gun for protection');

//////////////////////////////////////////////////
//=================== WORKING WITH STRINGS = Part 1 ===============

// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);

// console.log(airline.length);
// console.log('A320'.length);

// Some String Methods

// console.log(airline.indexOf('r'));
// console.log(airline.indexOf('i'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));

// console.log(airline.slice(-2));
// console.log(airline.slice(2,-3));

// Example
// const checkMiddleSeat = function(seat) {
//B and E are the middle seat

// const s = seat.slice(-1);

//   if (s === "B" || s === "E") console.log('You got the middle seat');
//   else console.log('You got Lucky!');
// }

// checkMiddleSeat('24E');
// checkMiddleSeat('24645r');
// checkMiddleSeat('244re');
// checkMiddleSeat('7565B');
// checkMiddleSeat('582E');

///////////////////////////////////////////////////
// ================ MAPS =====================
const rest = new Map();

rest.set(1, 'John Boyega');
// console.log(rest.set(2, 'Lucas Henderson'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// console.log(rest.get(true));

const time = 2;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Different Map Methods
// console.log(rest.has('categories'));
rest.delete(2);
// console.log(rest);

// Pushing an array into a map
const arr = [1, 2];
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//========== MAP ITERATION =========

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);
// console.log(question);

// ====== Convert Object to Map ======

// console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// Quiz App
// console.log(question.get('question'));
// Iteration of Map
for (const [key, value] of question) {
  // if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//======= Convert map to array =======
// console.log([...question]); //Automatically means 'question.entries()
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Convert array to Set
// const newSets = [...new Set(question)]

// Convert Object to Map
//  const hourMap1 = new Map(Object.entries(openingHours));

// Convert array to map
//  const newMap = new Map(...variable.entries());

//  Convert array to Object
//  Convert Set to array
//  Convert Map to object

///////////////////////////////////////////////////
//=================== SETS ===================
// Sets is a collection of unique values

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet); // {'Pasta', 'Pizza', 'Risotto'}
// console.log(new Set('Jonas')); //'J','o','n','a','s'
// console.log(orderSet.size); //3
// console.log(orderSet.has('Pizza')); //true
// console.log(orderSet.has('bread')); //false
// orderSet.add('Garlic bread');
// orderSet.add('Garlic bread');
// orderSet.delete('delete');
// orderSet.clear(); // Delete all the set elements

// console.log(orderSet);

// for(const order of orderSet) console.log(order);

// Example
// const staff = ['Waiter', 'Chef', 'Manager', 'Sous Chef', 'Waiter', 'Manager'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set( ['Waiter', 'Chef', 'Manager', 'Sous Chef', 'Waiter', 'Manager']).size);
// console.log(new Set('JonasSchmedtmann').size);

///////////////////////////////////
//=====================  LOOPING OBJECTS (KEYS, VALUES AND ENTRIES)=====================

//====== Looping Over Propertiy Names (Object Keys) =============

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day} `;
// }
// console.log(openStr);

//============ Looping Over Property values (Object Values) =============

// const values = Object.values(openingHours);
// console.log(values);
// Looping over keys works the same way as the object

//======= Looping Over Property Names and Values (keys and values using Object Entries) =======
// In arrays, when using Object Entries, you dont pass in the parameter.Entries
// In Object, you pass in the parameter.

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
// console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

//////////////////////////////////////////////////
//================= OPTIONAL CHAINING(?.) =================

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

//============ WITH OPTIONAL CHAINING ============

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
// console.log(day);
// const open = restaurant.openingHours[day]?.open ?? 'closed';
// console.log(`On ${day}, we open at ${open}`);
// }

//======== Optional Chaining on Methods ========
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// ======== Arrays ============
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
//  console.log(users[0]?.name ?? 'User array empty');

////////////////////////////////////////////////
//==================== LOOPING ARRAYS: THE FOR-OF LOOP ====================
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
// console.log(`${i}: ${el}`);
// }

//////////////////////////////////////////////////////
//============== LOGICAL ASSIGNMENT OPERATOR ==============
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

//////////////////////////////////////////////////////
// ============ LOGICAL ASSIGNMENT OPERATOR ==============

// OR Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 15;

// Nullish Operator (NULL AND UNDEFINED)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 15;

// AND Aassignment Operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////
//========== THE NULLISH COALESCING OPERATOR (??) ==========

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 15;
// console.log(guest);

// NULLISH OPERATOR works with only NULL and UNDEFINED (NOT 0 or '');
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);// 0

/////////////////////////////////////////
//================== SHORT CIRCUITING (&& AND ||) ==================

// OR Operators will return the first truthy value of the operands, or the last falsy value if all of them are false.
// AND operators will return the first falsy value of the operands, or the last truthy value if all if them are true.

// OR oprerator deals with Truthy Values
// console.log('======== OR =======')
// console.log(3 || 'Jonas'); //3
// console.log('' || null); //null
// console.log(0 || 'Jonas'); //Jonas
// console.log(undefined || 34); //34

// NOTE: 0, UNDEFINED, NULL, FALSE and '', they are all FALSY VALUES
// While NUMBER, STRINGS and TRUE, are all TRUTHY VALUES

// console.log(undefined || 0 || null || 'Jonas' || 23); //Jonas

// restaurant.numGuests = 13
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 15;
// console.log(guest2);

// console.log('========== AND =========' );
// AND Operator works in opposite of or operator, it gives preference to the falsy values

// console.log(0 && "Jonas");
// console.log(7 && 'Jonas');

// console.log(23 && true && 'Jonas' && "Nick" && 0);

// // Practical Examples

// if(restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// console.log(restaurant.orderPizza);

///////////////////////////////////////////////////////////////////////////////

// IN SUMMARY, SPREAD OPERATORS ARE USED IN VALUES SEPERATED BY COMMAS, WHILE
// REST OPERATORS ARE USED IN VARIABLE NAMES SEPERATED BY COMMAS

/////////////////////////////////////////////
//======================= REST Patterns and Parameter =======================

// 1) Destructuring
// SPREAD because of right side of =
// const arr = [1, 2, ...[3, 4]];

// REST because of left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [Pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, otherFood);

// Objects
//  const {sat, ...weekdays} = restaurant.openingHours;
//  console.log(weekdays);

//  2) Functions
// const add = function(...numbers){
//   let sum = 0;
//   for(let i=0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }

// add(2,3);
// add(4,3,6,5);
// add(1,5,8,6,9,3,5);

// const x = [23,5,8];
// (add(...x));

// restaurant.orderPizza('mushrooms', 'cheese', 'onions', 'garlic', 'vegetable');

///////////////////////////////////////////////
//==================== Spread Operator ====================

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(...newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...menu);

// Iterables are arrays, strings, maps and sets, NOT objects.
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// Real World Example
// const ingredients = [
// prompt("Let's make pasta! Ingredient !?"),
// prompt('Ingredient 2?'),
// prompt('Ingrdient 3?'),
// ];
// console.log(...ingredients);
// restaurant.orderPasta(...ingredients);

//==================== Objects ===================

// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Dominico Rodiguez'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}
// restaurantCopy.names= 'Matado Bild';

// console.log(restaurantCopy.names);
// console.log(restaurant.names);

////////////////////////////////////
// If you have to write a function in which the numbers of parameter is unknown, you can write it like this:
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,

// })

//////////////////////////////////////////////
//====================== Object Destructuring ======================

// const { names, openingHours, categories } = restaurant;
// console.log(names, openingHours, categories);

// Changing Object Property Names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Setting a Default Value on Object
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// Mutating Variables while Destructuring Objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/////////////////////////////////////////////
//======================= Destructuring Arrays =======================

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// To Switch the elements in the array manually
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// Switching elements using Destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Working with Nested Destructuring Array
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default Values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);
