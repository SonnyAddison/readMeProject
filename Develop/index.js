// Packages and files needed for this application to work
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const questions = require('./utils/questionsAsked');
const generateMarkdown = require('./utils/generateMarkdown');
const badges = require('./utils/badges');

const writeFileAsync = util.promisify(fs.writeFile);




// function to initialize app and build out README.md
const init = async() => {
  try {
    const reply = await inquirer.prompt(questions);
    reply.badge = badges(reply.license);
    let readMeInfo = generateMarkdown(reply);
    await writeFileAsync('./README.md', readMeInfo);
  } catch (err) {
  console.log(err);
  }
}

// Function call to initialize app
init();