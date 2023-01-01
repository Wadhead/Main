"use strict";

const options = {
    neme: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bd: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }

};

options.makeTest();

const{border, bd} = options.colors;
console.log(border);

console.log(Object.keys(options).length);



// console.log(options.neme);

// delete options.neme;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//      for (let i in options[key]){
//         console.log(`Свойство ${i}, имеет значение ${options[key] [i]}`);
//         counter++;
//      }
//     }else{
//         console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
   
 
// }
// console.log(counter);

