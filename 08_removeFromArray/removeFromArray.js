const removeFromArray = function(listOfThings, ...blackList) {
    //let revisedListOfThings = [];
    for (let i = 0; i < blackList.length; i++) {
        listOfThings = listOfThings.filter(item => item !== blackList[i]);
    }
    return listOfThings;
};

// Do not edit below this line
module.exports = removeFromArray;
