// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = () =>

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Name of your project?',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following as a guide (What was your motivation?; Why did you build this project?; What problem does it solve?; What did you learn?).',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: Provide a step-by-step description of how to get the development environment running.',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an "assets/image" folder in your repository and upload your screenshot to it.',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    },
    {
      type: 'input',
      name: 'credit',
      message: 'List any collaborators, and links to their Github profiles, also any thrid-party assets that require attribution, etc.',
      validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'If you used a license which one did you use?',
      choices: ['AGPL License', 'GPL License', 'LGPL License', 'EPL License', 'Mozilla License','Apache License','MIT License','Berkeley Source Distribution (BSD) License', 'Unlicense', 'N/A']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines if allowing developers to contribute: Not sure on where to start? Contirubutor Covenant v2.1 is a good starting point "https://www.contributor-covenant.org/version/2/1/code_of_conduct".',
      validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
    }, 
      {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions and provide examples on how to run the test.',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'Whatt is your GitHub Username?',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
      },
      {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your linkedIn URL?',
        validate:(value)=>{if(value){return true} else {return 'Please fill out to continue forward'}}
      },
    ]).then(({title, description, installation, usage, credit, license, contributing, test, email, gitHub, linkedIn,})=> {
    //README File temaplate
    const generateREADME = `# ${title}

      * [Description](#description)
      * [Installation](#installation)
      * [Usage](#usage)
      * [Credit](#credit)
      * [License](#license)
      * [Contribution](#contributing)
      * [Testing](#test)
    
  ## Description
    ${description}
  ## Installation
    ${installation}
  ## Usage
    ${usage}
  ## Credit
    ${credit}
  ## License
    ${license}
  ## Contribution
    ${contributing}
  ## Testing
    ${test}
    
  ## Questions 
  Contact me at:\n
    * E-mail: ${email}
    * GitHub: ${gitHub}
    * LinkedIn: ${linkedIn}`;
    
    writeToFile(title, generateREADME);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err) => {
    if (err) {
      console.log(err)
    }
    console.log('README file successfully created!');
  })
}

// TODO: Create a function to initialize app
const init = () => {
  questions()
  .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.log(err));
}

// Function call to initialize app
init();