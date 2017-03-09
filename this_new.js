// JavaScript adopted two keywords to expedite functions to generate objects: this and new:

function NinjaConstructor(name, prevOccupation) {
  var ninja = {}; // <-- PAY ATTENTION TO THIS LINE!
  ninja.name = name;
  ninja.prevOccupation = prevOccupation;
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
  return ninja; // <-- AND THIS LINE!
}

// The two lines we are drawing your attention to are the lines where we create the object called ninja and then return the object called ninja.

// this and new work in concert to eliminate those two lines!

// Stepping through process:

// 1. we can replace ninja with this:

// function NinjaConstructor(name, prevOccupation){
// 	var this = {};
// 	this.name = name;
// 	this.prevOccupation = prevOccupation;
// 	this.introduce = function() {
// 		console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
// 	}
// 	return this;
// }

// // 2. var this = {}; and return this; can and should be remove

// function NinjaConstructor(name, prevOccupation){
// 	this.name = name;
// 	this.prevOccupation = prevOccupation;
// 	this.introduce = function(){
// 		console.log("Hi my name is " + this.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
// 	}
// }


// 3. because the new keyword placed before invoking the function will do that for us:

function NinjaConstructor(name, prevOccupation){
	this.name = name;
	this.prevOccupation = prevOccupation;
	this.introduce = function(){
		console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
	}
}

var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
dylan.introduce();


// The new keyword creates the object “this” inside of our function and then returns it so that we can use it to create an object! 
// Now we don’t need to put var this = {} or return this in our constructor!


// One common pitfall uwing this:

console.log(this);
var nikki = NinjaConstructor('Nikki', 'Historian');

// What's nikki? 

// the code below can prevent the problems caused by not uwing new on a constructor (use it inside the constructor function):

if (!(this instanceof NinjaConstructor)) {
	return new NinjaConstructor(name, prevOccupation);
}

















