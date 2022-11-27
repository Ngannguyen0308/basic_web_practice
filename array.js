/* 3 different ways to declare arrays

- implict literal 
- default constructor
- parameterised constructor
*/

// method 1
var myArray1 = ["one", "two", "23823","four"];

console.log(myArray1);

console.log(myArray1[0]);

//method 2(default cons)
var myArray2 = new Array();
var myTest1="Hello";
var myTest2 = 7777;
var myBoolean = false;
var myArray2 = new Array(
    "one",
    "two",
    "2144",
    "6757",
    "six",
    myTest1,
    myTest2,
    myBoolean
);

console.log(myArray2);

//method 3

var myArray3 = new Array(5);

console.log(myArray3);

console.log(myArray3.length);

myArray3[1] = "my name";

console.log(myArray3);

//------------

console.log(myArrayB);

myArrayB = myArrayB.pop();//removes the last ele 

console.log(myArrayB);

myArrayB = myArrayB.shift() // removes the first ele

console.log(myArrayB);

myArrayB[3]='new value';

console.log(myArrayB);

//remove y item after index x:
myArrayB.splice(2,1);//AddsRemoves elements from an array

console.log(myArrayB);

myArrayB.unshift('add new item at the start');//Adds new elements to the beginning of an array, and returns the new length

console.log(myArrayB);

/* task:
- create an array with the days of the week
- log to console
- remove the last item and log
- add new value "new day" to start and log
- add value "weekend" to the end of the arr
- find the index of thursday
- sort the arr and log
*/

var myArrDay = new Array(
    " Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    " Saturday",
    "Sunday"
)

console.log(myArrDay.length);

console.log(myArrDay.indexOf('Not is ar'));

// find the index ò a value
//or find out if the value is in the ar

myArrDay.sort();

console.log(myArrDay);

myArrDay.reverse();// sort ỉneverse

console.log(myArrDay);

myArrDay.toString();//change to string

console.log(myArrDay);

myArrDay.join(':)'); // change the seperator








