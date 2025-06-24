/*
console.log('Hello World');
console.error('This is an error')
console.warn('This is a warning')

// if We use const then it will trow and error cuz age value is const and it cant be changed, also use const most of time unless we are gonna reassign the same variable name.
let age = 24;
age = 30;
console.log(age);
*/

//Data Types: Strings, Numbers,Boolean, null, undefined
//Its not neccesary to to use semicolumn at the end

/*
const Name = 'john';
const age = 30;

const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;//undefined
let z; // undefined
console.log(typeof z)

//Concatenation
//console.log('My name is ' + Name + ' and I am ' + age);
// Template String
console.log(`My name is ${Name} and I am ${age}`);
console.log('hello');
*/

/* Methods
const s = 'Hello World';
console.log(s.length);
// more methodds like 
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 7));
console.log(s.substring(0, 7).toUpperCase());
console.log(s.split(' '));
console.log(s.split(''));
//it list as an array
const s = 'technology, computers, it, code';

console.log(s.split(', '));
*/

/*
//Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5); 
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);
fruits[5] = 'grapes'; // not effecient cuz we dont know how long is array 
console.log(fruits[1]);
//console.log(fruits);
// The only thing we cannot do is take the array and reassignm it or use same variable name

//another way to add value at the end
fruits.push('mangos');
console.log(fruits);

//add at the front
fruits.unshift('strawberries');
console.log(fruits);

//to remove use pop
fruits.pop();
console.log(fruits);

//To check an elemnt is in an array
console.log(Array.isArray('hello'));

// To get an index numjber of an element
console.log(fruits.indexOf('oranges'));
*/
/*
//Object Literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    hobbies: ['music', 'movies', 'sports'],
    address: { //sub object
        street: '50 main st',
        city: 'New York',
        state: 'NY'
    }
}

//console.log(person);
//To access a single value
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// If we want to create person's Variables  wecan do
const { firstName, lastName, address:{city}} = person; // pullinmgv these 2 var from the person object
console.log(city);
//we can ad dproperties
person.email = 'jooh@gmail.com';
console.log(person.email);
*/

/* Array of Objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

// If we want to convert into JSON and send it to server, this is how we do
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


/*Loops using same todo First is for
for(let i = 0; i <= 10; i++){
    console.log(`for Loop Number: ${i}`);
}

//While loops
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Loop through array
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}
for(let i = 0; i <= 10; i++){
    console.log(`for Loop Number: ${i}`);
}

//todo can be any name we can choose for element of an array
for(let todo of todos){
    console.log(todo.text);
}

//High way array method: forEach, map, filter
//forEach
todos.forEach(function(todo){// it could have multiple parameters
    console.log(todo.text);
});

//map
const todoText =  todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted =  todos.filter(function(todo){
    return todo.isCompleted === true;
});


const todoCompleted =  todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted)
*/

//Conditions
/*
const x = 10;
//double equal if x is string it still compare a s a number if we put triple equal then it consider x as an string because of single quote aroubnd the number (const x = '10');
//its a ghood practice to oput triple equal bcecause we alway wan to match the datatype also.
 if(x === 20) {
    console.log('x is 10');
} else if (x>10){
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

const x = 4;
const y = 11;
if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10 ');
}

if(x > 5 && y > 10) {
    console.log('x is more than 5 and y is more than 10 ');
}

//Ternary operator

const x = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color);


//switch
const x = 11;

//const color = x > 10 ? 'red' : 'blue';
const color = 'green';
switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
    default :
    console.log('color is not reed or blue');
    break;
}
*/

/* // functions
function addNums(num1, num2) {
    console.log(num1 + num2);
}
//If we leave the function para meter blank then it gives us Nan which means not a number
addNums(5,4);


//we can give default values to parasmeters
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5,5));

// we can do arrow  instead of using functgion name itself
//one way const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
//after => we cannot put return and if we want to use return then we need to use curly brackets
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5,5));

//If we have one parametr then we dont need paranthesis around parameter

const addNums = num1 => num1 + 5;
console.log(addNums(5));

// We can donthis for array
todos.forEach*((todo) => console.log());

//Object Litterals One is functions with prototypes oe es6 Classes
//functions with prototypes - it should start with capital letter
//construction function
function Person(firstName,lastNamem, dob) {
    this.firstName = firstName;
    this.lastNamem = lastNamem;
    //dob is as string we can set it as actual; date constructor
    //this.dob = dob;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastNamem}`;
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.dob);
console.log(person2.dob.getFullYear()); // we can get full year and there are many more methods
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1); // This is Object Prototype

//To make a Prototype
function Person(firstName,lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);
*/

//With es6 same thing but its a syntactic sugar

//Class
class Person {
    constructor(firstName,lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person2.getFullName());
console.log(person1);

