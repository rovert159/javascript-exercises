const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1) && num1 >= 0)) {
        return 'ERROR'
    } // Check to make sure the first variable is a positive non-decimal number

    if (!(Number.isInteger(num2) && num2 >= 0)) {
        return 'ERROR'
    } // Check to make sure the second variable is a positive non-decimal number

    let num3 = 0;

    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            num3 += i;
        } // Starts at the first variable looping through every integer up until
        // the second integer adding everything up into a third variable
    }
    else {
        for (let i = num2; i <= num1; i++) {
            num3 += i;
        } // Starts at the first variable looping through every integer up until
        // the second integer adding everything up into a third variable
    }

    return num3;
};

// Do not edit below this line
module.exports = sumAll;
