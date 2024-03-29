#! /usr/bin/env node

import inquirer from"inquirer";
// printing a welcome message
console.log("\n\tWelcome to \`code with mehwish\` -CLI Simple calculater\n");

// asking questions from users through inquirer

let answers = await inquirer.prompt([
{message: "enter first number", type: "number", name: "firstnumber"},
{message: "enter second number", type: "number", name: "secondnumber"},
{
    message: "select one operator to perfom opeartions",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
}
])
// conditional statement if-else

if(answers.operator === "addition"){
   console.log(answers.firstnumber + answers.secondnumber)
}
else if (answers.operator === "subtraction"){
    console.log(answers.firstnumber - answers.secondnumber)
}
else if (answers.operator === "multiplication"){
    console.log(answers.firstnumber * answers.secondnumber)
}
else if (answers.operator === "division"){
    console.log(answers.firstnumber / answers.secondnumber)
}
else{
console.log("invalid input")
} 