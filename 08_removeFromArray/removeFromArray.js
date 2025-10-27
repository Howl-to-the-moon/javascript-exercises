
//the ... makes it so if eed be that argument can be an array
//of multiple arguements
const removeFromArray = function(array, ...remove) {

    // the ! flips the .includes on it's head

  return array.filter( item => !remove.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
