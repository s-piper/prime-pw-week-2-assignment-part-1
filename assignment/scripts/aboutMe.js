// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name

let firstName = 'Stephen';
  console.log('My first name is', firstName);

// 2 - Create a second variable called `lastName` and assign it the value of your last name

let lastName = 'Piper';
  console.log('My last name is', lastName);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)

let fullName = `${firstName} ${lastName}`;

// 4 - Console log the value of `fullName`

  console.log('My full name is', fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.

let luckyNumber = 2; //changed from 73 to 2

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

  console.log(`My name is ${fullName}, and I think ${luckyNumber} is a winner!`);

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)

let adventurous = true;
  console.log('I like adventures:', adventurous);

// 8 - Create a variable named `food`, and set its value to a string of your favorite food

let food = 'chorizo torta';
  console.log(`My favorite food is a ${food} but it's pretty messy to eat!`);

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have

let pets = 0;
  console.log('I have this many pets:', pets);

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has

let friendsPets = 3;
  console.log(`My friend has ${friendsPets} furry friends.`);

// 11 - Add two pets to your `pets` variable

friendsPets += 2;
  console.log(`They're thinking about adding a couple more but I think ${friendsPets} is too many.`);

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice

const allowedPets = 4;
  console.log(`The most they should have is ${allowedPets}.`);

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"

if (adventurous === true) {
  console.log('Adventures are great!');
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"

if (luckyNumber === 2)
if (adventurous === true) {
  console.log('Roll the dice!');
}

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if (pets < allowedPets) {
  console.log('I can have more pets!');
}
  else if (pets === allowedPets) {
    console.log('I have enough pets');
  }
  else if (pets > allowedPets) {
    console.log('Oh no, I have too many pets!');
  }

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.

let mostPets

if (friendsPets >= pets) { mostPets = friendsPets

}
else mostPets = pets

console.log(`Who knew it was so confusing to count ${mostPets} pets!`);


// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!

switch (true) {
  case pets > friendsPets:
    console.log('All the pets',pets);
    break;
  case pets <= friendsPets:
    console.log('Please', friendsPets);
    break;
  default:

}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

var risky = adventurous ? "Adventures are great!" : "How about we stay home?";
console.log(risky);
