'use strict';
if (4 == 9) {
    console.log('Ok!');
} else {    
    console.log('Error');

}


// if (num < 49) {
//     console.log('Error');
  
// }   else if (num > 100){
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }


// (num == 50) ? console.log('OK!') : console.log('Error');


const num = 50;

switch (num) { //Строгое соответствие
    case 49:
        console.log('NO');
        break;
    case 100:
        console.log('NO');
        break;
    case 51:
        console.log('YES');
        break;
    case 70:
        console.log('NO');
        break;
    default:
        console.log('Не сегодня');
        break;

}