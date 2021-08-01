'use strict';
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







