function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}
let yesBank=new Bank("yesBank","pune","1111","100");
console.log(`" Bank Details " : Name: ${yesBank.bankName}, Location : ${yesBank.location}, ifsc code : ${yesBank.ifscCode},  branch code: ${yesBank.branchCode}`);

let sbiBank=new Bank("sbiBank","solapur","2222","200");
console.log(`" Bank Details " : Name: ${sbiBank.bankName}, Location : ${sbiBank.location}, ifsc code : ${sbiBank.ifscCode},  branch code: ${sbiBank.branchCode}`);

let mahBank=new Bank("yesBank","thane","3333","300");
console.log(`" Bank Details " : Name: ${mahBank.bankName}, Location : ${mahBank.location}, ifsc code : ${mahBank.ifscCode},  branch code: ${mahBank.branchCode}`);

let axisBank=new Bank("yesBank","pune","4444","400");
console.log(`" Bank Details " : Name: ${axisBank.bankName}, Location : ${axisBank.location}, ifsc code : ${axisBank.ifscCode},  branch code: ${axisBank.branchCode}`);

Bank.prototype.openTime="9AM IST";
Bank.prototype.closeTime="6AM IST";
console.log(`"Open Time of SBI Bank" : ${sbiBank.openTime} and "Closing time of SBI Bank : ${sbiBank.closeTime}"`);
console.log(`"Open Time of AXIS Bank" : ${axisBank.openTime} and "Closing time of AXIS Bank : ${axisBank.closeTime}"`);
console.log(`"yesBank Details" : Name : ${yesBank.bankName} ,branch code: ${yesBank.branchCode} ,"Opening time of  yesBank : ${yesBank.openTime}"`);
