'use strict';
// variables
let main = document.getElementById('bookbook');
// let select1 = document.getElementById('Catagory');
// let select2 = document.getElementById('Price');
// eslint-disable-next-line no-unused-vars
let select1 = document.getElementById('computer science');
// let input=document.getElementById('input');
// eslint-disable-next-line no-unused-vars
let optinon1 = ['computer science', 'Web Design and Development', 'Computer Coding for Kids'];// category name
// eslint-disable-next-line no-unused-vars
let option2 = [];// price
// books list
// the price will be a number  add the button
Book.allbooks = [];
function Book(src, category, name, price) {
  this.name = name;
  this.src = src;
  this.price = price;
  this.category = category;
  Book.allbooks.push(this);
}
console.log(Book.allbooks);

new Book('imges/logic programin.jpg', 'computer science', ' logic programin', 19);
new Book('imges/logic cs.jpg', 'computer science', 'computer science ', 35);
new Book('imges/How to make an Operating System.jpg', 'computer science', 'How to make an Operating System ', 80);
new Book('imges/Operating Systems.jpeg', 'computer science', 'Operating Systems: Three Easy Pieces ', 12);
new Book('imges/An Introduction to Statistical Learning with Applications in R.jpg', 'computer science', 'An Introduction to Statistical Learning with Applications in R', 16);
new Book('imges/A Whirlwind Tour of Python.jpg', 'computer science', ' Whirlwind Tour of Python ', 23);
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
  // for (let i = 0; i < books.length; i++) {
  let span = document.createElement('div');
  main.appendChild(span);
  let imgelement1 = document.createElement('img');
  imgelement1.setAttribute('src', this.src);
  span.appendChild(imgelement1);
  // console.log(books[i].src);
  let h2category = document.createElement('h2');
  span.appendChild(h2category);
  h2category.textContent = this.category;
  let pBookName = document.createElement('h3');
  span.appendChild(pBookName);
  pBookName.textContent = this.name;
  let pBookPrice = document.createElement('h4');
  span.appendChild(pBookPrice);
  pBookPrice.textContent = this.price;
  let pBookdescrption = document.createElement('p');
  span.appendChild(pBookdescrption);
  pBookdescrption.textContent = this.aboutBook;
  // butoon event listener
  input = document.createElement('button');
  span.appendChild(input);
  input.textContent = 'Add To Cart';
  //    console.log(input);
  let object = this;
  input.addEventListener('click', userClick);
  // eslint-disable-next-line no-unused-vars
  function userClick(event) {
    event.preventDefault();
    cartArray.push(object);
    // console.log('cartArray :',cartArray);
    cartArrayStorge();
  }
  // }
};
for (let i = 0; i < Book.allbooks.length; i++) {
  Book.allbooks[i].renderBooks();
}


let select = document.getElementById('list');
// console.log(select)

select.addEventListener('change', filterSelection);
// eslint-disable-next-line no-unused-vars
function filterSelection(event) {



  let selectedValue = select.value;
  //  console.log('option',select.value);
  let x = document.getElementsByTagName('div');
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('hide');
    let categoryName = x[i].childNodes[1].innerHTML;

    // console.log(selectedValue,categoryName);
    if (selectedValue !== categoryName) {


      // eslint-disable-next-line no-unused-vars
      let spanClass = x[i].classList.add('hide');

    }
  }

}

// add event listener for the price selection


let selectprice = document.getElementById("Price");
// console.log(select)

selectprice.addEventListener('change', filterSelectionPrice);
function filterSelectionPrice(event) {

  console.log('Event : ', event);

  let selectedValuePrice = selectprice.value;
  //  console.log('option',selectedValuePrice);
  let x = document.getElementsByTagName("div");
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('hide');
    let bookprice = x[i].childNodes[3].innerHTML;

    //      1 : 
    if (selectedValuePrice === 'Less Than 20 JD') {
      if (bookprice < 20) {
        // eslint-disable-next-line no-unused-vars
        let spanClass1 = x[i].classList.remove('hide');
      }
      if (bookprice >= 20 && bookprice <= 40) {
        // eslint-disable-next-line no-unused-vars
        let spanClass2 = x[i].classList.add('hide');
      }
      if (bookprice > 40) {
        let spanClass3 = x[i].classList.add('hide');
      }
    }

    //      2 :       
    else if (selectedValuePrice === '21 - 40 JD') {
      if (bookprice < 20) {
        let spanClass2 = x[i].classList.add('hide');
        console.log('spanClass2', spanClass2);
      }
      if (bookprice >= 20 && bookprice <= 40) {
        let spanClass2 = x[i].classList.remove('hide');
        console.log('spanClass2', spanClass2);
      }
      if (bookprice > 40) {
        let spanClass2 = x[i].classList.add('hide');
        console.log('spanClass2', spanClass2);
      }
    }

    //      3 : 
    else {
      if (bookprice < 20) {
        let spanClass2 = x[i].classList.add('hide')
        console.log('spanClass2', spanClass2)
      }
      if (bookprice >= 20 && bookprice <= 40) {
        let spanClass2 = x[i].classList.add('hide')
        console.log('spanClass2', spanClass2)
      }
      if (bookprice > 40) {
        let spanClass2 = x[i].classList.remove('hide')
        console.log('spanClass2', spanClass2)
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
  //   console.log(data);
  let parseArr = JSON.parse(data);
  //   console.log(parseArr);
  if (parseArr !== null) {
    cartArray = parseArr;
  }

}
getStorageData();
// create opptions on each category ... computer scince,Web Design and Development Price,Computer Coding for Kids Price
// Book.prototype.rendercategoryOptions = function (){
//     // computer scince options
//     if (this.category==='computer scince') {
//         firstCategory=document.getElementById('computer scince');
//         for (let i = 0; i < books.length; i++) {
//             computerScinceOpptions=document.createElement('option');
//            Option.text=this.name;
//            firstCategory.add(Option);
//         }
//     }
//     else{
//         console.log(this.name);
//     }
// }
// Book.prototype.rendercategoryOptions();
