# **Factorials, Permutations & Combinations**

## A simple node.js library that computes basic 

* Factorials
* Permutations
* Combinations

## Prerequisites
* Node.js is required to run the library 
* Mocha is used for testing 

## Using the Modules 
- **factorials.js** - modules check for valid input, positive integers.
  - getFactorial(n)
    - returns n! for valid n
  - getPartialPerm(n,k)
    - returns partial permutation for valid n, k
  - combination(n,k)
    - returns n choose k for valid n,k

  ```
  // factorials.js exports

  module.exports = {
    getFactorial: getFactorial,
    getPartialPerm: getPartialPerm,
    combination: combination
  }
  ```
  - import into your file
  ```
  // import modules and use

  const facts = require('./factorials');

  let x = facts.getFactorial(5);    // x = 120
  x = facts.getPartialPerm(5, 3);   // x = 60
  x = facts.combination(5, 3);      // x = 10
  ```
- **useFactorials.js** - example using the library 
  - from command line
  ```
  $ node useFactorials.js 5 3
  ```
  - output
  ```
  factorial of 5 is: 120
  partial permutation of 5,3 is: 60
  combination of 5,3 is: 10
  ```

## Testing
- **test.js** - contains the tests.
  ```
  // Multiple ways to run test.js
  $ mocha
  $ mocha test
  $ mocha --reporter=nyan   // for the rainbow space cat nyan
  $ npm test
  ```

## Motivation
  - learn unit testing
  - learn Mocha
  - learn Node.js  

## Acknowledgements
  - Tania Rascia's [Unit Testing in JavaScript with Mocha](https://www.taniarascia.com/unit-testing-in-javascript/)

## Author
  -  Betsy Stevens

