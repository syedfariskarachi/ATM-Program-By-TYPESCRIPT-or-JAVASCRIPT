#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let pincode = 1234;
console.log("PIN = 1234");
console.log("Your current balance is: " + mybalance);
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
if (pinAnswer.pin === pincode) {
    console.log("Correct pin code !!!");
    let chose = await inquirer.prompt([
        {
            name: "opperation",
            message: "What do you want !",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (chose.opperation === "withdraw") {
        let amount = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        if (amount.amount <= 10000) {
            mybalance -= amount.amount;
            console.log("Now your balance is " + (mybalance));
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (chose.opperation === "fast cash") {
        let options = await inquirer.prompt([
            {
                name: "options",
                message: "Select Amount",
                type: "list",
                choices: [500, 2000, 6000, 10000]
            }
        ]);
        if (options.options === 500) {
            console.log("Now your balance is " + (mybalance - options.options));
        }
        else if (options.options === 2000) {
            console.log("Now your balance is " + (mybalance - options.options));
        }
        else if (options.options === 6000) {
            console.log("Now your balance is " + (mybalance - options.options));
        }
        else {
            console.log("Now your balance is " + (mybalance - options.options));
        }
    }
    else {
        console.log(mybalance);
    }
}
else {
    console.log("Invalid pin number");
}
