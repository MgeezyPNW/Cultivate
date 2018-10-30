'use strict';

// Global Variables
var allPlants = [['Heirloom/Beefsteak Tomatoes', 'Sun', 'Big'], ['Cucumbers', 'Sun', 'Big'], ['Red Leaf Lettuce', 'Sun', 'Small'], ['Sweet Bell Peppers', 'Sun', 'Small'], ['Onions', 'Sun', 'Small'], ['Basil', 'Sun', 'Small'], ['Early Girl/Cherry Tomatoes', 'Mixed', 'Big'], ['Snow Peas', 'Mixed', 'Big'], ['Green Leaf Lettuce', 'Mixed', 'Small'], ['Italian Basil', 'Mixed', 'Small'], ['Celery', 'Mixed', 'Small'],['Banana Peppers', 'Mixed', 'Small'], ['Cherry Tomatoes', 'Shade', 'Big'],['Snow/Snap Peas', 'Shade', 'Big'], ['Beets', 'Shade', 'Small'], ['Parisian Carrots', 'Shade', 'Small'], ['Spring Mix Lettuce', 'Shade', 'Small'], ['Chives', 'Shade', 'Small']];
var allVegetables = [];
var bigSunPlants = [];
var bigMixedPlants = [];
var bigShadePlants = [];
var smallSunPlants = [];
var smallMixedPlants =[];
var smallShadePlants = [];

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

function checkLocalStorage() {
  if (localStorage.garden) {
  //create instances
    var retrievedGarden = JSON.parse(localStorage.getItem('garden'));
    console.log('retrievedGarden', retrievedGarden);
    retrievedGarden.forEach(function(gardenItem){
      new Vegetable(gardenItem.name, gardenItem.sunPreference, gardenItem.vegetableSize);
    })
  }
}

function Vegetable(name, sunPreference, vegetableSize) {
  this.name = name;
  this.sunPreference = sunPreference;
  this.vegetableSize = vegetableSize;
  allVegetables.push(this);
  if (this.vegetableSize === 'Big' && this.sunPreference === 'Sun') {
    bigSunPlants.push(this);
  }
  if (this.vegetableSize === 'Big' && this.sunPreference === 'Mixed') {
    bigMixedPlants.push(this);
  }
  if (this.vegetableSize === 'Big' && this.sunPreference === 'Shade') {
    bigShadePlants.push(this);
  }
  if (this.vegetableSize === 'Small' && this.sunPreference === 'Sun') {
    smallSunPlants.push(this);
  }
  if (this.vegetableSize === 'Small' && this.sunPreference === 'Mixed') {
    smallMixedPlants.push(this);
  }
  if (this.vegetableSize === 'Small' && this.sunPreference === 'Shade') {
    smallShadePlants.push(this);
  }
}



// for (var i = 0; i < allPlants.length; i++) {
//   new Vegetable(allPlants[i][0], allPlants[i][1], allPlants[i][2]);
// }

// for (var j = 0; j < allVegetables.length; j++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = allVegetables[j].name;
//   tableList.appendChild(liEl);
// }



