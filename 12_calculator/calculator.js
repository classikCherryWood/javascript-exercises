const add = function(...args) {
  let sum = args.reduce((prev, next) => prev + next, 0);
  return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(args) {
  if (!args){
    return 0;
  } else {
    return args.reduce((prev, next) => prev + next, 0);
  }
};

const multiply = function(args) {
  return args.reduce((prev, next) => prev * next, 1);   

};

const power = function(base, power) {
  return (base**power);
};

const factorial = function(num) {
  if (num === 0) return 1;
  else {
    let prod = 1;
    for (let i = num; i > 0; i--){
      prod *= i;
    }
    return prod;
  }
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
