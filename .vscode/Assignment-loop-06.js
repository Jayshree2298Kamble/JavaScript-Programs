console.log("****************1*******************");

var word="I am very good IT Develpoer";
var vowels="aeiou";
var vowelcount=0;
for (let index = 0; index < word.length; index++) {
    var char=word.charAt(index);
    char=char.toLowerCase();
    if (vowels.includes(char)) {
        vowelcount++;
    }
    
}
console.log(`Total number of vowels is : ${vowelcount}`);
console.log("****************2*******************");
var cubeSum= function cube(num) {
    let sum=0;
    for (let i = 1; i<=num; i++) {
        sum+=i**3;
       
    }
    return sum;
    
}
console.log(`sum of cub of numbers from 1 to 5 : ${cubeSum(5)}`);
console.log("****************3*******************");
var str1="Hard work always pays back";
var str2="Soon I will be UI IT Champ";

function oddPoditionedChars(str) {
    for (let index = 0; index < str.length; index++) {
        
        var char=str.charAt(index);
        if (index%2==1 && char!=" ") {
            
            console.log(char);
        }
        
    }
}
console.log("===========odd position of char from string1========");

oddPoditionedChars(str1);
console.log("===========odd position of char from string2========");
oddPoditionedChars(str2);

