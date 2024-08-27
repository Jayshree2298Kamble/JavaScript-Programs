console.log(`*******************Arrow function****************`);
console.log(`--------------------1.--------------------`);

let show= ()=>{
    console.log("Good Morning,Today is monday");    
}
show();
console.log(`--------------------2.--------------------`);
let multiplication=(n1,n2,n3=1)=>{
    let mul=n1*n2*n3;
    console.log(`Multiplication is : ${mul}`);  
}
multiplication(5,5,2);
multiplication(10,4);
console.log(`--------------------3.--------------------`);
let display=(a,b,c,d,e)=>{
    console.log(`Addition is : `, a+b+c+d+e);
}

display(100,100,200,349,756);
display("I am","Learning","ES6","features","indepth");
