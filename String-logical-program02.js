function wordCount(str) {
    const words=str.split(' ').filter(word=>word.length>0);
    return words.length;
}
const strings=["JavaScript The language of Internet"
    ,"Enhance Your Learning Journey with Exclusive Add-ons"
    , "Beyond frameworks, Beyond Imagination"
    ,"I am passionate software developer"];
strings.forEach((str) => {
             console.log(`The number of words in string " ${str} " is : ${wordCount(str)}`);
        });























// function vowelsCount(str) {
//     let count = 0;
//     const vowels = "aieouAIEOU";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// const strings = [
//     "JavaScript",
//     "HTML and CSS",
//     "Language Of Internet",
//     "I Am UI Developer",
//     "Do Or Die",
// ];
// strings.forEach((str) => {
//     console.log(`The number vowels in string ${str} is : ${vowelsCount(str)}`);
// });

// function charCount(str) {
//     let count=0;
//     for (let i = 0; i < str.length; i++) {

//         if (str[i].toLowerCase()=='a') {
//             count++;

//         }
//     }
//     return count;
// }
// const strings=["JavaScript", "Do or Die","Learn with us, Job with us", "Empowering Dreams, Guaranteeing Futures", "Anny, My favorite fruit is Apple"];
// strings.forEach(str=>{console.log(`The number of 'a' character in string ${str} is : ${charCount(str)}`);
// });