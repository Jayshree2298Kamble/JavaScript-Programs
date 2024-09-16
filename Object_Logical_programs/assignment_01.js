// 1. Write a JavaScript program to list the properties of a JavaScript object.
// var student={
//      Name:"David Rayy",
//      sclass:"VI",
//      Roll_no:15

// };
// var properties=Object.keys(student);
// console.log(properties);
// var values=Object.values(student);
// console.log(values);
// console.log("2. Write a JavaScript program to delete the rollno property from the object and Also print the object before or after deleting the property.");

// var student={
//     Name:"David Rayy",
//     sclass:"VI",
//     Roll_no:15

// };
// console.log("Before deleting record");
// console.log(student);
// delete student.Roll_no;
// console.log("After deleting record");
// console.log(student);
// console.log("3.  Write a JavaScript program to get the length of a JavaScript object.");
// var car={
//     make:"Toyato",
//     model:"camry",
//     year:2012,
//     color:"blue"
// };
// function getObjectLength(obj) {
//     return Object.keys(obj).length;
// }
// console.log("Length of the car object:"+getObjectLength(car));
// console.log("4. How to get dynamic access to an object property in JavaScript ");
// var person={
//     name:"john",
//     age:30,
//     profession:"Developer"
// }
// var propertyName="age";
// console.log(person[propertyName]);
console.log("5.How to modify an object’s property in an array of objects in JavaScript?");
var emp=[{
    id:1,
    name:"john rayy",
    position:"HR",
    salary:30000
}];
function updateEmpSalary (id,newSalary) {
    for(var i=0;i<=emp.length;i++)
    {
        if (emp[i].id===id) {
            emp[i].salary=newSalary;
            return;
        }
    }
}
updateEmpSalary(1,60000);
console.table(emp);

