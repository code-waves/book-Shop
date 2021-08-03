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

let feedbackarr = [];





// add eventlistener to form
function userReview(event) {
  event.preventDefault();
  let firstName = event.target.firstName.value;
  let lastName = event.target.lastName.value;
  let age = parseInt(event.target.age.value);
  let feedback = event.target.feedback.value;
  // eslint-disable-next-line new-cap
  let addFeedback = new updateReview(firstName, lastName, age, feedback);
  console.log(addFeedback);
  feedbackarr.push(addFeedback);
  localStorage.removeItem('selected books');
  table.textContent = '';
  // eslint-disable-next-line no-undef
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Thank you ${firstName + ' ' + lastName} for purchase, The delivery department will contact you `,
    showConfirmButton: false,
    timer: 2000
  });
  console.log(feedbackarr);
  updateStorge();
}
console.log(updateReview.all);
//Saving from updateReview function
function updateStorge() {
  let storagearr = JSON.stringify(feedbackarr);
  localStorage.setItem('userfeedback', storagearr);
  // updateReview.all = JSON.parse(updateReview.all);
}
function getData() {
  let data = localStorage.getItem('userfeedback');
  let parseArr = JSON.parse(data);
  if (parseArr !== null) {
    feedbackarr = parseArr;
  }
}

getData();




let table = document.getElementById('table');

function getStorageData() {

  let cartItem = JSON.parse(localStorage.getItem('selected books'));
  console.log(cartItem);
  if (cartItem !== null) {
    let trhead = document.createElement('tr');
    table.appendChild(trhead);
    let imgHead = document.createElement('th');
    let nameHead = document.createElement('th');
    let priceHead = document.createElement('th');
    let quantityHead = document.createElement('th');
    let actionHead = document.createElement('th');
    trhead.appendChild(imgHead);
    trhead.appendChild(nameHead);
    trhead.appendChild(priceHead);
    trhead.appendChild(quantityHead);
    trhead.appendChild(actionHead);
    imgHead.textContent = 'Image of the book';
    nameHead.textContent = 'Nook name';
    priceHead.textContent = 'Price in JD';
    quantityHead.textContent = 'Quantity';
    actionHead.textContent = 'Remove';
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
      input.textContent = 'Clear';

      input.addEventListener('click', clear);
      // eslint-disable-next-line no-inner-declarations
      function clear(event) {

        event.preventDefault();

        table.deleteRow(cartItem[i]);

        localStorage.removeItem('selected books');
        cartItem.splice(cartItem, 1);
        localStorage.setItem('selected books', JSON.stringify(cartItem));

      }

      let thQuantity = document.createElement('th');
      trItem.appendChild(thQuantity);
      thQuantity.textContent = 0;
      for (let j = 0; j < cartItem.length; j++) {
        if (cartItem[i].name === cartItem[j].name) {
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