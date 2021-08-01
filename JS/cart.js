'use strict';

// constructor updateReview function
function updateReview(firstName, lastName, age, feedback) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.feedback = feedback;
    updateReview.all.push(this);
}

updateReview.all = [];
let form = document.getElementById('info-form');

form.addEventListener('submit', userReview);



// add eventlistener to form
function userReview(event) {
    event.preventDefault();
    let firstName = event.target.firstName.value;
    let lastName = event.target.lastName.value;
    let age = parseInt(event.target.age.value);
    let feedback = event.target.feedback.value;    
    let addFeedback = new updateReview(firstName, lastName, age, feedback);
    console.log(addFeedback);
    updateStorge();
}

console.log(updateReview.all);


//Saving from updateReview function
function updateStorge() {    
 updateReview.all = JSON.stringify(updateReview.all);  
 localStorage.setItem('userfeedback', updateReview.all);
 updateReview.all = JSON.parse(updateReview.all);

}

