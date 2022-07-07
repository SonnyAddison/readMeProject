// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ({title, description, installation, usage, credit, license, contributing, test}) =>
`readmefile stuff`;
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following as a guide (What was your motivation?; Why did you build this project?; What problem does it solve?; What did you learn?).',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: Provide a step-by-step description of how to get the development environment running.',
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an "assets/image" folder in your repository and upload your screenshot to it.',
    },
    {
      type: 'input',
      name: 'credit',
      message: 'List any collaborators, and links to their Github profiles, also any thrid-party assets that require attribution, etc.',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What is the Name of your project?',
  },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines if allowing developers to contribute: Not sure on where to start? Contirubutor Covenant v2.1 is a good starting point "https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md".',
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions and provide examples on how to run the test.',
    },

  ])
  .then((answers) => {
    const ReadMeFileContent = questions(answers);

    fs.writeFile('ReadMe.md', ReadMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe.md file.')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();