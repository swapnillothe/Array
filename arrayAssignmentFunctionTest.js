const assert = require("assert");
const lib = require("./arrayAssignmentFunction.js");
const {giveEveryNthElement,findEvenNumbers,findOddNumbers,calculateSum,reverseArray} = lib;
const {giveEvery2ndElement,findGreatestNumber} = lib; 
//---------for empty string([])------------//
givenNumber = [];
assert.deepEqual(findOddNumbers(givenNumber),[]);
assert.deepEqual(findEvenNumbers(givenNumber),[]);
assert.deepEqual(calculateSum(givenNumber),0);

//---------for two even numbers string([2,4])------------//
givenNumber = [2,4];
assert.deepEqual(findOddNumbers(givenNumber),[]);
assert.deepEqual(findEvenNumbers(givenNumber),[2,4]);
assert.deepEqual(calculateSum(givenNumber),6);


//---------for two odd numbers string([1,3])--------------//
givenNumber = [1,3];
assert.deepEqual(findOddNumbers(givenNumber),[1,3]);
assert.deepEqual(findEvenNumbers(givenNumber),[]);
assert.deepEqual(calculateSum(givenNumber),4);

//---------for mix numbers string([1,2,3,4,5,6,7])--------//
givenNumber = [1,2,3,4,5,6,7];
assert.deepEqual(findOddNumbers(givenNumber),[1,3,5,7]);
assert.deepEqual(findEvenNumbers(givenNumber),[2,4,6]);
assert.deepEqual(calculateSum(givenNumber),28);

//~~~~~~~~~~~~~~~~~//
//--------test for reversing array------------------------//
assert.deepEqual(reverseArray([1,2]),[2,1]);
assert.deepEqual(reverseArray([]),[]);
assert.deepEqual(reverseArray([1,2,3]),[3,2,1]);

//--test for array of every second elements from given array --//
assert.deepEqual(giveEvery2ndElement([]),[]);
assert.deepEqual(giveEvery2ndElement([1,2]),[1]);
assert.deepEqual(giveEvery2ndElement([1,2,3]),[1,3]);

//---------------test for greatest number in array------------//
assert.deepEqual(findGreatestNumber([1,2]),2);
assert.deepEqual(findGreatestNumber([3,4,1,2]),4);
assert.deepEqual(findGreatestNumber([]),"")

console.log("-------------Everything is fine-----------------");
