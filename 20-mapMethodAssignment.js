const arrayNum=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`****************1.Add 10 to each element*******************`);

console.log(arrayNum);

const add = arrayNum.map((element)=>{

    return element+10;

});

console.log(add);

console.log(`****************2.cube the element of given array*******************`);

const cube = arrayNum.map((element)=>{

    return element*element*element;

});

console.log(cube);
console.log(`****************3.add index value into corresponding array element*******************`);
const result=arrayNum.map((element,index)=>{
            return element=element+index
});
console.log(result);
