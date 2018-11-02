'use strict';

var userGarden = [];
var survey = document.getElementById('survey');

//cunstructor for user input
function Garden(name, gardenType, lunchPreference, experienceLevel){
  this.name = name;
  this.gardenType = gardenType;
  this.lunchPreference = lunchPreference;
  this.experienceLevel = experienceLevel;
  userGarden.push(this);
}

//adds to local storage
function addToLocalStorage() {
  var storedGarden = JSON.stringify(userGarden);
  localStorage.setItem('garden', storedGarden);
}

//event listener for form
survey.addEventListener('submit', letsGetGrowing);

//grabs info from event listener, creates an instance and commits to local storage
function letsGetGrowing(event){
  event.preventDefault();
  var name = event.target.user_name.value;
  var gardenType = event.target.gardenSelection.value;
  var lunchPreference = event.target.lunch.value;
  var experienceLevel = event.target.experience.value;
  new Garden(name, gardenType, lunchPreference, experienceLevel);
  addToLocalStorage();
}
