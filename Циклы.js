'use strict';


let num = 50;

// while (num <= 55)  {
//     console.log(num);
//     num++;
// }

// let a = prompt ('Один из последних просмотренных фильмов', ''),
//     b = prompt ('На сколько оценете его?', '');
//       while ( a++ ) {
//       }
//       while (b++){
//       }
      
let a = prompt('Один из последних просмотренных фильмов', '');
      while (a < 1){
        console.log(a);
        a++;
      }
     







// do {
//      console.log(num);
//      num++;
// }while (num <=55);



for (let i = 1; i < 10; i++) {
    if (i == 6) {
        //break;
        continue;
    }

    console.log(i);
}