'use strict';

 let num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 10;
    console.log(num);
}

showFirstMessage('Hello World');
console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(9, 6));
// console.log(calc(5, 5));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();


const calc = (a, b) => {
    console.log('1');
    return a + b;
};


function first () {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}


function done () {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);