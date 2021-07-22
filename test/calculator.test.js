const assert = require('assert');
//const Calculator = require("../src/Calculator");
import Calculator from './src/Calculator';
const expect = require("chai").expect;

describe("RPN Calculator", () => {
    it("Should be provided one or more integers and return a new sum", () => {
      const actual = "13";
      const expected = Calculator("5 8 +");
      assert(actual, expected);
    });

    it(("Should return a negative integer if sum is less than zero"), () => {
        const expected = "-13";
        const actual = Calculator("-5 -8 +");
        assert(actual, expected);
    });
    it(("Should return ERROR if there is less than one number in the stack"), () => {
        const actual = Calculator(" ");
        expect(actual).to.be.a("string", "ERROR")
    });
    it (("Should return a decimal number if the sum is less than one and greater than zero"), () => {
        const actual = Calculator("5 9 1 - / ");
        const expected = "0.625";
    })
    it (("Should accept any amount of numbers as an input"), () => {
        const actual = Calculator("5 9 4 2 2 9 2 1 1 8 + + - 13 +");
        const expected = "5";
    })
    
  
});
