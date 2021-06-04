
//creates an array of all lowercase letters
let lowerletters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]
//initializes dastring to a blank string
let dastring =""
//this for loop repeats between 5-25 times and each time grabs a lowercase letter from the array "lowerletters" and 
//places it at the end of the string: dastring. after repeating a number of times, the loop ends and the string is placed in the console.log
for (let i = 0; i < getRandomInteger(5, 25); i++) {
    dastring = dastring + lowerletters[getRandomInteger(0,26)]
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);}
console.log(dastring)
