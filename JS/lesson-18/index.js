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
//     return n * (0.17 * 5);
// }
// alert(credit(5000));

// function trimString(str, from, to){
//     let result = '';
//     console.log(result)
//     str = String(str);
//     for ( let i = from; i <= to; i +=1) {
//         console.log(i)
//         console.log(result)
//         result = result + str[i];
//         console.log(str[i])
//         console.log(result)
//     }
//     return result;
// }
// alert(trimString('sieuhfsliehfslfeslef',3,7));

// function getSumNumbers(n){
//     let result = 0 ;
//     while (n > 0) {
//         result += n % 10
//         n = Math.floor(n/10)
//     }
//     return result;
// }
// alert(getSumNumbers(2021));

// function getSum(a,b){
//    return a === b ? a : a + getSum(a + 1,b)
// }
// alert(getSum(-1,2));

// function fooboo(n,x,y){
//     return n === true ? (function (){console.log(x);})() : (function (){console.log(y);})()
// }
// alert(fooboo(true,'foo','boo'));
