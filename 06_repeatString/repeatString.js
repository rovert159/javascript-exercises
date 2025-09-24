const repeatString = function(string, num) {

    if (typeof string !== "string") return "ERROR, Your word is not a String";
    if (!(Number.isInteger(num) && num >= 0)) return "ERROR"
    // check to make sure valid variables were passed in

    let newString = '' // initiate a string

    for (let i = 0; i < num; i++) {
        newString += string;
    }
    // Adds a copy of string onto newString each iteration
    // Iterates a number of times equal to num

    return newString;

let word = 'bubble';
let digit = 6;

console.log(repeatString(word, digit));


};

// Do not edit below this line
module.exports = repeatString;
