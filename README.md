# Coding Challenge
This test project aims at demostrating coding skills and test automation experience with the application of CodeceptJS/TypeScript. It consists of three test cases:
* Test Case #1 - Navigation to Kontakt page
* Test Case #2 - Handout download
* Test Case #3 - Form validation

## Prerequisities
Required:
* Selenium server
* Java 8 or higher
* Allure

## Execution

###### Running the tests

In order to run all the test cases in parallel in Chrome and firefox, run
```
$ npm run run:tests:multiple
```
In order to run test cases one by one in specified browser, run
```
$ npm run run:tests:chrome
```
or
```
$ npm run run:tests:firefox
```
###### Headless mode
As per the two latter, you can turn headless mode on and off, setting the desired value in .env file
```
HEADLESS=true
```
or
```
HEADLESS=false
```
###### Allure report
In order to create Allure report, once the test run has been finished, run
```
$ allure serve
```
and then
```
$ allure generate
```
