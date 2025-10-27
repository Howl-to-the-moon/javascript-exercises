const repeatString = function(word, amount) {

  console.log(word);
  console.log(amount);
  let gooby = "";

  if (amount < 0) {
    return "ERROR";
  }

    for (let i = 0; i < amount ; i++) {
       gooby += word;
    }

    return gooby;

};





// Do not edit below this line
module.exports = repeatString;
