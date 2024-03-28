import inquirer from "inquirer";
let myBalance = 500; //dollar
let myPin = 288;
let password = await inquirer.prompt([
    {
        name: "atm",
        message: "Enter your pin",
        type: "number",
    },
]);
if (password.atm === myPin) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operator",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operator === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance = myBalance - amountAns.amount;
            console.log(` Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("SORRY! insufficient amount");
        }
    }
    else if (operationAns.operator === "check balance") {
        console.log(` Your current Balance is ${myBalance}`);
    }
    else if (operationAns.operator === "fast cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "Amount",
                message: "Choose your amount",
                type: "list",
                choices: ["100", "150", "200", "300", "400", "500"],
            },
        ]);
        console.log(fastcash.Amount);
        if (fastcash.Amount < "myBalance") {
            let newBalance = myBalance - fastcash.Amount;
            console.log(`Your remaining balance is : ${newBalance} `);
        }
        else {
            console.log("SORRY! insufficient amount ");
        }
    }
}
else {
    console.log("Incorrect Pin Code");
}
