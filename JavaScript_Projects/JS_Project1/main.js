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

// to loop through it 
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//To remove 
ul.remove();
// To remove last elemnt child
ul.lastElementChild.remove();
// To remove first elemnt child
ul.firstElementChild.remove();
//To change with something
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log('click');
    //console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

const btn = document.querySelector('.btn');
// We can aslo do 'mouseover'
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    //console.log('click');
    //console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    //Once we refresh its gone there is no save database
    

    if (nameInput.value === '' || emailInput.value === ''){
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        //console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

