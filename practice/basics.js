// Begin by installing babel-cli. This will
// give us access to running babel from the command
// line and allow us to 'watch' files. We'll
// also want to install the es2015 preset which
// will allow us to translate from ES6 -> ES5.
// `npm install -g babel-cli babel-preset-es2015`

// Create two new folders inside this
// 'practice' folder. One should be called 'es6'
// and the other should be called 'es5'.

// We're then going to watch 'es6' for changes
// and we'll compile the translated files
// inside of es5.
//`babel --presets es2015 --watch practice/es6/ --out-dir practice/es5/`

// Now move this js file inside of es6
// and save it. You should see a similarly
// named file show up in the es5 folder!

// Create two panes in your editor with each
// of the js files from different folders.
// Depending on your editor, as you make changes
// you should automagically see the compiled
// file change as well.

/////////////////////////////////////////////////

// Let's start with strings. You can write
// multi-line strings and interpolate in ES6
// using back ticks.


// We can define variables differently as well.
// Keep in mind though, there are some
// differences.


// We can also do what is called destructuring
// to assign arguments. This is pretty neat
// when we're dealing with objects and arrays
// where we know what we're getting back.


// Some of the most exciting changes are those
// to how we write functions using the => syntax
// and with destructuring/defaulting arguments.


// We can also define classes in ES6 as a class
// which will then be turned into an object.


/////////////////////////////////////////////////

// Rewrite the following functions using as much
// of the ES6 syntax as possible.

// If all numbers in the row add up to greater
// than 10, multiply all numbers and return the
// product of those rows.

var myMatrix = [[6,2,3],
                [5,4,4],
                [2,6,1]];
var matrixFn = function (matrix) {
  return matrix.filter(function (row) {
    return row.reduce(function (prev, next) {
      return prev + next;
    }) > 10;
  }).map(function (row) {
    return row.reduce(function (prev, next) {
      return prev * next;
    });
  });
}

console.log('matrixFn:', matrixFn(myMatrix));
// > matrixFn: [ 36, 80 ]


// Print out all the items in the menu on separate
// lines so that the name and price of the item
// show. For popularity, put a star for each number.
// (e.g. 'BBQ Chicken: 7.99 (*****)')

var menu = [{ name: 'BBQ Chicken', price: 7.99, popularity: 5 },
            { name: 'Spring Mix', price: 5.99, popularity: 2 },
            { name: 'Pasta Primavera', price: 8.99, popularity: 4 }];

for ( var i = 0; i < menu.length; i++ ) {
  var stars = '';
  for ( var j = 0; j < menu[i].popularity; j++ ) {
    stars += '*';
  };

  var line = menu[i].name + ': ' + 
             menu[i].price + ' (' +
             stars + ')';
  console.log(line);
};

// > BBQ Chicken: 7.99 (*****)
// > Spring Mix: 5.99 (**)
// > Pasta Primavera: 8.99 (****)


// Multiply all the numbers that come in to the
// function multiplyAll and return the product.

var multiplyAll = function () {
  var args = arguments;
  var keys = Object.keys(arguments);
  return keys.map(function (key) {
    return args[key];
  }).reduce(function (prev, curr) {
    return prev * curr;
  });
}

console.log('multiplyAll:', multiplyAll(5,4,3,2,1));
// > multiplyAll: 120

// Define a Human Class that has an age property
// and can say a phrase. Create a new class
// called Warrior that also has a strength
// property ( which defaults to 0 ) and
// has an attack function. If the Human / Warrior
// tries to speak but nothing is provided for 
// them to say, have them say 'Hello there.'

var Human = function () {
  this.age = 0;
};

Human.prototype.speak = function (phrase) {
  return phrase || 'Hello there.';
};

var Warrior = function () {
  this.strength = 0;
};

Warrior.prototype = new Human();


Warrior.prototype.attack = function () {
  return this.strength * 10;
}

var human = new Human();
human.age = 30;
console.log('human age:', human.age);
console.log('speak:', human.speak());
console.log('speak hi:', human.speak('hi'));
// > human age: 30
// > speak: Hello there.
// > speak hi: hi

var warrior = new Warrior();
warrior.strength = 10;
console.log('warrior speak:', warrior.speak());
console.log('warrior speak rawr:', warrior.speak('rawr'));
console.log('warrior attack:', warrior.attack());
// > warrior speak: Hello there.
// > warrior speak rawr: rawr 
// > warrior attack: 100
