/***
 * sample-input: I am learning Programming to become a programmer
 

    sample-output: Programming
 */


    function biggerOne(str){
        let words = str.split(" ");
        let largestWord = "";
        for(let i = 0; i < words.length; i++){
            if(words[i].length > largestWord.length){
                largestWord = words[i];
            }
        }
        return largestWord;
    }
    const str = "I am learning programming to become a programmer";
    const result = biggerOne(str);
    console.log(result);