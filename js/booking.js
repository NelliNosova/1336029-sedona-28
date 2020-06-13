var btnBooking = document.querySelector(".btn-booking");
var searchPopup = document.querySelector(".search-popup");
var startData = document.querySelector(".start-data");
var endData = document.querySelector(".end-data");
var adults = document.querySelector(".adults");
var chilren = document.querySelector(".children");
var map = document.querySelector(".map");
var bookingForm =document.querySelector(".booking-form");

var isStorageSupport = true;
var adultsItem = "";
var chilrenItem = "";

try {
  adultsItem = localStorage.getItem("adults");
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

btnBooking.addEventListener("click", function (evt) {
  evt.preventDefault();  
  searchPopup.classList.toggle("search-popup-none");
  if (searchPopup.classList.contains("search-popup-none")) {
    searchPopup.classList.remove("search-popup-error");
  }
  startData.focus();
  if (adultsItem) {
    adults.value = adultsItem;
  }
  if (chilrenItem) {
    chilren.value = chilrenItem;
  }
});

bookingForm.addEventListener("submit", function(evt) {
  if (!startData.value || !endData.value || !adults.value || !chilren.value) {
    evt.preventDefault();    
    searchPopup.classList.remove("search-popup-error");
    searchPopup.offsetWidth = searchPopup.offsetWidth;
    searchPopup.classList.add("search-popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children". chilren.value);
    }    
  }    
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {    
    if (!searchPopup.classList.contains("search-popup-none")) {     
      evt.preventDefault();
      searchPopup.classList.add("search-popup-none");
      searchPopup.classList.remove("search-popup-error");
    }
  }
});

/* не работает click, mousedown  */
map.addEventListener("click", function (evt) {       
  if (!searchPopup.classList.contains("search-popup-none")) {     
    evt.preventDefault();
    searchPopup.classList.add("search-popup-none");
    searchPopup.classList.remove("search-popup-error");
  }  
});
