#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1 );

//  console.log(randomNumber);





const answer = await inquirer.prompt([ { 

    name: "userGuessNumber",
    type:"number",
    message:"please guess a number between 1 to 6: ",

},   

 ]);




 if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! you win");
 
 }  else{
    console.log("Try Again");
    
 };

