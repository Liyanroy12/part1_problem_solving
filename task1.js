/***
 * Write a function to convert temperature from Celsius to Fahrenheit.
 */

function celsiusToFaherenhit(celsius){
    const convert = (9/5 * celsius) + 32;

    return convert;
}
const total = celsiusToFaherenhit(30);
console.log(total);