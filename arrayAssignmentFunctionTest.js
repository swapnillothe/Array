const assert = require("assert");
const lib = require("./arrayAssignmentFunction.js");
const extractEveryNthElement = lib.ex
const findEvenNumbers = lib.findEvenNumbers;
const findOddNumbers = lib.findOddNumbers;
const calculateSum = lib.calculateSum;
const reverseArray = lib.reverseArray;
const extractEverySecondElement = lib.extractEverySecondElement;
const findGreatestNumber = lib.findGreatestNumber;
const findLowestNumber = lib.findLowestNumber; 

//--------test for finding Even Numbers from array----------//
assert.deepEqual(findEvenNumbers([]),[]);
assert.deepEqual(findEvenNumbers([2,4]),[2,4]);
assert.deepEqual(findEvenNumbers([1,2,3,4,5,6]),[2,4,6]);

//--------test for finding Odd Numbers from array----------//
assert.deepEqual(findOddNumbers([]),[]);
assert.deepEqual(findOddNumbers([1,3]),[1,3]);
assert.deepEqual(findOddNumbers([1,2,3,4,5,6,7]),[1,3,5,7]);

//--------test for finding sum of Numbers from array----------//
assert.deepEqual(calculateSum([]),0);
assert.deepEqual(calculateSum([1,2,3]),6);
assert.deepEqual(calculateSum([1,3]),4);
assert.deepEqual(calculateSum([1,2,3,4,5,6,7]),28);

//--------test for reversing array------------------------//
assert.deepEqual(reverseArray([1,2]),[2,1]);
assert.deepEqual(reverseArray([]),[]);
assert.deepEqual(reverseArray([1,2,3]),[3,2,1]);

//--test for array of every second elements from given array --//
assert.deepEqual(extractEverySecondElement([]),[]);
assert.deepEqual(extractEverySecondElement([1,2]),[1]);
assert.deepEqual(extractEverySecondElement([1,2,3]),[1,3]);

//---------------test for greatest number in array------------//
assert.deepEqual(findGreatestNumber([1,2]),2);
assert.deepEqual(findGreatestNumber([3,4,1,2]),4);
assert.deepEqual(findGreatestNumber([]),"");

//---------------test for Lowest number in array------------//
assert.deepEqual(findLowestNumber([1,2]),1);
assert.deepEqual(findLowestNumber([3,4,1,2]),1);
assert.deepEqual(findLowestNumber([]),"");

//---------------test for mapping the length of string------------//
//assert.deepEqual(mapLengthOfString(["I","am","step","interns"],[1,2,4,7]));

console.log("-------------Everything is fine-----------------");
