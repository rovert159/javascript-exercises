const reverseString = function(string) {
    array = string.split('');
    newString = '';
    for (let i = array.length; i > 0; i--) {
        newString += array[i-1];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
