'use strict'

// let a = +prompt('Choose a');
// let b = +prompt('Choose b');
// function min(){
//     if (a < b) {
//         return (a);
//     } else {
//         return (b);
//     }
// }
// let result = min()
// result = min(a, b)
// alert(result);

// let str = prompt();
// function found(){
//     let n = 0;
//     for (let i = 0; i < str.length; i += 1) {
//         if ( str[i] === 'e' ||  str[i] === 'a' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             n += 1;
//         }
//     }
//     return n;
// }
// let result = found()
// alert(result);

// function palindrom(str){
//     for (let i = 0; i < str.length / 2; i += 1) {
//         if ( str[i] !== str[str.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// alert(palindrom('anna'))
// alert(palindrom('abcba'))
// alert(palindrom('zkscslzkuvhlz'))

// function fibonashi(n){
//     return n <= 1 ? n : fibonashi(n - 1) + fibonashi(n - 2);
// }
// alert(fibonashi(14))
// alert(fibonashi(34))
// alert(fibonashi(3))

// function getSum(n){
//     return n === 1 ? 1 : n + getSum(n - 1);
// }
// alert(getSum(100));

// function credit(n){
//     return n * 0.17 * 5;
// }
// alert(credit(5000));

// function trimString(str, from, to){
//     let result = '';
//     str = String(str);
//     for ( let i = from; i <= to; i +=1) {
//         result = result + str[i];
//     }
//     return result;
// }
// alert(trimString('sieuhfsliehfslfeslef',3,7));

// function getSumNumbers(n){
//     let result = 0 ;
//     while (n > 0) {
//         result += n % 10
//         n = Math.floor(n / 10)
//     }
//     return result;
// }
// alert(getSumNumbers(2021));

// function getSum(a, b) {
//    return a === b ? a : a + getSum(a + 1, b)
// }
// alert(getSum(-1, 2));

// function fooboo(shouldUseFirstFunction, foo, boo) {
//     return shouldUseFirstFunction ? foo() : boo()
//     // }
// const foo = function() {
//     console.log("i'm foo");
// }
// const boo = function() {
//     console.log("I'M BOO")
// }
// alert(fooboo(true, foo, boo));

// function triangle(a, b, c){
//     return a + b > c && a + c > b && b + c > a ? true : false;
// }
// alert(triangle(4, 5, 8));

// function findMyChocolat(n,m){
//     return n > 0 && m > 0 ? ((n - 1) * m) + (m - 1) : 0;
// }
// alert(findMyChocolat(3, 5));

// let balance = +prompt('Input your balance');
// const TAX = 0.23;
// const MOBILE_PRICE = 99.99;
// const ACCESSORY_PRICE = 9.99;
// let amount = 0;
// let startShopping = confirm(`Only TODAY you can buy a new PHONE by ${MOBILE_PRICE}$ and accessory by ${ACCESSORY_PRICE}$. Do you want to star shopping? In our country tax is ${TAX}`);
// if (!startShopping) {
//     alert('We are so sorry you are leaving :(');
// }   while (amount < balance) {
//     let offerMobile = confirm('Do you want to buy a mobile?');
//         if (!offerMobile) {
//             break;
//         } amount += MOBILE_PRICE;
//         alert('Amount is ' + formatAmount(amount) + ' without TAX');
//         let offerAccessory = confirm('Do you want to buy an accessory?');
//             if (!offerAccessory){
//                 break;
//             }
//             amount += ACCESSORY_PRICE;
//             alert('Amount is ' + formatAmount(amount) + ' without TAX');
//     }
//     let lack = balance - amount;
//     amount = amount + calculateTax( amount );

//     if (amount < balance) {
//         alert('Сongratulation! You spend in our store ' + formatAmount(amount));
//     } else {
//         alert('Unfortunately, you havent got enough money. You need ' + formatAmount(lack) + ' more :(')
//     } 
// function calculateTax(amount) {
// 	return amount * TAX;
// }
// function formatAmount(amount) {
// 	return amount.toFixed(2) + "$";
// }
