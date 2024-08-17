// console.log(`**********************Assignment 1***************************`);

// const str1="Hello,world!";
// const length1=str1.length;
// console.log(`The length of the string" ${str1}"  is : ${length1}`);
// const str2="Javascript is the language of internet";
// const length2=str2.length;
// console.log(`The length of the string ${str2} is : ${length2}`);

// console.log(`**********************Assignment 2***************************`);
// function getLastCharacter(str) {
//             return str.charAt(str.length-1);
// }
// const str1="Hey,My Friend,Programming Language";
// const str2="I am learning logical programs";
// const str3="React";
// console.log(`The last character of th string  "${str1}" is : ${getLastCharacter(str1)}`);
// console.log(`The last character of th string  "${str2}" is : ${getLastCharacter(str2)}`);
// console.log(`The last character of th string  "${str3}" is : ${getLastCharacter(str3)}`);

// console.log(`**********************Assignment 3***************************`);
// function getFirstCharacter(str) {
//             return str.charAt(0);
// }
// const str1="React";
// const str2="Elon musk";
// const str3="Apple founder is stew job";
// console.log(`The First character of th string  "${str1}" is : ${getFirstCharacter(str1)}`);
// console.log(`The First character of th string  "${str2}" is : ${getFirstCharacter(str2)}`);
// console.log(`The First character of th string  "${str3}" is : ${getFirstCharacter(str3)}`);

// console.log(`**********************Assignment 4***************************`);
// function containsUI(str) {
//             return str.includes('UI');
// }
// const str1="React-UI Developer";
// const str2="UI Developer";
// const str3="Front End and Backend technologies";

// console.log(`Does the string "${str1}" is contains UI : ${containsUI(str1)}`);
// console.log(`Does the string "${str2}" is contains UI : ${containsUI(str2)}`);
// console.log(`Does the string "${str3}" is contains UI : ${containsUI(str3)}`);

// console.log(`**********************Assignment 5***************************`);
// function splitString(str,delimeter) {
//     return str.split(delimeter);
// }
// const str1="Apple, Banana,Mango";
// const str2="Stew,John,Elon,Bill";

// const res1=splitString(str1,',');
// console.log(`The array of sub string from ${str1} is : `,res1);
// const res2=splitString(str2,',');
// console.log(`The array of sub string from ${str2} is : `,res2);

console.log(`**********************Assignment 6***************************`);
console.log(`1. Reverse the string using any existing methods`);

let original1 = "Software";
let reversed1 = original1.split("").reverse().join("");
console.log(`The Reversed string  "${original1} "  is : `, reversed1);

let original2 = "UI Developer";
let reversed2 = original2.split("").reverse().join("");
console.log(`2. Reverse the string without using predefined methods."${original2}"`,reversed2);
function reverse(str) {
  let reversed3 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed3 += str[i];
  }
  console.log(`The Reversed string  "${str} "  is : `, reversed3);
}
reverse("Web Developer");
reverse("Billion Dollar");
reverse("Java");
