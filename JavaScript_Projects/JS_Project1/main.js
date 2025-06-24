/*
// project 1 code
console.log(window);
//we could do window.alert(1);
alert(1);

//Single element selctor
const form = document.getElementById('my-form');
console.log(document.querySelector('.container'));
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));


//multi elements selctor
console.log(document.querySelectorAll('.item'));
//ClassName cerates HTMLCollection we cannot use it as array methods,we nhave to manually convert it to an array
console.log(document.getElementsByClassName('.item'));
// We can also use by tage
console.log(document.getElementsByTagName('li'));
*/

// to loop through it 
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

