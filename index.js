// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    
    type: "input",
    message: "Input title of your project.",
    name: "Title"
},{


    
    type: "input",
    message: "How would you describe your project?",
    name: "Description"
},{

    
    type: "input",
    message: "Table of contents.",
    name: "Table of Contents"
},{

    
    type: "input",
    message: "How does the user install this application?",
    name: "Installation Instructions"
},{
    
    type: "input",
    message: "How does the user utilize this app?",
    name: "Usage"
},{
    
    type: "input",
    message: "Who else contributed to this project?",
    name: "Contribution"
},{
    
    type: "checkbox",
    message: "Which license was used for this project?",
    name: "License",
    choices: ["MIT", "GPLv2", "Apache"]
},{
    
    type: "input",
    message: "How would you test this project in the command prompt?",
    name: "Tests"
},{
    
    type: "input",
    message: "What is your GitHub user account name?",
    name: "Username"
},{
    type: "input",
    message: "What is your email address?",
    name: "Email"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if(err) {
            return console.log(err)
        } else {
            console.log("success")
        }

    })

       
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkDown(data));
            console.log(data)
        
        })
}

// Function call to initialize app
init();
