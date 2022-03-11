'use strict'

// let first = 'true';
// let second = false;
// let third = 17;
// let fourth = undefined;
// let fifth = null;
// console.log(typeof(first), typeof(second), typeof(third), typeof(fourth), typeof(fifth));

// let height = 15;
// let width = 20;
// if (width > height) {
//     console.log(width);
// } else {
//     console.log(height);
// }

// let i = 1;
// while(i <= 20) {
//     if(i % 3 == 0){
//         console.log(i);
//     }
//     i+=1;
// }

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shoulGoToWork;
shoulGoToWork = key && documents && pen && (apple || orange);
console.log(shoulGoToWork);

let num = +prompt('Input a number');
if ((num % 3 == 0) && (num % 5 == 0)) {
    console.log('FizBuz');
} else if ((num % 3 == 0) && (num % 5 != 0)){
    console.log('Buz');
} else if ((num % 3 != 0) && (num % 5 == 0)){
    console.log('Fiz');
}

// let age = +prompt('How old are you?');
// if (age > 18) {
//     alert('You can drink a beer');
// } else if (age >= 16) {
//     alert('You can drink only Coca');
//     alert('But you can smoke a sigarete, but dont tell you mum');
// } else {
//        alert('You can drink only Coca');
// }

// let result = prompt('Choose direction. South, north, west or east.')
// switch (result){
//     case 'south': {
//         alert('Down south you will find happiness');
//         break;
//     }
//     case 'north': {
//         alert('Go north you’ll find a lot of money');
//         break;
//     }
//     case 'west': {
//         alert('Go west and find a true friend');
//         break;
//     }
//     case 'east': {
//         alert('East you will become a developer');
//         break;
//     }
//     default:{
//         alert('Try again.');
//     }
// }

// let str = prompt('Input your name.');
// for (let i = 0; i <=str.length; i += 1) {
//     if (!str[i]) {
//         continue;
//     } else if (i == 0 || str[i - 1] == ' ') {
//         str = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1);
//     } else {
//         str = str.substring(0, i) + str[i].toLowerCase() + str.substring(i + 1);
//     }
// }
// alert(str);

// let num = +prompt('Input number');
// let subtraction = +prompt('How much to subtrac?');
// let addition = +prompt('How much to add?');
// let multiplication = +prompt('Multiply by?');
// let division = +prompt('Divide by?');
// let result = (((num - subtraction) + addition) * multiplication) / division;
// alert(`(((${num} - ${subtraction}) + ${addition}) * ${multiplication}) / ${division} = ${result}`);

// let height = +prompt('Choose heigth of piramidas');
// let str = '';
// let hash = '#';
// for (let i = 0; i < height; i += 1){
//     str += hash;
//     console.log(str);
// }
