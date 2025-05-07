//fibonacci series 

const fibonacciSeries = (n) => {
    let fibSeries = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries;
};

document.writeln(fibonacciSeries(20));
document.writeln("<br>");
//palindrome check

const isPalindrome = (str) => {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
};
document.writeln("<br>");
document.writeln(isPalindrome("madam"));
document.writeln("<br>");
//prime number check

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};  
document.writeln("<br>");
document.writeln(isPrime(29));
document.writeln("<br>");
//counnt vowels

const countVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
};

document.writeln(countVowels("aeiou"));


//count consonants

const countConsonants = (str) => {
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l','m', 'n', 'p', 'q', 'r','s', 't', 'v', 'w', 'x', 'y', 'z'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (consonants.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
};

document.writeln("<br>");

document.writeln(countConsonants("abcdefghijklmnopqrstuvwxyz"));
