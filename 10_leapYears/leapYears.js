const leapYears = function(year) {

  let santaTracker = false;

  console.log(year);

  if (year % 4 === 0) {
    
   santaTracker = true;

  };

  if (year > 99 && year % 100 === 0) {

    if (year % 400 === 0) {
      return true;
    }

    santaTracker = false;

  }


  return santaTracker;



  

};

// Do not edit below this line
module.exports = leapYears;
