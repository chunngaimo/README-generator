// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is your project title?",
    },
    {
        type:"input",
        name:"description",
        message:"What is your project about?",
    },
    {
        type:"input",
        name:"installation",
        message:"What are the instructions for installation?",
    },
    {
        type:"input",
        name:"usage",
        message:"What is the usage information?",
    },
    {
        type:"input",
        name:"contribution",
        message:"What are the contribution guidelines?",
    },
    {
        type:"input",
        name:"test",
        message:"What are the test instructions?",
    },
    {
        type:"input",
        name:"github",
        message:"Enter GitHub username?",
    },
    {
        type:"input",
        name:"email",
        message:"Enter Email address?",
    },
    {
        type:"list",
        name:"license",
        message:"What kind of licenses should the project have?",
        choices: ["mit","apache","mozilla","gpl"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("user-README.md", generateMarkdown({
            ...answers
        }))
    })
}

// Function call to initialize app
init();
