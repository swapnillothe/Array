const assert = require("assert");
const lib = require("./arrayAssignmentFunction.js");
const {giveEveryNthElement,findEvenNumbers,findOddNumbers,calculateSum,reverseArray} = lib;

//---------for empty string([])------------//
givenNumber = "";
assert.deepEqual(findOddNumbers(givenNumber),[]);
assert.deepEqual(findEvenNumbers(givenNumber),[]);
assert.deepEqual(calculateSum(givenNumber.split(",")),0);

//---------for two even numbers string([2,4])------------//
givenNumber = "2,4".split(",");
assert.deepEqual(findOddNumbers(givenNumber),[]);
assert.deepEqual(findEvenNumbers(givenNumber),[2,4]);
assert.deepEqual(calculateSum(givenNumber),6);


//---------for two odd numbers string([1,3])--------------//
givenNumber = "1,3".split(",");
assert.deepEqual(findOddNumbers(givenNumber),[1,3]);
assert.deepEqual(findEvenNumbers(givenNumber),[]);
assert.deepEqual(calculateSum(givenNumber),4);

//---------for mix numbers string([1,2,3,4,5,6,7])--------//
givenNumber = "1,2,3,4,5,6,7".split(",");
assert.deepEqual(findOddNumbers(givenNumber),[1,3,5,7]);
assert.deepEqual(findEvenNumbers(givenNumber),[2,4,6]);
assert.deepEqual(calculateSum(givenNumber),28);

//~~~~~~~~~~~~~~~~~//
//--------test for reversing array------------------------//
assert.deepEqual(reverseArray([1,2]),[2,1]);
assert.deepEqual(reverseArray([]),[]);
assert.deepEqual(reverseArray([1,2,3]),[3,2,1]);

console.log("-------------Everything is fine-----------------");
