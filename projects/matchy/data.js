/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Scorpaphin';
animal['name'] = 'Lester';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Squeek";
noises.push("Buuuhhhhh");
noises.unshift("Awooga");
noises[noises.length - 1] = "BARK BARK";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
noises[noises.length - 1] = animal.noises;
noises.push("Eek eek");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Dot notation - myObj.property;
 * Bracket notation - myObj['property'];
 * 2. What are the different ways of accessing elements on arrays?
 * You must use the index - myArray[i];
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var spider = { species: 'spider', name: 'Larry', noises: ['skitter', 'creep'] };
var goose = { species: 'goose', name: 'Gary', noises: ['HONK', 'CHRIP'] };
animals.push(spider);
animals.push(goose);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friendsList = [];
// We chose an array instead of an object because, it will be ONE property 'friends' which contains many values
function randomFriend(arr){
     return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomFriend(animals));

friendsList.push(
    randomFriend(animals).name
    );
console.log(friendsList);

goose['friends'] = randomFriend(animals);
console.log(goose);
/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
