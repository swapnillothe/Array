const assert = require("assert");
const lib = require("./arrayAssignmentFunction.js");

const {findEvenNumbers,findOddNumbers} = lib;

//---------for empty string([])------------//
givenNumber = [];
assert.deepEqual(findOddNumbers(givenNumber),[]);
assert.deepEqual(findEvenNumbers(givenNumber),[]);

//---------for two even numbers string([2,4])------------//
givenNumber = [2,4];
assert.deepEqual(findOddNumbers(givenNumber),[]);
assert.deepEqual(findEvenNumbers(givenNumber),[2,4]);

//---------for two odd numbers string([1,3])------------//
givenNumber = [1,3];
assert.deepEqual(findOddNumbers(givenNumber),[1,3]);
assert.deepEqual(findEvenNumbers(givenNumber),[]);

//---------for mix numbers string([1,2,3,4,5,6,7])------------//
givenNumber = [1,2,3,4,5,6,7];
assert.deepEqual(findOddNumbers(givenNumber),[1,3,5,7]);
assert.deepEqual(findEvenNumbers(givenNumber),[2,4,6]);

console.log("-------------Everything is fine-----------------");
