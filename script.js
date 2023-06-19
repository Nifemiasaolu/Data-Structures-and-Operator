'use strict';

// Data needed for a later exercise
// const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const hours = {
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
  // ES6 Enhanced Object Literals
  hours,

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

//////////////////////////////////////////////////
//================= OPTIONAL CHAINING(?.) =================



////////////////////////////////////////////////
//==================== LOOPING ARRAYS: THE FOR-OF LOOP ====================
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const [i, el] of menu.entries()) {
  // console.log(`${i}: ${el}`);
}


//////////////////////////////////////////////////////
//============== LOGICAL ASSIGNMENT OPERATOR ==============
const rest1 = {
  name: 'Capri',
  numGuests: 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',

};



//////////////////////////////////////////////////////
// ============ LOGICAL ASSIGNMENT OPERATOR ==============

// OR Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 15;

// Nullish Operator (NULL AND UNDEFINED)
rest1.numGuests ??= 10;
rest2.numGuests ??= 15;

// AND Aassignment Operator 
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

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
