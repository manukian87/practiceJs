"use strict";

// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('error2');
// } else {
//     console.log('ok!');
// }
// (num === 49) ? console.log('ok!') : console.log('error');

// // const num = 100;

// // switch(num) {
// //     case 49:
// //         console.log('error');
// //         break;
// //     case 100:
// //         console.log('error2');
// //         break;
// //     case 50:
// //         console.log('ok)');
// //         break;
// //     default :
// //         console.log('noooo(');
// //         break;
// // }

// // let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }
// // let num = 50;
// // for (let i = 1; i < 8; i++) {
// //     console.log(num);
// //     num++;
// // }

// // for (let i = 1; i < 8; i++) {
// //     if (i === 6) {
// //         // break;
// //         continue;
// //     }
// //     console.log(i);
// // }
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(8, 10));
// console.log(calc(5, 2));

// function ret() {
//     let num = 50;

//     return num;
// }
// const anotheNum = ret();
// console.log(anotheNum);

// const logger = function() {
//     console.log('hello');
// };
// logger();

// const cal =(a, b) => a + b;

// const str = "teSt";
// console.log(str.toLowerCase());


// const arr = [1, 2, 3];
// console.log(arr.length);


// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "5656765656565";
// console.log(logg.substr(12, 5));
// console.log(logg.slice(-5, -2));
// console.log(logg.substring(6, 11));
// // console.log(calc));
// // console.log(logg.slice(6));
// const num1 = 12.5;
// console.log(Math.round(num1));

// const test = '17.2px';
// console.log(parseFloat(test));
// console.log(parseInt(test));

// function first () {
//      setTimeout ( function() {
//          console.log(1);
//      },500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();


// function learnJs(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJs('JavaScript', done);


// // const options = {
// //     name: 'test',
// //     width: 1024,
// //     height: 1024,
// //     colors:{
// //         border: 'black',
// //         bg: 'red'
// //     },
// //     makeTest: function() {
// //         console.log('test');
// //     }
// // };
// // options.makeTest();
// // const {border, bg} = options.colors;
// // console.log(border);
// // console.log(Object.keys(options).length);

// // delete options.name;
// // console.log(options);
// // let counter = 0;
// // for (let key in options) {
// //     counter++;
// //     // if (typeof(options[key]) === 'object') {
// //     //     for (let i in options[key]) {
// //     //         console.log(`свойства ${i} имеет значение ${options[key][i]}`);
// //     //         counter ++;
// //     //     }
// //     // } else {
// //     //     console.log(`свойства ${key} имеет значение ${options[key]}`);
// //     // }
    
// // }
// // console.log(counter);


// const arra = [1, 2, 3, 6, 8, 9];
// // arra.pop();
// // arra.push(155);

// // console.log(arra);

// arra.forEach(function (item, i, arra) {
//     console.log(`${i}: ${item} внутри массива ${arra}`);

// });

// // for (let value of arra) {
// //     console.log(value);
// // }

// for (let i = 0; i < arra.length; i++) {
//     console.log(arra[i]);
// }



// const str = prompt("", "");
// const produts = str.split(", ");

// console.log(produts);

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

// const jonh = {
//     health: 100
// };
const jonh = Object.create(soldier);
// Object.setPrototypeOf(jonh, soldier);
jonh.sayHello();




