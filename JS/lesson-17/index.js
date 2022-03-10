// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// console.log(c);
// console.log(d);
// console.log(a);
// console.log(b);

// let year = prompt('In what year was publish ECMAScript-2015?');
// if (year < 2015) {
//     alert('Its so early...')
// } else if (year > 2015) {
//     alert('Its so late...')
// } else {
//     alert('Its rigth!')
// }

// let num = prompt('Input number');
// if (num < 0) {
//     alert('-1')
// } else if (num > 0) {
//     alert('1')
// } else {
//     alert('0')
// }
// 
// 
// let a = +prompt();
// let b = +prompt();
// let result = a + b < 4 ? 'Мало': 'Много';
// console.log(result);
// 
// let login = prompt('Your login');
// if (login === 'Admin') {
//     let password = prompt('You password');
//         if (password === 'Im a boss'){
//             alert('Hello');
//         } else if (password == null) {
//             alert ('Canced');
//         } else {
//             alert('Wrong password');
//         }
// } else if (login == null) {
//     alert('Canced');
// } else {
//     alert('I dont know you');
// }
// 
// let n = prompt();
// for (let i = 1; i < n; i+=1) {
//     if (i % 2 !==0){
//         continue;
//     }
//     console.log(i);
// }
// let n = 0;
// while (n < 100) {
//     n = +prompt();
//     console.log(n);
// }
// let a = prompt('What do you want?');
// let result;
// switch (a) {
//     case '+': {
//         let a = +prompt();
//         let b = +prompt();
//         result = a + b;
//         alert(result);
//         break;
//     }
//     case '-': {
//         let a = +prompt();
//         let b = +prompt();
//         result = a - b;
//         alert(result);
//         break;
//     }
//     case '*': {
//         let a = +prompt();
//         let b = +prompt();
//         result = a * b;
//         alert(result);
//         break;
//     }
//     case '/': {
//         let a = +prompt();
//         let b = +prompt();
//         result = a / b;
//         alert(result);
//         break;
//     }
//     case '^': {
//         let a = +prompt();
//         let b = +prompt();
//         result = a ** b;
//         alert(result);
//         break;
//     }
// }
// let a = prompt('What do you use?');
// switch (a) {
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera': {
//         alert('Мы поддерживаем эти браузеры');
//         break;
//         }
//     case 'Edge': {
//         alert('У тебя Edge!');
//         break;
//     }
// }
// let a = +prompt('Skolko vesit tvoya sobaka?');
// if (a >= 15 ) {
//     alert('Моя собака делает ГАВ-ГАВ');
// } else if (a < 15 && a > 2) {
//     alert('Моя собака делает гав-гав');
// } else if (a <= 2) {
//     alert('Моя собака слишком маленькая, чтобы она что-то делала');
// }
// 
// let n = +prompt();
// for (let i = 2; i <= n; i++) { 
//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) 
//     continue ; 
//   }
//   console.log(i); 
// }
