'use strict';
(function () {
  var btnBooking = document.querySelector(".btn-booking");
  var searchPopup = document.querySelector(".search-popup");
  var startData = document.querySelector(".start-data");
  var endData = document.querySelector(".end-data");
  var adults = document.querySelector("#adults");
  var children = document.querySelector("#children");  
  var bookingForm =document.querySelector(".booking-form");

  var isStorageSupport = true;
  var adultsItem = "";
  var adultsItem, childrenItem;

  try {
    adultsItem = localStorage.getItem("adults");
    childrenItem = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

  btnBooking.addEventListener("click", function (evt) {
    evt.preventDefault();  
    searchPopup.classList.toggle("search-popup-none");  
    adults.value = adultsItem;
    children.value = childrenItem;
    setTimeout(function () {
      startData.focus();
    },600)
  });

  bookingForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }

    if (!startData.value || !endData.value || !adults.value || !children.value) {
      bookingForm.classList.add("search-popup-error");
      setTimeout(function () {
        bookingForm.classList.remove("search-popup-error");
      }, 600)
    } else {
      bookingForm.submit();
    }

    if (!startData.value) {
      startData.classList.add("invalid");
      startData.focus();
    } else {
        startData.classList.remove("invalid");
        endData.focus();
    } 

    if (!endData.value) {
      endData.classList.add("invalid");      
    } else {
      endData.classList.remove("invalid");
      adults.focus();
    } 

    if (!adults.value) {
      adults.classList.add("invalid");      
    } else {
      adults.classList.remove("invalid");
      childen.focus();
    } 

    if (!children.value) {
      children.classList.add("invalid");      
    } else {
      children.classList.remove("invalid");      
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


})();

