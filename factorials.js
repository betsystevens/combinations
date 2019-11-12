/**
 *  Permutations & Combinations
 */

/**
 * factorial - recursive factorial function
 * @param     n     positive integer or zero
 * @return    n!
 */
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}
/**
 * getFactorial - check input, call factorial if input is valid 
 * @param     n     positive integer
 * @return    n!    if valid input
 *            -1    if invalid input
 */
const getFactorial = (n) => {
  if (isNatural(n)){
    return factorial(+n); 
  } else {
    return -1; 
  }
}
/**
 * getPartialPerm - check input, call partialPerm if input is valid
 * @param     n     positive integer or 0
 * @param     k     positive integer or 0
 * @return    partial permutation if input is valid
 *            -1    if input is invalid
 */
const getPartialPerm = (n, k) => {
  if ( (isNatural(n)) && (isNatural(k)) ){
    return partialPerm(+n, +k); 
  } else {
    return -1;
  }
}
/**
 *  partialPerm - Partial Permutation, recursive
 *  @param    n     positive integer
 *  @param    k     positive integer
 *  @return   k-permutations of n
 * 
 *  k-permutations of n 
 *  Order matters 
 *  Permutation but only with k chosen, ie. partial
 *  Edge cases: (0,0), (1,0), (0,1) => 1  // all return 1
 *              (4,6) => (4,4)  // for k > n, compute (n,n)
 * 
 *  Example problem: you have 6 people to choose from and 4 chairs
 *  How many ways can you seat 4 of the people?
 *  n = 6, k = 4
 *  Answer: 6*5*4*3 = 360
 */
const partialPerm = (n, k) => {
  if ((k === 0) || (n === 0) || (n === 1)) {
    return 1;
  }
  else {
    return n * (partialPerm (n-1, k-1));
  }
}
/**
 *  combination 
 *  n choose k items 
 *  @param    n     positive integer
 *  @param    k     positive integer
 *  @return   n choose k  
 * 
 *  binomial coefficient
 *  defined for k <= n
 *  n! / (n - k)! k!
 * 
 */
const combination = (n, k) => {
  if ( (isNatural(n)) && (isNatural(k)) && (k <= n) ){
    let nFact = getFactorial(n);
    let kFact = getFactorial(k);
    let xFact = getFactorial(n-k);
    return (nFact/(xFact * kFact));
  } else {
    return -1;
  }
}

/**
 *  isNatural - verify x is natural number, ie, 0 or positive integers
 *  @param    x       mixed   
 *  @return   true    x is natural number
 *            false   x is not a natural number 
 */
const isNatural = (x) => {
  n = +x;
  if (n < 0) return false;
  if (isNaN(n)) return false;
  if (!Number.isInteger(n)) return false;
  return true;
}

module.exports = {
  getFactorial: getFactorial,
  getPartialPerm: getPartialPerm,
  combination:  combination
}
