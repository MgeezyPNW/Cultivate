'use stirct';

var userGarden = [];

function Garden(name, gardenType, lunchPreference, experienceLevel){
  this.name = name;
  this.gardenType = gardenType;
  this.lunchPreference = lunchPreference;
  this.experienceLevel = experienceLevel;
  userGarden.push(this);
}
//example:  cunstructor working
// new Garden('Ryan', 'sun', 'sandwich', 'beginner');

//create instance:: working ahead
//starting on eventlistener below

// function letsGetGrowing(event){
// 	event.preventDefaults();
// 	var name = event.target.name.value;
// 	var gardenType = event.target.
// }

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
