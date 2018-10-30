'use strict';

// Global Variables 
var allVegetables = [];
var allPlants = [['Heirloom/Beefsteak Tomatoes', 'Sun', 'Big'], ['Cucumbers', 'Sun', 'Big'], ['Red Leaf Lettuce', 'Sun', 'Small'], ['Sweet Bell Peppers', 'Sun', 'Small'], ['Onions', 'Sun', 'Small'], ['Basil', 'Sun', 'Small'], ['Early Girl/Cherry Tomatoes', 'Mixed', 'Big'], ['Snow Peas', 'Mixed', 'Big'], ['Green Leaf Lettuce', 'Mixed', 'Small'], ['Italian Basil', 'Mixed', 'Small'], ['Celery', 'Mixed', 'Small'],['Banana Peppers', 'Mixed', 'Small'], ['Cherry Tomatoes', 'Shade', 'Big'],['Snow/Snap Peas', 'Shade', 'Big'], ['Beets', 'Shade', 'Small'], ['Parisian Carrots', 'Shade', 'Small'], ['Spring Mix Lettuce', 'Shade', 'Small'], ['Chives', 'Shade', 'Small']];



//Access DOM
var largeContainer = document.getElementById('container_large');
var back_left = document.getElementById('back_left');
var back_right = document.getElementById('back_right');
var smallContainer = document.getElementById('container_small');
var front_left = document.getElementById('front_left');
var front_left_center = document.getElementById('front_left_center');
var front_right_center = document.getElementById('front_right_center');
var front_right = document.getElementById('front_right');
var tableList = document.getElementById('list');


function Vegetable(name, sunPreference, vegetableSize) {
  this.name = name;
  this.sunPreference = sunPreference;
  this.vegetableSize = vegetableSize;
  allVegetables.push(this);
}

for (var i = 0; i < allPlants.length; i++) {
  new Vegetable(allPlants[i][0], allPlants[i][1], allPlants[i][2]); 
}

for (var j = 0; j < allVegetables.length; j++) {
  var liEl = document.createElement('li');
  liEl.textContent = allVegetables[j].name;
  tableList.appendChild(liEl);
}



