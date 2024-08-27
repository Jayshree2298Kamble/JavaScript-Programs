const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`******************Assignment on forEach loop*********************`);
console.log(`-----------------------1.--------------------------`);

arrayNumbers.forEach((element,index)=>{
    console.log(`index no is :${index},element is: ${element}`);   
});

console.log(`-----------------------2.--------------------------`);
const newArray=[];
arrayNumbers.forEach((element,index)=>{
    if (element>0) {
        newArray.push(element);        
    }   
});
console.log(`Positive numbers are: `);

newArray.forEach((element)=>{
    console.log(element);
});


console.log(`-----------------------3.--------------------------`);
const newArray1=[];
arrayNumbers.forEach((element,index)=>{
    if (element<0) {
        newArray1.push(element);        
    }   
});
console.log(`Negative numbers are: `);

newArray1.forEach((element)=>{
    console.log(element);
});








console.log(`-----------------------4.--------------------------`);
const newArray2=[];
arrayNumbers.forEach((element,index)=>{
    if (element%2==0) {
        newArray2.push(element);        
    }   
});
console.log(`Even numbers are: `);

newArray2.forEach((element)=>{
    console.log(element);
});


console.log(`-----------------------5.--------------------------`);
let sum=0;
arrayNumbers.forEach((element,index)=>{
        sum=sum+element;  
});
console.log(`Sum of all numbers are: ${sum} `);


console.log(`-----------------------6.--------------------------`);
arrayNumbers.forEach((element,index)=>{
    if (element>0) {
        console.log(`index no is :${index},element is: ${element}`);  
        
    }
});
