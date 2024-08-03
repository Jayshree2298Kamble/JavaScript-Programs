var str="  Hey you are doing good, keep it up  ";
function stringHandsOn() {

    console.log('1.The String is:',str);
    console.log('2.The Length of String is:',str.length);
    var res1= str.trim();
    console.log('3.After Removing extra spaces the string is :',res1);
    console.log('4.length of string after Removing extra spaces  :',res1.length);
    var res2= (str.length-res1.length);
    console.log('5.The count of extra space that is removed:', res2);
    var res3=res1.charAt(0);
    var res4=res1.charAt((res1.length)-1);
    console.log('6.First character :', res3);
    console.log('7.Last character:', res4);
    var res5=res1.split(' ').length;
    console.log('8.word count of string : ',res5);
    var res6=res1.indexOf("good");
    console.log('9.The index of "good" character in a string: ',res6);
    var res7=res1.substring(22,34);
    console.log('10.Substring starting from index 22: ',res6);
    var res8=res1.endsWith("up");
    console.log('11.is string end with word "up" :',res8);
    var res9=res1.startsWith("Hey");
    console.log('12.is string start with word "Hey" :',res9);


}
stringHandsOn();