// object destructing
let person={
    name:"jays",
    age:"25",
    address:"pune"
}
let {name,address}=person;
console.log(name,address);
// array destructing
let fruit=["mango","apple","banana","jackfruit"];
let [fruit1,fruit2]=fruit;
console.log(fruit1,fruit2);
//string destructing with spread opertaror
let str="hiwelovejshi";
let[a1,a2,a3,a4,a5,...an]=str;
console.log(...an);
