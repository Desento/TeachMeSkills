'use strict'

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// console.log("Ann" in salaries);
// console.log(salaries);
// for (let i in salaries) {
//     delete salaries[i];
// }
// console.log(salaries);

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// };
// for (let i in student) {
//     console.log(i);
//     console.log(student[i]);
// }

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].green);

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey2: 664,
//     alexandra: 199
// }
// let sum = 0;
// let n = 0;
// for ( let i in salaries) {
//     sum += salaries[i];
//     n += 1;
// }
// let middle = sum / n;

// let userLogin = prompt('Input your login');
// let userPassword = prompt('Input your password');
// const userInfo = {
//     login: userLogin,
//     password: userPassword
// }
// let prove = confirm(`Are you sure? You login: ${userLogin} and password: ${userPassword}`);
// if (prove) {
//     alert('Welcome');
//     console.log(userInfo);
// }

// const formatting = {
//     0: 'Zero',
//     1: 'One',
//     2: 'Two',
//     3: 'Three',
//     4: 'Four',
//     5: 'Five',
//     6: 'Six',
//     7: 'Seven',
//     8: 'Eight',
//     9: 'Nine'
// }
// let score = prompt('Input score, like 2:5');
// let key, key2;
// key = +score[0];
// key2 = +score[2];
// score = formatting[key] + score.substring(1);
// score = score.substring(0, score.length - 1) + formatting[key2];
// console.log(score);

// let student1 = {
//     name: 'Polina',
//     age: 27,
// }
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }
// console.log(_.isEqual(student1, student2));

// const animals = {
//     cat: {
//        name: 'Енчик',
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
//  }
//  console.log(animals && animals.bird && animals.bird.name);
