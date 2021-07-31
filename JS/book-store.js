'use strict';
// variables
let main = document.getElementById('bookbook');




// let input=document.getElementById('input');



// books list 
 // the price will be a number  add the button 
 let books=[];
function Book (src,category,name,price){
    this.name=name;
    this.src=src;
    this.price=price;
    this.category=category;
    books.push(this);
}
console.log(books);

// computer science - Price : 15JD

new Book('imges/logic programin.jpg','computer science',' logic programin','Price : 15JD',);


new Book('imges/logic cs.jpg','computer science','logic computer science ','Price : 15JD');


new Book('imges/How to make an Operating System.jpg','computer science','How to make an Operating System ','Price : 15JD');


new Book('imges/Operating Systems.jpeg','computer science','Operating Systems: Three Easy Pieces ','Price : 15JD');


new Book('imges/An Introduction to Statistical Learning with Applications in R.jpg','computer science','An Introduction to Statistical Learning with Applications in R','Price : 15JD');


new Book('imges/A Whirlwind Tour of Python.jpg','computer science',' Whirlwind Tour of Python ','Price : 15JD');

// Web Design and Development Price : 20JD

new Book('imges/AngularJS Essentials.jpg','Web Design and Development','AngularJS Essentials','Price : 20JD');


new Book('imges/Building Front-End Web Apps with Plain JavaScript.png','Web Design and Development','Building Front-End Web Apps with Plain JavaScript','Price : 20JD');

new Book('imges/Mobile Developer\'s Guide to The Galaxy.jpg','Web Design and Development','Mobile Developer\'s Guide to The Galaxy','Price : 20JD');


new Book('imges/Learning JavaScript Design Patterns.jpg','Web Design and Development','Learning JavaScript Design Patterns','Price : 20JD');


new Book('imges/Just Ask- Integrating Accessibility Throughout Design.jpg','Web Design and Development','Just Ask Integrating Accessibility Throughout Design','Price : 20JD');


new Book('imges/Adaptive Web Design.jpg','Web Design and Development','Adaptive Web Design','Price : 20JD');


// Computer Coding for Kids Price : 10JD

new Book('imges/Coding for Kids.jpg','Computer Coding for Kids ','Computer Coding for Kids','Price : 20JD');



new Book('imges/How To Be a Coder.jpg','Computer Coding for Kids ','How To Be a Coder','Price : 20JD');


new Book('imges/First Coding Book for Kids.jpg','Computer Coding for Kids ','First Coding Book for Kids','Price : 20JD');


new Book('imges/Coding for Kids.jpg','Computer Coding for Kids ','Coding for Kids','Price : 20JD');


new Book('imges/Baby Loves Coding.jpg','Computer Coding for Kids','Baby Loves Coding','Price : 20JD');



new Book('imges/Can You Crack the Code.jpg','Computer Coding for Kids ','Can You Crack the Code','Price : 20JD');



// create and show books in the store page

Book.prototype.renderBooks = function () {
    for (let i = 0; i < books.length; i++) {
        let span = document.createElement('span');
        main.appendChild(span);
        let imgelement1 = document.createElement('img');
        imgelement1.setAttribute('src',  books[i].src);
        span.appendChild(imgelement1);
        console.log(books[i].src);
        let h2category = document.createElement('h2');
        span.appendChild(h2category);
        h2category.textContent = books[i].category;
        let pBookName = document.createElement('h3');
        span.appendChild(pBookName);
        pBookName.textContent = books[i].name;
        let pBookPrice = document.createElement('h4');
        span.appendChild(pBookPrice);
        pBookPrice.textContent = books[i].price;
        let pBookdescrption = document.createElement('p');
        span.appendChild(pBookdescrption);
        pBookdescrption.textContent = books[i].aboutBook;
        let button = document.createElement('button');
        span.appendChild(button);
        button.textContent = "Add To Cart";
    }
}
Book.prototype.renderBooks();









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