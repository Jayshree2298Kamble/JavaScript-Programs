const array=[20,31,40,25,23,11,29,9,60,2,11];
const lengthArray=array.length;
console.log(`1. Total number of element or length of array : ${lengthArray}`);
const firstElement=array[0];
const lastElement=array[array.length-1];
console.log(`*********************************************************************`);

console.log(`2.  First Element : ${firstElement} :  Last Element : ${lastElement}`);
const last3=array.slice(-3);
console.log(`*********************************************************************`);
console.log(`3. Third last element of array`);
console.log(last3);
let even = [];
for(let i = 0; i < array.length; i++) {
       if (array[i] % 2 == 0)
       even.push(array[i]);
}
console.log(`*********************************************************************`);
console.log(`4. Even numbers in an array are: ${even}`);
let odd = [];
for(let i = 0; i < array.length; i++) {
       if (array[i] % 2 == 1)
       odd.push(array[i]);
}
console.log(`*********************************************************************`);
console.log(`5. Even numbers in an array are: ${odd}`);
let numArray=[];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%5===0) {
        numArray.push(array[index]);
    }
}
console.log(`*********************************************************************`);
console.log(`9. finding numbers which are multiple of 5 : ${numArray}`);
const indexOf115=array.indexOf(115);
    if (indexOf115==-1) {
        console.log(`*********************************************************************`);
        console.log(`10. is number 115 is available : `,false);
        
    }else{
        console.log(`*********************************************************************`);
        console.log(`10. is number 115 is available : `,true);
        
    }
const indexOf23=array.indexOf(23);
    if (indexOf23==-1) {
        console.log(`*********************************************************************`);
        console.log(`11. is number 23 is available : `,false);
        
    }else{
        console.log(`*********************************************************************`);
        console.log(`11. is number 23 is available : `,true);
        
    }

