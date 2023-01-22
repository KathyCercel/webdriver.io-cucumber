# webdriver.io-cucumber

## Prerequisites

Install Node JS via NVM
[Instalation Guide](https://joachim8675309.medium.com/installing-node-js-with-nvm-4dc469c977d9) details the best way to install node with `NVM`. Guidance is given for OSX, Linux and Windows Users

`nvm use 14`

## Install and setup 

To set up you will need to do the following

SSH: git clone git@github.com:KathyCercel/webdriver.io-cucumber.git
HTTPS: git clone https://github.com/KathyCercel/webdriver.io-cucumber.git

`npm install`

### Run functional UI tests
[webdriverIO descriptio](https://webdriver.io/docs/frameworks)

`npm run test`

### Run integration API tests

[mocha description](https://www.npmjs.com/package/mocha)
[mocha framework](https://github.com/mochajs/mocha)


`npm run integration:tests`

### Run eslint

[eslint description](https://www.npmjs.com/package/eslint)
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. 

`npm run lint`
`npm run lint:fix` 

### Report

[Allure Reporter](https://webdriver.io/docs/allure-reporter/)

### Generate report

`npm run generate:report`

### Open report

`npm run open:report`
