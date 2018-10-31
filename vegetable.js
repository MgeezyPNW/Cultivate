'use strict';

// Global Variables
var allPlants = [['Heirloom/Beefsteak Tomatoes', 'Sun', 'Big', 'img/heirloom-tomato.png'], ['Cucumbers', 'Sun', 'Big', 'img/cucumber.png'], ['Red Leaf Lettuce', 'Sun', 'Small', 'img/red-lettuce.png'], ['Sweet Bell Peppers', 'Sun', 'Small', 'img/sweet-bell-pepper.png'], ['Onions', 'Sun', 'Small', 'img/onion.png'], ['Basil', 'Sun', 'Small', 'img/thai-basil.png'], ['Early Girl/Cherry Tomatoes', 'Mixed', 'Big', 'img/early-girl-tomato.png'], ['Snow Peas', 'Mixed', 'Big', 'img/snow-peas.png'], ['Green Leaf Lettuce', 'Mixed', 'Small', 'img/green-lettuce.png'], ['Italian Basil', 'Mixed', 'Small', 'img/italian-basil.png'], ['Celery', 'Mixed', 'Small', 'img/celery.png'],['Banana Peppers', 'Mixed', 'Small', 'img/banana-pepper.png'], ['Cherry Tomatoes', 'Shade', 'Big', 'img/cherry-tomato.png'],['Snap/Snow Peas', 'Shade', 'Big', 'img/snap-pea.png'], ['Beets', 'Shade', 'Small', 'img/beets.png'], ['Parisian Carrots', 'Shade', 'Small', 'img/carrot.png'], ['Spring Mix Lettuce', 'Shade', 'Small', 'img/spring-mix-lettuce.png'], ['Chives', 'Shade', 'Small', 'img/chives.png']];
var allVegetables = [];
var bigSunPlants = [];
var bigMixedPlants = [];
var bigShadePlants = [];
var smallSunPlants = [];
var smallMixedPlants =[];
var smallShadePlants = [];
var retrievedGarden = [];

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
  retrievedGarden = JSON.parse(localStorage.getItem('garden'));

  // garden.push(retrievedGarden);
  // console.log('garden',garden);
  // return retrievedGarden;
  console.log('retrievedGarden', retrievedGarden);
  // garden = retrievedGarden;
  // retrievedGarden.forEach(function(gardenItem){

  // var garden = new Vegetable(retrievedGarden[0].name, retrievedGarden[0].gardenType, retrievedGarden[0].vegetableSize);
  // return garden;

  // })
}


function showGarden() {
  // console.log(vegetable);
  if (retrievedGarden[0].gardenType === 'sun') {
    back_left.src = bigSunPlants[0].filepath;
    back_right.src = bigSunPlants[1].filepath;
    front_left.src = smallSunPlants[0].filepath;
    front_left_center.src = smallSunPlants[1].filepath;
    front_right_center.src = smallSunPlants[2].filepath;
    front_right.src = smallSunPlants[3].filepath;
  }
  if (retrievedGarden[0].gardenType === 'mixed') {
    back_left.src = bigMixedPlants[0].filepath;
    back_right.src = bigMixedPlants[1].filepath;
    front_left.src = smallMixedPlants[0].filepath;
    front_left_center.src = smallMixedPlants[1].filepath;
    front_right_center.src = smallMixedPlants[2].filepath;
    front_right.src = smallMixedPlants[3].filepath;
  }
  if (retrievedGarden[0].gardenType === 'shade') {
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

function Vegetable(name, sunPreference, vegetableSize, filepath) {
  this.name = name;
  this.sunPreference = sunPreference;
  this.vegetableSize = vegetableSize;
  this.filepath = filepath;
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
  new Vegetable(allPlants[i][0], allPlants[i][1], allPlants[i][2], allPlants[i][3]);
}

for (var j = 0; j < allVegetables.length; j++) {
  var liEl = document.createElement('li');
  liEl.textContent = allVegetables[j].name;
  tableList.appendChild(liEl);
}

renderGarden();


