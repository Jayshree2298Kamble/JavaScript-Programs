function squareOfWordLength(sentence){

    console.log(`Given sentence is: ${sentence}`);

    var result = sentence.split(`${sentence}`);

    var len = result.length;

    var square = len * len;

    return square;

}

var result = squareOfWordLength("wowkwoke");

console.log(`Square of world length is: ${result}`);
console.log(`welcome`);
 



 


