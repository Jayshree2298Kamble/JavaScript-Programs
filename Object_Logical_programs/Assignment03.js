// console.log(" How to use array that include and check an object against a property of an object");
// var students=[
//     {id:1,Name:"john doe",Grade:"A"},
//     {id:2,Name:"Mary jay",Grade:"B"},
//     {id:3,Name:"Kosy wey",Grade:"C"}

// ]
// function checkStudentsExist(id) {
//     return students.filter(student=>student.id===id).length>0
// }
// console.log(checkStudentsExist(2));
// console.log(checkStudentsExist(4));
// console.log("8.  How to add an object to an array in JavaScript");
// var fruits=['apple','banana','orange'];
// var newFruits={
//     name:'grape',
//     color:'purple'
// };
// fruits.push(newFruits);
// console.log(fruits);
// console.log("9.  How to remove duplicates from an array of objects using JavaScript");
// var students=[
//     {id:1,name:'john doe'},
//     {id:2 ,name:'smith hey'},
//     {id:1 ,name:'samuel frej'},
//     {id:3 ,name:'alka'},
//     {id:2,name:'mary mej'},
// ];
// function removeDuplicates(arr) {
//     return arr.filter((student,index,self)=>
//     index===self.findIndex((t)=>(
//         t.id===student.id && t.name===student.name
//     ))
// );
// }
// var uniqueStudents=removeDuplicates(students);
// console.table(uniqueStudents);

// console.log("10.  How to get a subset of a javascript object’s properties");
// var person={
//     firstName:'john',
//     lastName:'Doe',
//     age:30,
//     city:'new york',
//     country:'USA'
// };
// var {firstName,lastName}=person;
// console.log(firstName,lastName);
// console.log("11.  How to convert an Object {} to an Array [] of key-value pairs in JavaScript");

// console.log(" (i) Using Object.entries()");
// const obj={
//     key1:'value1',
//     key2:'value2',
//     key3:'value3',
// };
// const entries=Object.entries(obj);
// console.table(entries);
// console.log("ii) Using Object.keys()");

// const obj={
//         key1:'value1',
//         key2:'value2',
//         key3:'value3',
//      };
// const entries=Object.keys(obj).map(key=>[key,obj[key]]);
// console.table(entries);

// console.log("12.  How to check if a value is object-like in JavaScript");
// function isObjectLike(value) {
//     return typeof value==='object'&& value!==null;
// }
// console.log(isObjectLike({}));
// console.log(isObjectLike([]));
// console.log(isObjectLike(null));
// console.log(isObjectLike(42));
// console.log(isObjectLike('string'));

console.log("3. How to use a variable for a key in a JavaScript object literal?");
let key='name';
let value='john doe';
let obj={
    [key]:value
};
console.log(obj);




















