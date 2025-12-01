const add = function(a, b) {

  return a + b;
	
};

const subtract = function(a, b) {

  return a - b;
	
};

const sum = function(a) {


  return a.reduce((total, num) => total += num, 0);

  

  


  /*

  let total = 0;

  for (let i = 0; i < a.length ; i++) {

    total += a[i];

  }

  return total;

  */
	
};

const multiply = function(a) {

  return a.reduce((total, num) => total *= num, 1);
  

};

const power = function(a, b) {

 return a ** b;
	
};

const factorial = function(a) {

  


  let total = 1;

  for (let i = a; i > 0; i--) {

    total *= i;

  }

  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
