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
// var largeContainer = document.getElementById('container_large');
var back_left = document.getElementById('back_left');
var back_right = document.getElementById('back_right');
// var smallContainer = document.getElementById('container_small');
var front_left = document.getElementById('front_left');
var front_left_center = document.getElementById('front_left_center');
var front_right_center = document.getElementById('front_right_center');
var front_right = document.getElementById('front_right');
var tableList = document.getElementById('list');

function checkLocalStorage() {
  //create instances
  var retrievedGarden = JSON.parse(localStorage.getItem('garden'));
  // console.log('retrievedGarden', retrievedGarden);
  // retrievedGarden.forEach(function(gardenItem){
  var veggie = new Vegetable(retrievedGarden[0].name, retrievedGarden[0].gardenType, retrievedGarden[0].vegetableSize);
  return veggie;
  // })
}

function showGarden(vegetable) {
  console.log(vegetable);
  if (vegetable.sunPreference === 'Sun') {
    back_left.src = bigSunPlants[0].filepath;
    back_right.src = bigSunPlants[1].filepath;
    front_left.src = smallSunPlants[0].filepath;
    front_left_center.src = smallSunPlants[1].filepath;
    front_right_center.src = smallSunPlants[2].filepath;
    front_right.src = smallSunPlants[3].filepath;
  }
  if (vegetable.sunPreference === 'mixed') {
    back_left.src = bigMixedPlants[0].filepath;
    back_right.src = bigMixedPlants[1].filepath;
    front_left.src = smallMixedPlants[0].filepath;
    front_left_center.src = smallMixedPlants[1].filepath;
    front_right_center.src = smallMixedPlants[2].filepath;
    front_right.src = smallMixedPlants[3].filepath;
  }
  if (vegetable.sunPreference === 'Shade') {
    back_left.src = bigShadePlants[0].filepath;
    back_right.src = bigShadePlants[1].filepath;
    front_left.src = smallShadePlants[0].filepath;
    front_left_center.src = smallShadePlants[1].filepath;
    front_right_center.src = smallShadePlants[2].filepath;
    front_right.src = smallShadePlants[3].filepath;
  }
}
//if garden type is sunny and vegetable size is large, do this
// if (this.vegetableSize === 'Big' && this.sunPreference === 'Sun') {
// back_left.src = bigSunPlants[0].filepath;
// back_right.src = bigSunPlants[1].filepath;
// } else if (this.vegetableSize === 'Big' && this.sunPreference === 'Mixed') {
//   //if garden type is shady and veg size is big, do this
// back_left.src = bigMixedPlants[0].filepath;
// back_right.src = bigMixedPlants[1].filepath;
// } else {
//   //if gardentype is mixed and veg size is big, do this
// back_left.src = bigShadePlants[0].filepath;
// back_right.src = bigShadePlants[1].filepath;
// }

// //if garden type is sunny and veg size is small, do this
// if(this.vegetableSize === 'Small' && this.sunPreference === 'Sun') {
// front_left.src = smallSunPlants[0].filepath;
// front_left_center.src = smallSunPlants[1].filepath;
// front_right_center.src = smallSunPlants[2].filepath;
// front_right.src = smallSunPlants[3].filepath;
// } else if (this.vegetableSize === 'Small' && this.sunPreference === 'Mixed'){
//   //if garden type is shady and veg size is small, do this
// front_left.src = smallMixedPlants[0].filepath;
// front_left_center.src = smallMixedPlants[1].filepath;
// front_right_center.src = smallMixedPlants[2].filepath;
// front_right.src = smallMixedPlants[3].filepath;
// } else {
//   //if garden type is mixed and veg size is small, do this
// front_left.src = smallShadePlants[0].filepath;
// front_left_center.src = smallShadePlants[1].filepath;
// front_right_center.src = smallShadePlants[2].filepath;
// front_right.src = smallShadePlants[3].filepath;
// }
// }

//render garden
function renderGarden() {
  showGarden(checkLocalStorage());
}

function Vegetable(name, sunPreference, vegetableSize) {
  this.name = name;
  this.sunPreference = sunPreference;
  this.vegetableSize = vegetableSize;
  this.filepath = `img/${name}.jpg`;
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



for (var i = 0; i < allPlants.length; i++) {
  new Vegetable(allPlants[i][0], allPlants[i][1], allPlants[i][2]);
}

for (var j = 0; j < allVegetables.length; j++) {
  var liEl = document.createElement('li');
  liEl.textContent = allVegetables[j].name;
  tableList.appendChild(liEl);
}

renderGarden();


