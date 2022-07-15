generateMardown = (data) => {
  return `

  # ${data.title}

    ${data.badges}
    
---

## Contents

  1. [Description](#description)
         [User Stroy](#user-story)
         [Acceptance Criteria](#acceptance-criteria)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credit](#credit)
  5. [License](#license)
  6. [Contribution](#contributing)
  7. [Tests](#tests)
  8. [Questions](#questions)

---  
## Description

  ${data.description}  

  User Story  
  
  ${data.userStory}  

  Acceptance Criteria  

  ${data.acceptanceCriteria}
      
---
## Installation

  ${data.installation}

---
## Usage

  ${data.usage}

---
##  Credit

  ${data.credit}

---
##  License

  ${data.license}
---
##  Contribution

  ${data.contributing}

---
##  Tests

  ${data.test}

---
##  Questions

      Contact me at:  
  
        E-mail: ${data.email}  
        Github: ${data.github}  
        LinkedIn: ${data.linkedin} ` 
}

  module.exports = generateMardown;
