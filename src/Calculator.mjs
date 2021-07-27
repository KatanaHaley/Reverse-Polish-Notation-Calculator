import React from "react";

const Calculator = (expressNum) => {
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
        process.exit(0);
      }
      if (inputNum[i] === "+") {
        newStack.push(parseInt(operator1) + parseInt(operator2));
      } else if (inputNum[i] === "-") {
        newStack.push(parseInt(operator2) - parseInt(operator1));
      } else if (inputNum[i] === "*") {
        newStack.push(parseInt(operator1) * parseInt(operator2));
      } else if (inputNum[i] === "/") {
        newStack.push(parseInt(operator2) / parseInt(operator1));
        }else if(inputNum[i] === "*") {
          stack.push(parseInt(operator1) * parseInt(operator2));
        }
      }
  }
  if(newStack.length < 1) {
      return "ERROR";
  } else {
      return newStack[0];
  }
}

 Calculator("");


console.log(Calculator("5 8 +"));

export default Calculator;
