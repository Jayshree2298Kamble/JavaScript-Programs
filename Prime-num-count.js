function isPrime(num) {

    for (let index = 2; index < num; index++) {

        if (num % index == 0) {

            return false;
        }
    }
    return true;
}
const array=[3,9,7,6,19,29,53];
let count =0;
for (const element of array) {
    var res=isPrime(element)
    if (res==true) {
        
        count++;
    }
}
let data=count;
console.log(`array value is : ${array}`);

console.log(`Total count is :  ${data}`);

// const str1="Revision is the mother of success";
// const str2="JavaScript is the language of internet world";
// const countSpaces = (str = '') => {
//    let count = 0;
//    for(let i = 0;
//    i < str.length; i++){
//       const el = str[i];
//       if(el !== ' '){
//          continue; 
//         };
//          count++; 
//         };
//       return count;
// };
// console.log(`Total space in string is   "${str1}  " is :    ${countSpaces(str1)}`);
// console.log(`Total space in string is   "${str2}  " is :    ${countSpaces(str2)}`);