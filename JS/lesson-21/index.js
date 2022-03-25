'use strict'

// let array = [{a: 1}, {id: 2}, {id:3}, {}];
// let result = array.filter((e) => e.id);
// console.log(result);

// function mean(result){
//     return result.reduce((sum, value) => sum += value) / result.length
// }
// console.log(mean([7, 7, 8, 10, 6]));
// console.log(mean([5, 6, 5, 10, 10]));
// console.log(mean([9, 9, 10, 10, 10]));

// console.log([1,2,3].map((v) => v*2));

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function output(v){
//     console.log(v)
//     return v;
// }
// fibonacci.forEach(output);
// fibonacci.forEach((e) => console.log(e));

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// const newArray = users.map((v, i) => v ='member ' + (i + 1) + ': ' + v);
// console.log(newArray);
// function trasform(v, i){
//     v = 'member ' + (i + 1) + ': ' + v;
//     return v;
// }
// const newArray2 = users.map(trasform);
// console.log(newArray2);

// const numbers = [7, -4, 32, -90, 54, 32, -21];
// function filter(v){
//     if (v > 0) return v;
// }
// const newNumbers = numbers.filter(filter);
// console.log(newNumbers);
// const newNumbers2 = numbers.filter((v) => v > 0);
// console.log(newNumbers2);

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function sum(sum, v){
//     return sum + v;
// }
// const newArray = fibonacci.reduce(sum);
// console.log(newArray);
// const newArray2 = fibonacci.reduce((sum, v) => sum + v);
// console.log(newArray2);

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// function even(v){
//     if (v % 2 === 0) return v;
// }
// const firstEven = numbers.find(even);
// console.log(firstEven);
// const firstEven2 = numbers.find((v) => v % 2 === 0);
// console.log(firstEven2);

function Student(name, salary, rate){
    this.name = name;
    this.salary = salary;
    this.rate = rate
    this.credit = function(rate) {
        if (rate === 'A') {
            return credit = salary * 12;
        } else if ( rate === 'B') {
            return credit = salary * 9;
        } else if ( rate === 'C') {
            return credit = salary * 6;
        } else if ( rate === 'D') {
            return credit = salary * 0;
        }
    }
}
var students = [new Student('Anton', 100, 'A'), new Student('Evgenii', 100, 'A'), new Student('Ivan', 80, 'B'), new Student('Kostya', 70, 'C'), new Student('Sasha', 60, 'D')];
console.log(students);
var credits = students.reduce(students.credit);
console.log(credits);
