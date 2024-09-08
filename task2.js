/***
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

// function findNumber(numbers){
//     // console.log(numbers);
//     let duplicate = numbers[0];
//     let count = 0
//     for(const number of numbers){
//         // console.log(number);
//         if(duplicate === number){
//             count++;
//             // console.log(count);
//         }
//     }
//     return count
// }
// const find = findNumber(numbers);
// console.log(find);



const numbers = [5,6,11,12,98, 5]
function countNumber(numbers, find){
    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === find){
            count++
        }
    }
    return count;
}

const result = countNumber(numbers, 5);
console.log(result);

const result2 = countNumber(numbers, 25);
console.log(result2);