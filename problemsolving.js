// # JavaScript Basic Problem Solving Part 01

1.  Create a variable called carName, assign the value Volvo to it.

let ... = "" ; 

let carName = "Volvo";

2.  On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
3rd Variable Name And Values Both! 

let ... = "John";  // write variable name
let lastName = "..." //write variable values 
let ... = ... ; // write variable name and values both 

let firstName = "John", lastName = "Doe", age = 35;

3.  Use the correct assignment operator that will 
result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x = ... // what will be the value of x ? 

x = 10;
y = 5;
x *= y; // x = x * y

4.  Use comments to describe the correct data type of the following variables:

let length = 16; // data type ? 
let lastName = "Johnson"; // data type ? 

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // data type ? 

let length = 16; // data type: Number
let lastName = "Johnson"; // data type: String

const x = {
  firstName: "John",  
  lastName: "Doe"
}; // data type: Object

5.  Execute the function named myFunction.
 
function myFunction() {
 alert("Hello World!");
}

// call the function and see the output 

function myFunction() {
    alert("Hello World!");
  }
  
  // Call the function
  myFunction();
  
6.  1. Create an object called person with name = John, age = 50, Then,
access the object to alert("John is 50").

const person = {
    name: "John",
    age: 50
  };
  
  alert(person.name + " is " + person.age);

7.  1. The <button> element should do something when someone clicks on it. Try to fix it!

<button>Click me.</button> 

<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
  alert("Button clicked!");
}
</script>

8.  1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length); // Alerts the number of items in the array



2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 

    const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford"; // Changing the first item to "Ford"
console.log(Brand); // Output: ["Ford", "Jeep", "Mercedes"]

9.
1. Use the correct Math method to create a random number.

let randomNumber = Math.random();
console.log(randomNumber); // Outputs a random number between 0 and 1

2. Use the correct Math method to return the largest number of 10 and 20.

let largestNumber = Math.max(10, 20);
console.log(largestNumber); // Outputs: 20

3. Use the correct Math method to get the square root of 9.

let squareRoot = Math.sqrt(9);
console.log(squareRoot); // Outputs: 3

10. 1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert() // ? 

let x = 10;
let y = 5;

alert(x > y); // Alerts true

2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 16; // Change this value to test

alert(age < 18 ? "Too young" : "Old enough");


// # JavaScript Basic Problem Solving Part 02

1.  function celsiusToFahrenheit(celsius) {
    return ...;
  }
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77
  
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(0)); // Output: 32
  console.log(celsiusToFahrenheit(25)); // Output: 77


  2.   function isEven(num) {
    return ...;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false

  function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); // Output: true
  console.log(isEven(7)); // Output: false
  
  3.    function sum(a, b) {
    return ...;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30

  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4)); // Output: 7
  console.log(sum(10, 20)); // Output: 30

  
  4.    function findSmallestNum(arr) {
    return ...;
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  
  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // Output: 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // Output: -5

  5.    function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    return ...;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  
  function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
  }
  
  console.log(countVowels("hello world")); // Output: 3
  console.log(countVowels("Javascript")); // Output: 3

  
  6.    function getFirstElement(arr) {
    return ...;
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"

  function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // Output: 1
  console.log(getFirstElement(["a", "b", "c"])); // Output: "a"

  
  7.    function isArrayEmpty(arr) {
    return ...;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false

  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // Output: true
  console.log(isArrayEmpty([1, 2, 3])); // Output: false

  8.    function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return ....;
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

  function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(5)); // Output: 120
  console.log(factorialize(7)); // Output: 5040

  
  9.    function reverseString(str) {
    return ...;
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(reverseString("world")); // Output: "dlrow"

  10.   function toLowerCase(str) {
    return ...;
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"

  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // Output: "hello world"
  console.log(toLowerCase("JavaScript")); // Output: "javascript"

  11.   function stringLength(str) {
    return ...;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5

  function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // Output: 5
  console.log(stringLength("world")); // Output: 5

  12.   function mergeArrays(arr1, arr2) {
    return ...;
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

  function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // Output: ["a", "b", "c", "d"]
  




