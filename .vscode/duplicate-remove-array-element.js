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









function cap(str){
    let spl = str.split(' ');
    for(let i = 0; i < spl.length; i++){
      let temp = spl[i];
      temp = temp[0].toUpperCase() + temp.slice(1)
      temp = temp.slice(0,-1) + temp[temp.length - 1].toUpperCase();
      spl[i] = temp;
    }
    return spl.join(' ');
  }
  
  console.log(cap("How are you mate"))
  