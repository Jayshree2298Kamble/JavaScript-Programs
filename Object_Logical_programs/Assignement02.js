console.log("6. How to get the last item of JavaScript object");
// console.log(" (i)  Using Object.keys() Method");

// var car={
//          make:"Toyato",
//          model:"camry",
//         year:2012,
//          color:"blue"
//     };
//     var keys=Object.keys(car);
//     var lastKey=keys[keys.length-1];
//     console.log("Last property using keys:  ",lastKey,car[lastKey]);



console.log(" (i)  Using Object.entries() Method");

var car={
         make:"Toyato",
         model:"camry",
        year:2012,
         color:"blue"
    };
    var entries=Object.entries(car);
    var lastentries=entries[entries.length-1];
    console.log("Last property using entries:  ",lastentries[0],lastentries[1]);

    