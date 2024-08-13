const fruits=["Banana","Orange","Apple","Mango","Water Melon"];
const firstElement=fruits[0];
const lastElement=fruits[fruits.length-1];
console.log(`1. First Element : ${firstElement} :  Last Element : ${lastElement}`);

fruits.unshift("Papaya");
console.log(`2. Inserting element at the begining of the array`);
console.log(fruits);
fruits.splice(4,1);
console.log(`3. Deleting Mango from the array`);
console.log(fruits);
console.log(`4. Inserting element at the end of the array`);
fruits .push("Pineapple");
console.log(fruits);
fruits.splice(4,0,"Dragon fruit");
console.log(`5. Adding element before Water melon`);
console.log(fruits);
fruits.splice(2,1,"Kiwi");
console.log(`6. replacing orage with kiwi`);
console.log(fruits);
fruits.slice(1,4);
console.log(`7. array from index 1 to 4`);
console.log(fruits);
const last3=fruits.slice(-3);
console.log(`8. last 3 elements from an array`);
console.log(last3);




