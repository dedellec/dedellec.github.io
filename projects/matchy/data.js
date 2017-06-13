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
 animal.species = 'dog';
 animal['name'] = 'Ziba';
 animal.noises = [];
 console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'Woof';
noises.push('Growl');
noises.unshift('Whine');
noises[noises.length] = 'Beg';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push('Bark');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 *    Using bracket or dot notation
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 *    Using index positions or methods that add and subtract elements such as
 *    push or unshift
 *
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
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack','honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);
var pigeon = {
    species: 'pigeon',
    name: 'Perry',
    noises: ['squack','coo', 'flap']
};
var cat = {
    species: 'cat',
    name: 'Caroline',
    noises: ['meow','hiss', 'scratch']
};
animals.push(pigeon, cat);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
// We chose an array because we are simply creating an ordered list of friends
// without adding any additional characterisitcs

function random(){
    var min = 0;
    var max = animals.length;
    var randomFriend = Math.floor(Math.random() * (max - min + 1)) + min;
    return animals[randomFriend];
}

var randomFriend = random();
friends.push(randomFriend.name);
console.log(random());
console.log(friends);

duck.friends = friends;
console.log (duck);




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
