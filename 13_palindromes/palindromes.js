const palindromes = function (str) {

    // condition filter: alphanumerical
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

    // split into array
    const cleaned = str
        .toLowerCase()
        .split('')
        .filter((element) => alphanumerical.includes(element))
        .join(''); 

    const reverseCleaned = cleaned.split('').reverse().join('');

    return cleaned === reverseCleaned;


};



// Do not edit below this line
module.exports = palindromes;
