const sumAll = function(num1, num2) {
    let sum = 0, big, small;
    
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    } 
    
    num1 <= num2 ? [num1, num2] = [num1, num2] : [num1, num2] = [num2, num1];
    for (let i = num1; i <= num2; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
