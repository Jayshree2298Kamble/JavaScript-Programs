let professor={
    firstName:"John",
    lastName:"Mary",
    city:"Pune",
    age:"35",
    isMarried:"True",
    degree:{
        enginering:`CSC`,
        PHD:`AdV computing`,
        master:'CS'
    },
    certificates:["hacker rank participation","certificate in IFE course","certificate in adv pragramming"]
}
console.log(`-------------------created object  "professor"---------------------`);

console.log(professor);
const totalExperince=professor.totalExperince="14";

console.log(`---------------add new prperty-----------------`);
console.log(`Total experince :  ${totalExperince}`);
professor.age = 55;
console.log(`-----------------updated age value----------------`);
console.log(`Updated age: ${professor.age}`);

const data=professor.certificates.push("Oracle certified");
const newCertificate=professor.certificates;
for (const element of newCertificate) {
    console.log(element);
    
}
console.log(`--------------added new property---------------`);
console.log(`New certificate : ${newCertificate}`);
for (const key in professor) {

    if (Object.prototype.hasOwnProperty.call(professor, key)) {

        const element = professor[key];

        console.log(`${key}, ${element}`);
    }
}




