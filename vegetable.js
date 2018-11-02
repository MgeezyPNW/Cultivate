'use strict';

// Global Variables
var allPlants = [['Heirloom or Beefsteak Tomatoes', 'Sun', 'Big', 'img/heirloom-tomato.png'], ['Cucumbers', 'Sun', 'Big', 'img/cucumber.png'], ['Red Leaf Lettuce', 'Sun', 'Small', 'img/red-lettuce.png'], ['Sweet Bell Peppers', 'Sun', 'Small', 'img/sweet-bell-pepper.png'], ['Onions', 'Sun', 'Small', 'img/onion.png'], ['Italian Basil', 'Sun', 'Small', 'img/thai-basil.png'], ['Early Girl or Cherry Tomatoes', 'Mixed', 'Big', 'img/early-girl-tomato.png'], ['Snow Peas', 'Mixed', 'Big', 'img/snow-peas.png'], ['Green Leaf Lettuce', 'Mixed', 'Small', 'img/green-lettuce.png'], ['Banana Peppers', 'Mixed', 'Small', 'img/banana-pepper.png'], ['Celery', 'Mixed', 'Small', 'img/celery.png'],[' Italian Basil', 'Mixed', 'Small', 'img/italian-basil.png'], ['Cherry Tomatoes', 'Shade', 'Big', 'img/cherry-tomato.png'],['Snap or Snow Peas', 'Shade', 'Big', 'img/snap-pea.png'], ['Spring Mix Lettuce', 'Shade', 'Small', 'img/spring-mix-lettuce.png'], ['Beets', 'Shade', 'Small', 'img/beets.png'], ['Parisian Carrots', 'Shade', 'Small', 'img/carrot.png'], ['Chives', 'Shade', 'Small', 'img/chives.png']];
var allVegetables = [];
var bigSunPlants = [];
var bigMixedPlants = [];
var bigShadePlants = [];
var smallSunPlants = [];
var smallMixedPlants =[];
var smallShadePlants = [];
var retrievedGarden = [];

//Access DOM
var backLeft = document.getElementById('back_left');
var backRight = document.getElementById('back_right');
var frontLeft = document.getElementById('front_left');
var frontLeftCenter = document.getElementById('front_left_center');
var frontRightCenter = document.getElementById('front_right_center');
var frontRight = document.getElementById('front_right');
var vegetableList = document.getElementById('list');

function checkLocalStorage() {
  retrievedGarden = JSON.parse(localStorage.getItem('garden'));
}


function showGarden() {
  if (retrievedGarden[0].gardenType === 'sun') {
    backLeft.src = bigSunPlants[0].filepath;
    backLeft.alt = bigSunPlants[0].name;
    backLeft.title = bigSunPlants[0].name;
    backRight.src = bigSunPlants[1].filepath;
    backRight.alt = bigSunPlants[1].name;
    backRight.title = bigSunPlants[1].name;
    frontLeft.src = smallSunPlants[0].filepath;
    frontLeft.alt = smallSunPlants[0].name;
    frontLeft.title = smallSunPlants[0].name;
    frontLeftCenter.src = smallSunPlants[1].filepath;
    frontLeftCenter.alt = smallSunPlants[1].name;
    frontLeftCenter.title = smallSunPlants[1].name;
    frontRightCenter.src = smallSunPlants[2].filepath;
    frontRightCenter.alt = smallSunPlants[2].name;
    frontRightCenter.title = smallSunPlants[2].name;
    frontRight.src = smallSunPlants[3].filepath;
    frontRight.alt = smallSunPlants[3].name;
    frontRight.title = smallSunPlants[3].name;
  }
  if (retrievedGarden[0].gardenType === 'mixed') {
    backLeft.src = bigMixedPlants[0].filepath;
    backLeft.alt = bigMixedPlants[0].name;
    backLeft.title = bigMixedPlants[0].name;
    backRight.src = bigMixedPlants[1].filepath;
    backRight.alt = bigMixedPlants[1].name;
    backRight.title = bigMixedPlants[1].name;
    frontLeft.src = smallMixedPlants[0].filepath;
    frontLeft.alt = smallMixedPlants[0].name;
    frontLeft.title = smallMixedPlants[0].name;
    frontLeftCenter.src = smallMixedPlants[1].filepath;
    frontLeftCenter.alt = smallMixedPlants[1].name;
    frontLeftCenter.title = smallMixedPlants[1].name;
    frontRightCenter.src = smallMixedPlants[2].filepath;
    frontRightCenter.alt = smallMixedPlants[2].name;
    frontRightCenter.title = smallMixedPlants[2].name;
    frontRight.src = smallMixedPlants[3].filepath;
    frontRight.alt = smallMixedPlants[3].name;
    frontRight.title = smallMixedPlants[3].name;
  }
  if (retrievedGarden[0].gardenType === 'shade') {
    backLeft.src = bigShadePlants[0].filepath;
    backLeft.alt = bigShadePlants[0].name;
    backLeft.title = bigShadePlants[0].name;
    backRight.src = bigShadePlants[1].filepath;
    backRight.alt = bigShadePlants[1].name;
    backRight.title = bigShadePlants[1].name;
    frontLeft.src = smallShadePlants[0].filepath;
    frontLeft.alt = smallShadePlants[0].name;
    frontLeft.title = smallShadePlants[0].name;
    frontLeftCenter.src = smallShadePlants[1].filepath;
    frontLeftCenter.alt = smallShadePlants[1].name;
    frontLeftCenter.title = smallShadePlants[1].name;
    frontRightCenter.src = smallShadePlants[2].filepath;
    frontRightCenter.alt = smallShadePlants[2].name;
    frontRightCenter.title = smallShadePlants[2].name;
    frontRight.src = smallShadePlants[3].filepath;
    frontRight.alt = smallShadePlants[3].name;
    frontRight.title = smallShadePlants[3].name;
  }
}

function recommendLunch(){
  if (retrievedGarden[0].gardenType === 'sun' && retrievedGarden[0].lunchPreference === 'sandwich') {
    var itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigSunPlants[0].name}`;
    var itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallSunPlants[0].name}`;
    var itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallSunPlants[1].name}`;
  }
  if (retrievedGarden[0].gardenType === 'sun' && retrievedGarden[0].lunchPreference === 'pasta') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${smallSunPlants[1].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallSunPlants[2].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallSunPlants[3].name}`;
  }
  if (retrievedGarden[0].gardenType === 'sun' && retrievedGarden[0].lunchPreference === 'salad') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigSunPlants[0].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${bigSunPlants[1].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallSunPlants[0].name}`;
  }
  if (retrievedGarden[0].gardenType === 'sun' && retrievedGarden[0].lunchPreference === 'soup') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigSunPlants[0].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallSunPlants[2].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallSunPlants[3].name}`;
  }
  if (retrievedGarden[0].gardenType === 'mixed' && retrievedGarden[0].lunchPreference === 'sandwich') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigMixedPlants[0].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallMixedPlants[0].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallMixedPlants[1].name}`;
  }
  if (retrievedGarden[0].gardenType === 'mixed' && retrievedGarden[0].lunchPreference === 'pasta') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${smallMixedPlants[1].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallMixedPlants[2].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallMixedPlants[3].name}`;
  }
  if (retrievedGarden[0].gardenType === 'mixed' && retrievedGarden[0].lunchPreference === 'salad') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigMixedPlants[0].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${bigMixedPlants[1].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallMixedPlants[0].name}`;
  }
  if (retrievedGarden[0].gardenType === 'mixed' && retrievedGarden[0].lunchPreference === 'soup') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigMixedPlants[0].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallMixedPlants[2].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallMixedPlants[3].name}`;
  }
  if (retrievedGarden[0].gardenType === 'shade' && retrievedGarden[0].lunchPreference === 'sandwich') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigShadePlants[0].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallShadePlants[0].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallShadePlants[1].name}`;
  }
  if (retrievedGarden[0].gardenType === 'shade' && retrievedGarden[0].lunchPreference === 'pasta') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${smallShadePlants[1].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallShadePlants[2].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallShadePlants[3].name}`;
  }
  if (retrievedGarden[0].gardenType === 'shade' && retrievedGarden[0].lunchPreference === 'salad') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigShadePlants[0].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${bigShadePlants[1].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallShadePlants[0].name}`;
  }
  if (retrievedGarden[0].gardenType === 'shade' && retrievedGarden[0].lunchPreference === 'soup') {
    itemOne = document.getElementById('item-one');
    itemOne.textContent += `${bigShadePlants[0].name}`;
    itemTwo = document.getElementById('item-two');
    itemTwo.textContent += `${smallShadePlants[2].name}`;
    itemThree = document.getElementById('item-three');
    itemThree.textContent += `${smallShadePlants[3].name}`;
  }
}
function renderSun(){
  for (var i = 0; i < bigSunPlants.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = bigSunPlants[i].name;
    vegetableList.appendChild(liEl);
  }
  for (var j = 0; j < smallSunPlants.length; j++) {
    liEl = document.createElement('li');
    liEl.textContent = smallSunPlants[j].name;
    vegetableList.appendChild(liEl);
  }
}

function renderMixed(){
  for (var i = 0; i < bigMixedPlants.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = bigMixedPlants[i].name;
    vegetableList.appendChild(liEl);
  }
  for (var j = 0; j < smallMixedPlants.length; j++) {
    liEl = document.createElement('li');
    liEl.textContent = smallMixedPlants[j].name;
    vegetableList.appendChild(liEl);
  }
}

function renderShade(){
  for (var i = 0; i < bigShadePlants.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = bigShadePlants[i].name;
    vegetableList.appendChild(liEl);
  }
  for (var j = 0; j < smallShadePlants.length; j++) {
    liEl = document.createElement('li');
    liEl.textContent = smallShadePlants[j].name;
    vegetableList.appendChild(liEl);
  }
}




//render h1 greeting
function renderUserH1Tag(){
  var userH1 = document.getElementById('user-h1');
  userH1.textContent += `${retrievedGarden[0].name.toUpperCase()}'S GARDEN `;
}
//render user info in garden explanation
function renderUserName(){
  var userName = document.getElementById('user-name');
  userName.textContent += `${retrievedGarden[0].name}`;
}
// render user lunch recommendations
function renderLunch(){
  var userLunch = document.getElementById('user-lunch');
  userLunch.textContent += `${retrievedGarden[0].lunchPreference}`;
}


//render garden
function renderGarden() {
  showGarden(checkLocalStorage());
}

//render garden veggies that are used
function renderVeggieList(){
  if (retrievedGarden[0].gardenType === 'sun') {
    renderSun();
  }
  if (retrievedGarden[0].gardenType === 'mixed') {
    renderMixed();
  }
  if (retrievedGarden[0].gardenType === 'shade') {
    renderShade();
  }
}

function experienceLink(){
  console.log('IN FUNCTION');
  
  if (retrievedGarden[0].experienceLevel === 'beginner') {
    console.log('beg');

    //var a = document.getElementById('yourlinkId'); //or grab it by tagname etc
    // a.href = "somelink url"  --from stack overflow
    var expLink = document.getElementById('experience-link');
    expLink.href = 'resources.html#beginner';
  }
  if (retrievedGarden[0].experienceLevel === 'intermediate') {
    console.log('int');

 
    expLink = document.getElementById('experience-link');
    expLink.href = 'resources.html#intermediate';
  }
  if (retrievedGarden[0].experienceLevel === 'master') {
    console.log('master');
    
    expLink = document.getElementById('experience-link');
    expLink.href = 'resources.html#master';
  }
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

renderGarden();
renderUserH1Tag();
renderUserName();
renderLunch();
recommendLunch();
renderVeggieList();
experienceLink();



