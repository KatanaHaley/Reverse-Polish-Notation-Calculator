import React from "react";

 function Calculator(expressNum) {
  const inputNum = expressNum.split(" ");
  const newStack = [];
  
  if (!inputNum) return "ERROR";

  for (let i = 0; i < inputNum.length; i++) {
    if (!isNaN(inputNum[i])) {
      newStack.push(inputNum[i]);
    } else {
      let operator1 = newStack.pop();
      let operator2 = newStack.pop();
      if (inputNum[i] === 'q') {
        process.exit(1);
      }
      if (inputNum[i] === "+") {
        newStack.push(parseInt(operator1) + parseInt(operator2));
      } else if (inputNum[i] === "-") {
        newStack.push(parseInt(operator2) - parseInt(operator1));
      } else if (inputNum[i] === "*") {
        newStack.push(parseInt(operator1) * parseInt(operator2));
      } else if (inputNum[i] === "/") {
        newStack.push(parseInt(operator2) / parseInt(operator1));
      }
    }
  }
  if(newStack.length < 1) {
      return "ERROR";
  } else {
      return newStack[0];
  }
}


 //console.log(Calculator("q"));
console.log(Calculator("5 8 +"));
console.log(Calculator("5 5 5 8 + + - 13 +"));
console.log(Calculator("-3 -2 * 5 +"));
console.log(Calculator("5 9 1 - /"));
console.log(Calculator(" "))
console.log(Calculator("5 9 4 2 2 9 2 1 1 8 + + - 13 +"));


//Communicates with the test file
//module.exports = Calculator;

export default Calculator;
