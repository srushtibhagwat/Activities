//Chapter 7: Strings

//Section 7.1: Basic Info and String Concatenation///////////////
var hello = "Hello";
var world = 'world';
var helloW = `Hello World`;

//Concatenating Strings
var foo = "Foo";
var bar = "Bar";
console.log(foo + bar);
console.log(foo.concat(bar))

var string = "string"; 
var number = 32;
var boolean = true;
console.log(string + number + boolean);

//String Templates
var place = `World`;
var greet = `Hello ${place}!`
console.log(greet);

//Section 7.2: Reverse String/////////////////////////////////////
function reverseString(str) {
    return str.split('').reverse().join('');
    }
    console.log(reverseString('string'))

//Section 7.3: Comparing Strings Lexicographically////////////////
var a = "hello";
var b = "world";
console.log(a.localeCompare(b));

//Section 7.4: Character code////////////////////////////////////
var charCode = "ABCDE".charCodeAt(3);

//Section 7.5: String Representations of Numbers
var b10 = 12;
var b16 = b10.toString(16);
console.log(b16);

//Section 7.6: String Find and Replace Functions/////////////////
var string = "Hello, World!";
console.log( string.indexOf("o") );
console.log(string.replace("Hello, World","Hi my name is tiger"))

//Section 7.7: Find the index of a substring inside a string//////
var a = string.indexOf('Wor');
console.log(a)

//Section 7.8: String to Upper Case And Lower Case////////////////
console.log('hello-world'.toUpperCase());
console.log('hello-world'.toLowerCase());

//Section 7.9: Repeat a String////////////////////////////////////
console.log("abc".repeat(3))

//Chapter 8: Date

//Section 8.1: Create a new Date object///////////////////////////
var ms = new Date(2012);
var a = ms.toString()
console.log(a)

var zero = new Date(2012, 0);
console.log(zero.toString())

//Section 8.2: Formatting a JavaScript date////////////////////////
var today = new Date().toLocaleDateString('en-GB', { day : 'numeric',
month : 'short',
year : 'numeric'
});
console.log(today)

//Section 8.3: Get the current time and date////////////////////////
var year = (new Date()).getFullYear(); 
console.log(year);

//Section 8.4: Convert to JSON//////////////////////////////////////
var date1 = new Date(); 
console.log(date1.toJSON())

//Chapter 9: Data Comaparison

//Section 9.1: Date Dierence Calculation

var date1 = new Date();
var date2 = new Date(date1.valueOf() + 5000);
var dateDiff = date1.valueOf() - date2.valueOf();
var dateDiffInYears = dateDiff/1000/60/60/24/365; //convert milliseconds into years
console.log("Date difference in years : " + dateDiffInYears);

//Chapter 10: Comparison Operations//////////////////////////////////

console.log(1 == 1)
console.log(1 == true)
console.log(1 == '1')
console.log(1 == '1.00')
console.log(1 == '1.00000000001')
console.log(1 == '1.00000000000000001'); 
console.log(null == undefined)
console.log(1 == 2)
console.log(0 == false)
console.log(0 == undefined)
console.log(0 == "")

var arr1 = [1,2,3];
var arr2 = arr1.slice().reverse();
console.log(arr2)
console.log(arr1)

//Chapter 11: Conditions

//Section 11.2: Switch statement/////////////////////////////////////////
var animal = 'Lion'; 
switch (animal) {
    case 'Dog':
    console.log('I will not run since animal !== "Dog"'); break;
    case 'Cat':
    console.log('I will not run since animal !== "Cat"'); break;
    default:
    console.log('I will run since animal does not match any other case');
}

//Section 11.3: If / Else If / Else Control///////////////////////////////
var i = 0;
var j = 0;
if (j < 1) {
console.log("i is smaller than 1");
}

if (i < 1) {
    console.log("i is smaller than 1");
} 
else {
        if (i < 2) {
        console.log("i is smaller than 2"); 
        } 
        else {
                console.log("none of the previous conditions was true");
         }
}

//Chapter 12: Constructor functions

//Section 12.1: Declaring a constructor function

function Cat(name) 
{ 
    this.name = name;
    this.sound = "Meow";
}
let cat = new Cat("Tom"); 
console.log(cat.sound)
console.log(cat.name)

