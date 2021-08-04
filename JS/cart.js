
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
 
  feedbackarr.push(addFeedback);
  localStorage.removeItem('selected books');
  table.textContent = '';
  // eslint-disable-next-line no-undef
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Thank you ${firstName + ' ' + lastName} for purchase, The delivery department will contact you `,
    showConfirmButton: false,
    timer: 2000
  });

  event.target.firstName.value = '';
  event.target.lastName.value = '';
  event.target.age.value = '';
  event.target.feedback.value = '';

  updateStorge();
}
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
    nameHead.textContent = 'Book name';
    priceHead.textContent = 'Price';
    quantityHead.textContent = 'Remove';
    actionHead.textContent = 'Quantity';
    for (let i = 0; i < cartItem.length; i++) {
      
      let trItem = document.createElement('tr');
      table.appendChild(trItem);
      let thImage1 = document.createElement('td');
      trItem.appendChild(thImage1);
      let thImage = document.createElement('img');
      thImage1.appendChild(thImage);
      thImage.setAttribute('src', cartItem[i].src);
      let thName = document.createElement('td');
      trItem.appendChild(thName);
      thName.textContent = cartItem[i].name;
      let thPrice = document.createElement('td');
      trItem.appendChild(thPrice);
      thPrice.textContent = ` ${cartItem[i].price} JD`;
      let thButton = document.createElement('td');
      trItem.appendChild(thButton);
      let input = document.createElement('button');
      thButton.appendChild(input);
      input.textContent = 'Clear';
      input.addEventListener('click', clear);

      function clear(event) {
        input.onClick = document.location.reload();

        localStorage.removeItem('selected books');

        let selectedItem = cartItem.indexOf(cartItem[i])
        cartItem.splice(selectedItem, 1);
        localStorage.setItem('selected books', JSON.stringify(cartItem));
      }

      let thQuantity = document.createElement('td');
      trItem.appendChild(thQuantity);
      thQuantity.textContent= cartItem[i].quantity;
    }
  }
}
getStorageData();
