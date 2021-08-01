'use strict';
// w3 school
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// review
// let Review = document.getElementById('Review');
// let userReview = document.createElement('p');
// Review.appendChild(userReview);
// console.log(Review);
let storgeReview = JSON.parse(localStorage.getItem('userfeedback'));
console.log(storgeReview);


function getStorageData() {

  let cartItem = JSON.parse(localStorage.getItem('userfeedback'));
  console.log(cartItem);
  if (cartItem !== null) {
    for (let i = 0; i < cartItem.length; i++) {
      let Review = document.getElementById('Review');
      let userReview = document.createElement('p');
      Review.appendChild(userReview);
      userReview.textContent = cartItem[i].firstName + "  " + cartItem[i].lastName;

      let feedback = document.createElement('p');
      Review.appendChild(feedback);
      feedback.textContent = cartItem[i].feedback;
      
      

console.log(userReview);
    }

  }

}
getStorageData();