'use strict';

// Global Variables 
var allVegetables = [];
var allPlants = [['tomato', 'mixed', 'big'], ['cucumber', 'sun', 'big'], ['lettuce', 'sun', 'small'], ['pepper', 'sun', 'small'], ['onions', 'sun', 'small'], ['herbs', 'mixed', 'small'], ['peas', 'shade', 'big'], ['beets', 'shade', 'small'], ['celery', 'mixed', 'small'], ['cherry tomatos', 'sun', 'big']];

function Vegetable(name, sunPreference, vegetableSize) {
  this.name = name;
  this.sunPreference = sunPreference;
  this.vegetableSize = vegetableSize;
  allVegetables.push(this);
}

for (var i = 0; i < allPlants.length; i++) {
  new Vegetable(allPlants[i][0], allPlants[i][1], allPlants[i][2]); 
}
