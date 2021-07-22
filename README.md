This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

Welcome to the RPN Calculator CLI

## Architecture
The Calculator function performs Reverse Polish Notation by accepting postfix notation inputs and provides the calculated sum as an output.

Following good practice, the function returns an error early if there is no input in the calculator. The program does not run in this instance.

The calculator has four valid operators; +, -, /, and *. More operators can be added. It's also possible to integrate a WebSocket interface.  

## How the calculator works
The calculator first splits the input string and an empty array is created. The program either returns an error early or continues execution. 

The function then loops over each index in the string, if the index is a number it's pushed into the stack. When the for loop is complete, the last two inputs in the stack are popped out. These last two inputs are operators.

If 'q' is entered, the program quits immediately. The function goes through a series of checks to find matching operators. If a match is found, the operation is performed. Lastly, if only one number is provided, the program will throw an error.

Given more time on this project I would create a hosted UI.

## Instructions
To use the calculator, you'll need Node JS installed. Open the terminal to the Calculator.js file to run the program. Comment out the import statement at the top of the file, the export statement at the bottom of the file, and uncomment module.exports = Calculator; to see the output.

## Available Scripts

In the project directory, you can run:


### `mocha test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
