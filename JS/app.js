'use strict';
// w3 school
let slideIndex = 1;
showSlides(slideIndex);

// eslint-disable-next-line no-unused-vars
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}


let storgeReview = JSON.parse(localStorage.getItem('userfeedback'));


function getStorageData() {

  let cartItem = JSON.parse(localStorage.getItem('userfeedback'));
  if (cartItem !== null) {
    for (let i = 0; i < cartItem.length; i++) {
      Review = document.getElementById('Review');
      let userReview = document.createElement('p');
      Review.appendChild(userReview);
      userReview.textContent = cartItem[i].firstName + '  ' + cartItem[i].lastName;

      let Elbrement = document.createElement('br');
      Review.appendChild(Elbrement);

      let feedback = document.createElement('p');
      Review.appendChild(feedback);
      feedback.textContent = cartItem[i].feedback;

      let heElement = document.createElement('hr');
      Review.appendChild(heElement);

    }

  }

}


// review
let Review = document.getElementById('Review');
let userReview = document.createElement('p');
Review.appendChild(userReview);

storgeReview = JSON.parse(localStorage.getItem('userfeedback'));


getStorageData();
