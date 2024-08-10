var votingChecker = function (age) {
    if (age = 0 || age < 0 || age > 130) {
        console.log("in-valid data");
    } else {

        if (age >= 18) {

            console.log(`Hey your age is  and you are eligible for vote`);

        } else {

            console.log(`Unfortunately , Hey your age is  and you are not eligible for vote`);

        }
    }
}

votingChecker(45);
votingChecker(17);
votingChecker(8);
votingChecker(20);
votingChecker(-10);
votingChecker(200);
votingChecker(0);
votingChecker(null);