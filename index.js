var inquirer = require("inquirer");
var fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a quick description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Is there anything a user needs to know about installation?"
        },
        {
            type: "input",
            name: "usage",
            message: "What will this project be used for?"
        },
        {
            type: "list",
            name: "liscense",
            message: "What kind of liscense will your project have?",
            choices: [
                "MIT",
                "Apache",
                "GPL"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "List any contributions:"
        },
        {
            type: "input",
            name: "test",
            message: "Is there any test information?"
        },
        {
            type: "input",
            name: "repo",
            message: "Enter a link to your gitHub repository:"
        }
    ]).then(function(data) {
        fs.writeFile("README.md", 
                         "# " + data.title + '\n'
                         + data.description + '\n'
                         + '\n' + "## Table of Contents" + '\n' + "* Installation"
                                                        + '\n' + "* Usage"
                                                        + '\n' + "* License"
                                                        + '\n' + "* Contributing"
                                                        + '\n' + "* Tests"
                                                        + '\n' + "* Links" + '\n'
                        + '\n' + "## Installation" + '\n' + data.installation + '\n'
                        + '\n' + "## Usage" + '\n' + data.usage + '\n'
                        + '\n' + "## Liscense" + '\n' + data.liscense + '\n'
                        + '\n' + "## Contributing" + '\n' + "@" + data.contributors + '\n'
                        + '\n' + "## Tests" + '\n' + data.test + '\n'
                        + '\n' + "## Links" + '\n' + data.repo,
                    function(err) {
                        if (err) {
                            return console.log(err);
                          }
                      
                          console.log("Success!");
                    }
        )
    })
