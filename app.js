'use stirct';

var userGarden = [];
var survey = document.getElementById('survey');


function Garden(name, gardenType, lunchPreference, experienceLevel){
  this.name = name;
  this.gardenType = gardenType;
  this.lunchPreference = lunchPreference;
  this.experienceLevel = experienceLevel;
  userGarden.push(this);
}
//example:  cunstructor working
// new Garden('Ryan', 'sun', 'sandwich', 'beginner');
function addToLocalStorage() {
  var storedGarden = JSON.stringify(userGarden);
  localStorage.setItem('garden', storedGarden);
}
//create instance:: working ahead
//starting on eventlistener below
survey.addEventListener('submit', letsGetGrowing);

function letsGetGrowing(event){
  //event.preventDefaults();
  var name = event.target.user_name.value;
  //console.log(name);  -worked
  var gardenType = event.target.gardenSelection.value;
  var lunchPreference = event.target.lunch.value;
  var experienceLevel = event.target.experience.value;
  //console.log(gardenType, lunchPreference, experienceLevel);   -worked
  new Garden(name, gardenType, lunchPreference, experienceLevel);
  addToLocalStorage();
}

// //cookie-stand examples:
// function handleStoreSubmit(event) {
//   event.preventDefault();
//   var storeLocale = event.target.storelocation.value;
//   var minCust = Number(event.target.mincustomers.value);
//   var maxCust = Number(event.target.maxcustomers.value);
//   var avgCookies = event.target.avgcookies.value;

//   var newLocation = new Store(storeLocale, minCust, maxCust, avgCookies);

//   event.target.storelocation.value = null;
//   event.target.mincustomers.value = null;
//   event.target.maxcustomers.value = null;
//   event.target.avgcookies.value = null;

//   storeTable.innerHTML='';
//   tableHeader();

//   newLocation.custCount();
//   newLocation.cookieCount();
//   newLocation.sumOfCookies();
//   totalOfTotals = 0;  //added this also

//   callRender();
//   tableFooter();
// }



//when "get started" is clicked, begin survey --stretch
//event listener -need to know when its clicked a link to href stretch

//collect name


// collect garden type sun / shade / partial sun

//ask preferred lunch.
//With your garden in mind, what would you prefer for lunch?

// garden expereince level

// save results to local storage

// take to results page
