'use strict';

// reduce

let itemPrices = [4, 5, 1.5, 2.5, 9, 10.05];
let total = 0;
for (let i = 0; i < itemPrices.length; i++) {
  let price = itemPrices[i];
  total += price;
}
console.log(total); // 32.05

let retotal = itemPrices.reduce(function (total, price) {
  console.log(`total: ${total}`);
  console.log(`price: ${price}`);
  return total + price;
}, 0);
console.log(retotal); // 32.05

// sort

let animals = [
  {species: 'Hog', weight: 204 },
  {species: 'Moose', weight: 620 },
  {species: 'Goose', weight: 9 },
  {species: 'Raccoon', weight: 12 }
];


// sort animals by weight
let sorted = [];
for (let i = 0; i < animals.length; i++) {
  let added = false;
  // step through the list of sorted animals one by one
  for (let j = 0; j < sorted.length && !added; j++) {
    if (animals[i].weight < sorted[j].weight) {
      // add the animal in the right spot in the sorted array
      sorted.splice(j, 0, animals[i]);
      added = true;
    }
  }
  if (!added) {
    sorted.push(animals[i]);
  }
}
console.log(sorted);

// suing .sort method

animals.sort(function (firstAnimal, secondAnimal) {
  if (firstAnimal.weight < secondAnimal.weight) {
    return -1;
  } else {
    return 1;
  }
});
console.log(animals);

// sort expects you to return a negative number for items that should be earlier in the list, 
// and a positive number for items that should be later in the list

// sort changes the array in place - it doesn't return a new array, 
// it mutates the existing array. animals changed its order in the above example.

// sort has a default behavior if you don't pass in a function, but it often isn't what you want.

