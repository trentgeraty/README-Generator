var generateMarkdown = data => {

  return `# ${data.title}
 
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
 
  ## Description
  ${data.description}
 
  ## Table of contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [test](#test)
  
  ## Installation
  ${data.installation}
 
  ## Usage 
  ${data.usage}
 
  ## Credits
  ${data.credits}
 
  ## License 
  ${data.license}
 
  ## Contributing
  ${data.contrubuting}
 
  ## Test
  ${data.tests}
 
  ## Questions
  If you have any questions about this projects, please contact me directly at 
`;
}

module.exports = generateMarkdown;
