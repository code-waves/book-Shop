'use strict';
// variables
let main = document.getElementById('bookbook');

let select1 = document.getElementById('computer science');

// eslint-disable-next-line no-unused-vars
let optinon1 = ['computer science', 'Web Design and Development', 'Computer Coding for Kids'];// category name
// eslint-disable-next-line no-unused-vars
let option2 = [];// price
// books list

Book.allbooks = [];
function Book(src, category, name, price) {
  this.name = name;
  this.src = src;
  this.price = price;
  this.category = category;
  this.quantity=0;
  Book.allbooks.push(this);
  
}


new Book('imges/logic programin.jpg', 'Computer science', ' logic programing', 19);
new Book('imges/logic cs.jpg', 'Computer science', 'Computer science ', 35);
new Book('imges/How to make an Operating System.jpg', 'Computer science', 'How to make an Operating System ', 80);
new Book('imges/Operating Systems.jpeg', 'Computer science', 'Operating Systems: Three Easy Pieces ', 12);
new Book('imges/An Introduction to Statistical Learning with Applications in R.jpg', 'Computer science', 'An Introduction to Statistical Learning with Applications in R', 16);
new Book('imges/A Whirlwind Tour of Python.jpg', 'Computer science', ' Whirlwind Tour of Python ', 23);
new Book('imges/AngularJS Essentials.jpg', 'Web Design and Development', 'AngularJS Essentials', 77);
new Book('imges/Building Front-End Web Apps with Plain JavaScript.png', 'Web Design and Development', 'Building Front-End Web Apps with Plain JavaScript', 12);
new Book('imges/Mobile Developer\'s Guide to The Galaxy.jpg', 'Web Design and Development', 'Mobile Developer\'s Guide to The Galaxy', 33);
new Book('imges/Learning JavaScript Design Patterns.jpg', 'Web Design and Development', 'Learning JavaScript Design Patterns', 38);
new Book('imges/Just Ask- Integrating Accessibility Throughout Design.jpg', 'Web Design and Development', 'Just Ask Integrating Accessibility Throughout Design', 95);
new Book('imges/Adaptive Web Design.jpg', 'Web Design and Development', 'Adaptive Web Design', 22);
new Book('imges/Coding for Kids.jpg', 'Computer Coding for Kids', 'Coding for Kids', 11);
new Book('imges/How To Be a Coder.jpg', 'Computer Coding for Kids', 'How To Be a Coder', 12);
new Book('imges/First Coding Book for Kids.jpg', 'Computer Coding for Kids', 'First Coding Book for Kids', 26);
new Book('imges/Computer Coding for Kids.jpg', 'Computer Coding for Kids', 'Computer Coding for Kids', 10);
new Book('imges/Baby Loves Coding.jpg', 'Computer Coding for Kids', 'Baby Loves Coding', 65);
new Book('imges/Can You Crack the Code.jpg', 'Computer Coding for Kids', 'Can You Crack the Code', 23);


let input;
let cartArray = [];
Book.prototype.renderBooks = function () {
  
  let span = document.createElement('div');
  main.appendChild(span);
  let imgelement1 = document.createElement('img');
  imgelement1.setAttribute('src', this.src);
  span.appendChild(imgelement1);
 
  let h2category = document.createElement('h2');
  span.appendChild(h2category);
  h2category.textContent = this.category;
  let pBookName = document.createElement('h3');
  span.appendChild(pBookName);
  pBookName.textContent = this.name;
  let pBookPrice = document.createElement('h4');
  span.appendChild(pBookPrice);
  pBookPrice.textContent =`${ this.price} JD` ;
  let pBookdescrption = document.createElement('p');
  span.appendChild(pBookdescrption);
  pBookdescrption.textContent = this.aboutBook;
  // butoon event listener
  input = document.createElement('button');
  span.appendChild(input);
  input.textContent = 'Add To Cart';
 
  let object = this;
  input.addEventListener('click', userClick);
  // eslint-disable-next-line no-unused-vars
  function userClick(event) {
event.preventDefault();
alert(`${object.name} book added to your cart`)  
    if (!cartArray.includes(object) ) {
      cartArray.push(object);
    }
    
    object.quantity++;
    
    cartArrayStorge();
  }
  // }
};
for (let i = 0; i < Book.allbooks.length; i++) {
  Book.allbooks[i].renderBooks();
}


let select = document.getElementById('list');


select.addEventListener('change', filterSelection);
// eslint-disable-next-line no-unused-vars
function filterSelection(event) {



  let selectedValue = select.value;

  let x = document.getElementsByTagName('div');
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('hide');
    let categoryName = x[i].childNodes[1].innerHTML;

    
    if (selectedValue !== categoryName) {


    
      let spanClass = x[i].classList.add('hide');

    }
  }

}

// add event listener for the price selection


let selectprice = document.getElementById("Price");


selectprice.addEventListener('change', filterSelectionPrice);
function filterSelectionPrice(event) {


  let selectedValuePrice = selectprice.value;
  let x = document.getElementsByTagName("div");
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('hide');
    let bookprice = x[i].childNodes[3].innerHTML;

    if (selectedValuePrice === 'Less Than 20 JD') {
      if (Book.allbooks[i].price < 20) {
        // eslint-disable-next-line no-unused-vars
        let spanClass1 = x[i].classList.remove('hide');
      }
      if (Book.allbooks[i].price >= 20 && Book.allbooks[i].price <= 40) {
        // eslint-disable-next-line no-unused-vars
        let spanClass2 = x[i].classList.add('hide');
      }
      if (Book.allbooks[i].price > 40) {
        let spanClass3 = x[i].classList.add('hide');
      }
    }

    else if (selectedValuePrice === '21 - 40 JD') {
      if (Book.allbooks[i].price < 20) {
        let spanClass2 = x[i].classList.add('hide');
      }
      if (Book.allbooks[i].price >= 20 && Book.allbooks[i].price <= 40) {
        let spanClass2 = x[i].classList.remove('hide');
      }
      if (Book.allbooks[i].price > 40) {
        let spanClass2 = x[i].classList.add('hide');
      }
    }

    else {
      if (Book.allbooks[i].price < 20) {
        let spanClass2 = x[i].classList.add('hide')
      }
      if (Book.allbooks[i].price >= 20 && Book.allbooks[i].price <= 40) {
        let spanClass2 = x[i].classList.add('hide')
      }
      if (Book.allbooks[i].price > 40) {
        let spanClass2 = x[i].classList.remove('hide')
      }
    }
  }
}

//event listener for each button
function cartArrayStorge() {

  let strigcartArr = JSON.stringify(cartArray);
  localStorage.setItem('selected books', strigcartArr);
}
// get arry from local storage books arry
function getStorageData() {
  let data = localStorage.getItem('selected books');
  let parseArr = JSON.parse(data);
  if (parseArr !== null) {
    cartArray = parseArr;
  }

}
getStorageData();
