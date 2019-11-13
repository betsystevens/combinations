/**
 *  
 *  run from command line
 *  node useFactorials.js 5 3
 *  
 */


const fact = require('./factorials');

const n = process.argv[2];
const k = process.argv[3];

// getFactorial(n)
console.log(`factorial of ${n} is: ${fact.getFactorial(n)}`) ;
// getPartialPerm(n,k)
console.log(`partial permutation of ${n},${k} is: ${fact.getPartialPerm(n,k)}`) ;
// combination(n,k)
console.log(`combination of ${n},${k} is: ${fact.combination(n,k)}`) ;
