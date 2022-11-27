console.log('object.js');
//first method
var myObject = new Object();

myObject.firstName ="ngan";
myObject.lastName ="nguyen";
myObject.school ="VNUK";
myObject.age ="214";

console.log(myObject);

// second method

var myObject2 = {
    firstName: "ngan",
    age: "43624"
}

console.log(myObject2);

//search objects
console.log(myObject['firstName']);

console.log(myObject.firstName);

//third method
function myPerson(a,b,c,d){
    this.firstName = a;
    this.lastName = b;
    this.school = c;
    this.age = d;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    };
    this.ageSquared = function() {
        return this.age * this.age;
    };
}

// much quicker to create new object
var myObjectD = new myPerson("ngan","nguyen","Vnuk","43624");

//
function addPrice(obj,p) {
    obj.price = p;
}

addPrice(myObject,9999);
console.log(myObject);


console.log(fullName);
console.log(ageSquared);
console.log(myObjectD);


var myObjectD = new myPerson("Another","Person","School","43624");
/* task: create a house object with constructor
add the follw properties
- location
- num_bedrooms
- num_bathrooms
- hasSwimingPool
- Create three houses and log
log only house locations.

add a method to your house object vd: House1.totalRooms();
*/

function myHouse(a,b,c,d) {
    this.location = a;
    this.bedrooms = b;
    this.bathrooms = c;
    this.swimmingPool = d;
    
}

var myObjectC = new myHouse("5253","hsdh","shsfsa","snjshfas");

console.log(myObjectC);

var myObjectE = new myHouse("5253","3","44","344");

console.log(myObjectE);

var myObjectI = new myHouse("5253","h","a","as");

console.log(myObjectI);






