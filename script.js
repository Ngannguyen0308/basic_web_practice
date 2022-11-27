// alert('loaded from file');

document.getElementById("button-2").addEventListener('click', function() {
    alert('clicked 2!');
    // alert('click      ed \n 2!');
    console.log('clicked 3!'); //

});

document.getElementById("button-3").addEventListener('click', function() {
    //alert('clicked 3!');
    //console.log('clicked 3!'); //
    var myName = prompt('what is your name?'); 
    console.log(myName);
});

//task: collect the user's fav color log the response to the console.

//global variable
var myVar="";
// naming conventions (camelCase)
var myName="";
var _myName="";
var $myName="";
//boolean
var isTrue = false;
//multiple declerations
var myVar1 = "text", myVar2 = 222, myVar3 = "";

console.log(myVar1);
console.log(myVar2);
console.log(myVar3);



