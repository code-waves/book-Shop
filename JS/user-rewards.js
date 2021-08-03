'use strict';
let randomObjectArr=[];
let userBooks= JSON.parse(localStorage.getItem('selected books'));
console.log(userBooks);

// alert(`We will give a free book `);
// if (userBooks !== null) {

let freeBookdiv=document.getElementById('div');

// console.log(freeBookdiv);
let randomObject=userBooks[Math.floor(Math.random() * 10)];
randomObjectArr.push(randomObject);
console.log(randomObject);
let bookimg=document.createElement('img');
freeBookdiv.appendChild(bookimg);
bookimg.setAttribute('src', randomObject.src)

let bookname=document.createElement('h2');
freeBookdiv.appendChild(bookname);
bookname.textContent=randomObject.name;



// }

alert(`Thanks for you`);

function freebookuserStorge() {
    let freebookoject=JSON.stringify(randomObjectArr);
    localStorage.setItem('userfree book',freebookoject);
    }
    freebookuserStorge();

    // get arry from local storage books arry
    function getStorageData(){
        let data=localStorage.getItem('userfree book');
        // console.log(data);
        let parseArr=JSON.parse(data);
        // console.log(parseArr);
        if (parseArr!==null) {
            randomObject=parseArr;
        }
        
      }
      getStorageData();







