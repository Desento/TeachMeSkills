'use strict'

// const styles = ['Jazz', 'Blues'];
// console.log('Styles', styles);
// styles.push('Rock&Roll');
// console.log('Styles', styles);
// styles[Math.floor(styles.length / 2)] = 'Classic';
// console.log('Styles', styles);
// styles.shift();
// console.log('Styles', styles);
// styles.unshift('Rap', 'Raggy');
// console.log('Styles', styles);

// function sumOfNumber(){
// const numbers = [];
// while (true) {
//     let value = prompt("Введите число", 0);
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }
// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// return sum;}
// alert(sumOfNumber());

// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);

// const animals = ['monkey', 'dog', 'cat'];
// console.log(animals[animals.length - 1]);
// console.log(animals.pop());

// const numbers = [5, 43, 63, 23, 90];
// let x = numbers.length;
// const y = 0;
// numbers.length = y;
// numbers.length = x;
// console.log(numbers);

// const numbers2 = [5, 43, 63, 23, 90];
// for ( let number of numbers) {
//     numbers2.pop();
// }
// console.log(numbers2);

// const students = ['Polina', 'Dasha', 'Masha'];
// console.log(students);
// students.pop();
// students.push('Borya');
// console.log(students);
// students.shift();
// students.unshift('Andrey');
// console.log(students);

// const cats = ['Gachito', 'Tom', 'Batman'];
// for (let i = 0; i < cats.length; i += 1){
//     console.log(cats[i]);
// };
// for (let cat of cats) {
//     console.log(cat);
// }

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const numbers = evenNumbers.concat(oddNumbers);
// console.log(numbers);
// console.log(numbers.indexOf(8));

// const binary = [0, 0, 0, 0];
// const full = binary.join('1');
// console.log(full);

// let input = prompt('Input word');
// function palindrom (input) {
//     input = input.split('', input.length);
//     for ( let i = 0; i < input.length /2 ; i += 1){
//         if (input[i] !== input[input.length - 1 - i]) {
//             return 'It is not a palindrome';
//         } {return 'It is a palindrome';}
//     }
// }
// alert(palindrom(input));

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ];
// let sum = 0;
// let counter = 0; 
// for ( let i = 0; i < matrix.length; i += 1){
//     // sum += matrix[i];
//     for (let j = 0; j < matrix [i].length; j += 1){
//         sum += matrix [i][j];
//         counter += 1;
//         console.log(i, j, sum, counter)
//     }
// }
// console.log(sum / counter);

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
// const positiveNumber = [];
// const negativeNumber = [];
// for (let i = 0; i < mixedNumbers.length; i += 1) {
//     if (mixedNumbers[i] < 0) {
//         negativeNumber.push(mixedNumbers[i]);
//     } else if (mixedNumbers[i] > 0) {
//         positiveNumber.push(mixedNumbers[i]);
//     }
// }
// console.log(positiveNumber);
// console.log(negativeNumber);

// const arrey = [];
// const numbersInCub = [];
// for ( let i = 0; i < 5; i += 1) {
//     arrey.push(getRandomInt());
// }
// console.log(arrey);
// for ( let i = 0; i < arrey.length; i += 1) {
//     numbersInCub.push(Math.pow(arrey[i],3));
// }
// console.log(numbersInCub);
// function getRandomInt() {
//     return Math.floor(Math.random() * 100) ;
// }
