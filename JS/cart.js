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







let table = document.getElementById('table');

function getStorageData() {

  let cartItem = JSON.parse(localStorage.getItem('selected books'));
  console.log(cartItem);
  if (cartItem !== null) {
    for (let i = 0; i < cartItem.length; i++) {
      // console.log(cartItem[i]);
      //   cartItem[i].name;
      //   console.log('name:',cartItem[i].name);
      let trItem = document.createElement('tr');
      table.appendChild(trItem);
      let thImage1 = document.createElement('th');
      trItem.appendChild(thImage1);
      let thImage = document.createElement('img');
      thImage1.appendChild(thImage);
      thImage.setAttribute('src', cartItem[i].src);

      let thName = document.createElement('th');
      trItem.appendChild(thName);
      thName.textContent = cartItem[i].name;

      let thPrice = document.createElement('th');
      trItem.appendChild(thPrice);
      thPrice.textContent = cartItem[i].price;

      let thButton = document.createElement('th');
      trItem.appendChild(thButton);
      let input = document.createElement('button');
      thButton.appendChild(input);
      input.textContent = "Clear";

    input.addEventListener('click', clear);
    function clear(event) {

        event.preventDefault();

        table.deleteRow(cartItem[i]);

  localStorage.removeItem("selected books");
  cartItem.splice(cartItem, 1);
  localStorage.setItem("selected books", JSON.stringify(cartItem));
        
    }

    let thQuantity = document.createElement('th');
      trItem.appendChild(thQuantity);
      thQuantity.textContent = 0;
      for (let j = 0; j < cartItem.length; j++) {
        if (cartItem[i].name == cartItem[j].name) {
          thQuantity.textContent++;
        }
      }


    }

  }

}
getStorageData();

// for (let i = 0; i < Book.allbooks.length; i++) {
// let trItem = document.createElement('tr');
// table.appendChild(trItem);
// let thImage1 = document.createElement('th');
// trItem.appendChild(thImage1);
// let thImage = document.createElement('img');
// thImage1.appendChild(thImage);
// thImage.setAttribute('src', Book.allbooks[i].src);

// let thName = document.createElement('th');
// trItem.appendChild(thName);
// thName.textContent = Book.allbooks[i].name;

// let thPrice = document.createElement('th');
// trItem.appendChild(thPrice);
// thPrice.textContent = Book.allbooks[i].price;

// }







