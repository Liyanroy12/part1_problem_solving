/***
 * Write a function to count the number of vowels in a string.
 */

// const str = 'i am a elder of you';
// function countString(str){
//     // console.log(str);
//     let count = 0;
//     const vowel = 'aeiouuAEIOU';
//     for(let i = 0; i < str.length; i++){
//         if(vowel.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// const result = countString(str);
// console.log(result);


function countVowel(str){
    const vowel = 'aeiouAEIOU';
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            count++;
        }
    }

    return count;
}
const str = "iamaboy";
const result = countVowel(str);
console.log(result);