'use strict';
// variables
let main = document.getElementById('main');


// let input=document.getElementById('input');
let optinon1=['computer science','Web Design and Development','Computer Coding for Kids'];// category name 
let option2=[];// price
// books list 
 // the price will be a number  add the button 
  Book.allbooks=[];
function Book (src,category,name,bookInfo){
    this.name=name;
    this.src=src;
    this.bookInfo=bookInfo;
    this.category=category;
    Book.allbooks.push(this);
}
console.log(Book.allbooks);
// computer science - Price : 
new Book('imges/logic programin.jpg','computer science',' logic programin','The book begins with a gentle introduction to logic programming using a number of simple examples, followed by a concise and self-contained account of the logic behind Prolog programming. This leads to a discussion of methods of writing programs to ensure that the process of deriving answers from them is as efficient as possible. The techniques are illustrated by practical examples and the final part of the book explains how logic programming can be implemented efficiently.');


new Book('imges/logic cs.jpg','computer science','computer science ',' This book is designed primarily for computer scientists, and more generally, for mathematically inclined readers interested in the formalization of proofs, and the foundations of automatic theorem-proving.');

new Book('imges/How to make an Operating System.jpg','computer science','How to make an Operating System ','  This text is a guide on how to write, test and run, a very simple operating system in C++ and Assembly from scratch.');

new Book('imges/Operating Systems.jpeg','computer science','Operating Systems: Three Easy Pieces ','This book covers the fundamentals of operating systems, including virtualization of the CPU and memory, threads and concurrency, and file and storage systems.');

new Book('imges/An Introduction to Statistical Learning with Applications in R.jpg','computer science','An Introduction to Statistical Learning with Applications in R','  An introduction to statistical learning methods, this book contains a number of R labs with detailed explanations on how to implement the various methods in real life settings.');

new Book('imges/A Whirlwind Tour of Python.jpg','computer science',' Whirlwind Tour of Python ','  This e-book is a fast-paced intro to Python aimed at researchers and engineers.');

// Web Design and Development Price : 
new Book('imges/AngularJS Essentials.jpg','Web Design and Development','AngularJS Essentials','');
new Book('imges/Building Front-End Web Apps with Plain JavaScript.png','Web Design and Development','Building Front-End Web Apps with Plain JavaScript','');
new Book('imges/Mobile Developer\'s Guide to The Galaxy.jpg','Web Design and Development','Mobile Developer\'s Guide to The Galaxy','');
new Book('imges/Learning JavaScript Design Patterns.jpg','Web Design and Development','Learning JavaScript Design Patterns','');
new Book('imges/Just Ask- Integrating Accessibility Throughout Design.jpg','Web Design and Development','Just Ask Integrating Accessibility Throughout Design','');
new Book('imges/Adaptive Web Design.jpg','Web Design and Development','Adaptive Web Design','');
// Computer Coding for Kids Price : 
new Book('imges/Coding for Kids.jpg','Computer Coding for Kids','Coding for Kids','');
new Book('imges/How To Be a Coder.jpg','Computer Coding for Kids','How To Be a Coder','');
new Book('imges/First Coding Book for Kids.jpg','Computer Coding for Kids','First Coding Book for Kids','');
new Book('imges/Computer Coding for Kids.jpg','Computer Coding for Kids','Computer Coding for Kids','');
new Book('imges/Baby Loves Coding.jpg','Computer Coding for Kids','Baby Loves Coding','');
new Book('imges/Can You Crack the Code.jpg','Computer Coding for Kids','Can You Crack the Code','');













// create and show books in the store page
// create and show books in the store page


Book.prototype.renderBooks = function () { 
   
    let span = document.createElement('span');
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
    let pBookinfo = document.createElement('h4');
    span.appendChild(pBookinfo);
    pBookinfo.textContent =this.bookInfo;
    let pBookdescrption = document.createElement('p');
    span.appendChild(pBookdescrption);
    pBookdescrption.textContent = this.aboutBook;
    
       
       
    

    
   
 
}

for (let i = 0; i < Book.allbooks.length; i++) {
    Book.allbooks[i].renderBooks();
}  





let select=document.getElementById("list");
// console.log(select)

select.addEventListener('change',filterSelection);
function filterSelection(event) {
    
    

    let selectedValue=select.value;
    //  console.log('option',select.value);
    let  x = document.getElementsByTagName("span");
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('hide');
        let categoryName=x[i].childNodes[1].innerHTML;
       
        // console.log(selectedValue,categoryName);
        if (selectedValue!==categoryName) {
        
           
        let spanClass=x[i].classList.add('hide')

        

            
        }
     
        
        
    }

  

   



}
