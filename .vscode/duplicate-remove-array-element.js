// let numbers = [11,3,4,11,4,7,3];

// let uniqueNumbers = [];
// let objects = {};

// numbers.forEach(function(value) {
//   if (!objects[value]) {
//     uniqueNumbers.push(value);
//     objects[value] = true;
//   }
// });

// console.log(uniqueNumbers); 
let str="How are you mate";
// let length = length(str);
for(let i=0;i<str.length;i++)
{
    if(i==0||i==(length-1)) //Converting character at first and last index to uppercase.
    {
        str[i]=toupper(str[i]);
    }
    else if(str[i]==' ') //Converting characters present before and after space to uppercase.
    {
        str[i-1]=toupper(str[i-1]);
        str[i+1]=toupper(str[i+1]);
    }
}

//Printing result.
// printf("String after capitalizing first and last letter of each word:\n%s", str);
console.log(`"String after capitalizing first and last letter of each word:", ${str}`);


