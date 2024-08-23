function printDup(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        charCount[character] =
            (charCount[character] || 0) + 1;
    }

    for (let char in charCount) {
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
        }
    }
}

const strings=["Banana","Apple","Software Developer"];
strings.forEach(str=>{
    console.log(`Duplicate char in the strings are "${str}" : `);
    printDup(str);
    console.log('');
    
    
});