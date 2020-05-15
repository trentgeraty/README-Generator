const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Project title required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the purpose of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe the project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would you install this?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide direction on how to install');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should we know about this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Their must be something we should know?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What contributions should be given?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide direction on what to contribute');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests have you run for this project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('You must enter test info');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you display?',
        choices: ['MIT', 'ISC', 'GNUGPLv3'],
        validate: licenseChoice => {
            if (licenseChoice) {
                return true;
            } else {
                console.log('Select a license');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: githubInput => {
            if (githubInput){
                return true;
            } else {
                console.log('Please type your github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log('Please provide an email');
                return false;
            }
        }
    }
];

// function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("README created!")
        }
    })
}; 

function init() {
    inquirer.prompt(
      questions
    )
    .then(answers => {
     const structure = generateMarkdown(answers)
     writeFile(structure)
    })
}
init(); 
