
console.log('function.js');

function functionName(arguments){
    //do sth
    return returnValue;

}

function myFunction(){
    console.log('funcion called');
}

myFunction();
myFunction();
myFunction();
myFunction();

function logMessage(a){
    console.log("Value to log" + a);
}

logMessage('hello');
logMessage('bye');
logMessage('sth else');

// global variable
var b = 1;


/* Task:
- write a function to incremenet the value b
- log the results
- run the function several times */

function myFunctionInc(){
    b++;
    //b = b+1;
    console.log(b);
}

myFunctionInc();
myFunctionInc();
myFunctionInc();

function addNumbers(a){
    return a+b;
}

console.log(addNumbers(3));
console.log(addNumbers(7));
console.log(addNumbers(654543454));

/*Task:
- write a function to multiply 2 numbers
- pass both numbers to function
- log the result */

function mulFunction(a,c){
    return a*c;
}

console.log(mulFunction(3,46));
console.log(mulFunction(554,2));
console.log(mulFunction(7554,9999));

//
function myFormula(a,c,e){
    var d = a+c*b;
    b++;
    return d-e;
}
console.log(myFormula(231,44,2));

//
var testPersonObject = {
    firstName: "uuuu",
    lastName: "hahahah"
}

var testPersonObject2 = {
    firstName: "ddddd",
    lastName: "eeeee"
}

console.log(testPersonObject);

function addLesson(obj){
    obj.course = "JavaScript";
}

addLesson(testPersonObject);
addLesson(testPersonObject2);

console.log(testPersonObject);
console.log(testPersonObject2);

/* Task:
- return your houses objects
- write a function to add the value to the property
- update all your houses
- log the houses */

// global var
//var x = "GLOBAL";
const GLOBAL_VARIABLE = "GLOBAL";

function variableScopeTest(){
    //local var
    var localVar = "LOCAL";
    console.log(localVar);
}

console.log("1" + GLOBAL_VARIABLE);
variableScopeTest(); //logs our global var
console.log("5" + GLOBAL_VARIABLE);

/* Task:
- write a function to square a number
- return the result 
- take the input from a user
- call the function and pass the user's input
- log */

function squareNum(num){
    console.log(num**2);
}

document.getElementById("button-3").addEventListener('click', function() {
    var myNum = prompt('Enter a number'); 

    squareNum(myNum);
});







