// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return(`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`)
  } else if (license === 'GPLv2') {
    return(`![GPLv2 license](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`)
  } else if (license === 'Apache') {
    return(`![Apache license](https://img.shields.io/badge/License-Apache%202.0-green.svg)`)
  } else if (license === "none") {
    return ('');
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return(`[License: MIT](https://opensource.org/licenses/MIT)`)
  } else if (license === 'GPLv2') {
    return(`[GPLv2 license](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`)
  } else if (license === 'Apache') {
    return(`[Apache license](https://www.apache.org/licenses/LICENSE-2.0)`)
  } else if (license === "none") {
    return ('');
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // var licenseLink = renderLicenseLink(license);
  if (license === 'MIT' || 'Apache' || 'GPLv2') {
      return ('Licensed under the ' + license + " badge/link.")
  } else if (license === 'none') {
      return ('')
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# Title 

${data.Title}



# Description

${data.Description}

# Table of Contents 
* [Title](#title)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

# Installation
What is needed to install this application? ${data.Installation}

# Usage
In order to use this app, run the app in the: ${data.Usage}

# License
Which license have you chosen for this project? ${renderLicenseSection(data.License)}
${renderLicenseBadge(data.License)}
${renderLicenseLink(data.License)}

# Contribution
​Who was involved in contributing to this project? ${data.Contribution}

# Tests
The following is needed to run the test: ${data.Tests}

# Questions
If you have any questions about the repo, open an issue or contact my git hub account at "www.github.com/${data.Username}" or  directly at : ${data.Email}.
`
}

module.exports = generateMarkdown;