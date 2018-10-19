const assert = require("assert");
const lib = require("./arrayAssignmentFunction.js");

const {findEvenNumbers} = lib; 
//--------test for finding Even Numbers from array----------//
assert.deepEqual(findEvenNumbers([]),[]);
assert.deepEqual(findEvenNumbers(["a"]),[]);
assert.deepEqual(findEvenNumbers([2,4]),[2,4]);
assert.deepEqual(findEvenNumbers([1,2,3,4,5,6]),[2,4,6]);
assert.deepEqual(findEvenNumbers([-1,2,3,-4,-5,6]),[2,-4,6]);

const {findOddNumbers} = lib; 
//--------test for finding Odd Numbers from array----------//
assert.deepEqual(findOddNumbers([]),[]);
assert.deepEqual(findOddNumbers(["a"]),[]);
assert.deepEqual(findOddNumbers([1,3]),[1,3]);
assert.deepEqual(findOddNumbers([1,2,3,4,5,6,7]),[1,3,5,7]);
assert.deepEqual(findOddNumbers([-1,2,-3,4,5,-6,7]),[-1,-3,5,7]);

const {calculateSum} = lib;
//--------test for finding sum of Numbers from array----------//
assert.deepEqual(calculateSum([]),0);
assert.deepEqual(calculateSum([-1,3,5]),7);
assert.deepEqual(calculateSum([1,2,3]),6);
assert.deepEqual(calculateSum([1,3]),4);
assert.deepEqual(calculateSum([1,2,3,4,5,6,7]),28);

const {reverseOriginalArray} = lib;
//--------test for reversing array------------------------//
assert.deepEqual(reverseOriginalArray([1,2]),[2,1]);
assert.deepEqual(reverseOriginalArray([]),[]);
assert.deepEqual(reverseOriginalArray([1,2,3]),[3,2,1]);
assert.deepEqual(reverseOriginalArray([1,2,3]),[3,2,1]);

const {extractEverySecondElement} = lib;
//--test for array of every second elements from given array --//
assert.deepEqual(extractEverySecondElement([]),[]);
assert.deepEqual(extractEverySecondElement([1,2]),[1]);
assert.deepEqual(extractEverySecondElement([1,2,3]),[1,3]);

const {findGreatestNumber} = lib; 
//---------------test for greatest number in array------------//
assert.deepEqual(findGreatestNumber([1,2]),2);
assert.deepEqual(findGreatestNumber([3,4,1,2]),4);
assert.deepEqual(findGreatestNumber([]),"");

const {findLowestNumber} = lib;
//---------------test for Lowest number in array------------//
assert.deepEqual(findLowestNumber([1,2]),1);
assert.deepEqual(findLowestNumber([3,4,1,2]),1);
assert.deepEqual(findLowestNumber([]),);

const {mapLengthOfString} = lib;
//---------------test for mapping the length of string------------//
assert.deepEqual(mapLengthOfString(["I","am","step","interns"]),[1,2,4,7]);
assert.deepEqual(mapLengthOfString(["I"]),[1]);
assert.deepEqual(mapLengthOfString([]),[]);

const {countOddNumbers} = lib;
//---------------test for counting odd numbers in array----------//
assert.deepEqual(countOddNumbers([1,2,3,4,5]),3);
assert.deepEqual(countOddNumbers([1,-2,-3,4,5]),3);
assert.deepEqual(countOddNumbers([1]),1);
assert.deepEqual(countOddNumbers([]),0);

const {countEvenNumbers} = lib;
//---------------test for counting even numbers in array----------//
assert.deepEqual(countEvenNumbers([1,2,3,4,5]),2);
assert.deepEqual(countEvenNumbers([1,-2,-3,4,5]),2);
assert.deepEqual(countEvenNumbers([1]),0);
assert.deepEqual(countEvenNumbers([]),0);

const {countNumbersAboveThreshold} = lib;
//------test for counting numbers above threshold in array----------//
assert.deepEqual(countNumbersAboveThreshold([1,2,3,4,5],2),3);
assert.deepEqual(countNumbersAboveThreshold([1,2,3,5],1),3);
assert.deepEqual(countNumbersAboveThreshold([],2),0);

const {countNumbersBelowThreshold} = lib;
//------test for counting numbers below threshold in array----------//
assert.deepEqual(countNumbersBelowThreshold([1,2,3,4,5],2),1);
assert.deepEqual(countNumbersBelowThreshold([1,2,3,5],3),2);
assert.deepEqual(countNumbersBelowThreshold([],2),0);

const {reverseArray} = lib;
//--------test for reversing array------------------------//
assert.deepEqual(reverseArray([1,2]),[2,1]);
assert.deepEqual(reverseArray([]),[]);
assert.deepEqual(reverseArray([1,2,3]),[3,2,1]);
assert.deepEqual(reverseArray([1,2,3]),[3,2,1]);

const {findIndexOfNumber} = lib;
//--------test for reversing array------------------------//
assert.deepEqual(findIndexOfNumber([1,2],1),0);
assert.deepEqual(findIndexOfNumber([],2),-1);
assert.deepEqual(findIndexOfNumber([1,2,3],3),2);
assert.deepEqual(findIndexOfNumber([1,2,3],1),0);

const {isAscending} = lib;
//--------test for is ascending in array------------------------//
assert.deepEqual(isAscending([1,2,3,4]),true);
assert.deepEqual(isAscending([1,-2,3,4]),false);
assert.deepEqual(isAscending([-1,-2,-3,-4]),false);
assert.deepEqual(isAscending([-4,-3,-2,-1]),true);
assert.deepEqual(isAscending([4,3,2,1]),false);
assert.deepEqual(isAscending([1,12]),true);
assert.deepEqual(isAscending([]),true);

const {isDescending} = lib;
//--------test for is descending in array-----------------------//
assert.deepEqual(isDescending([1,2,3,4]),false);
assert.deepEqual(isDescending([4,3,2,1]),true);
assert.deepEqual(isDescending([1,-2,3,4]),false);
assert.deepEqual(isDescending([-1,-2,-3,-4]),true);
assert.deepEqual(isDescending([-4,-3,-2,-1]),false);
assert.deepEqual(isDescending([1,12]),false);
assert.deepEqual(isDescending([]),true);

const {extractDigitsFromNumber} = lib; // to add a test of negative numbers
//--------test for extracting digits from given number----------//
assert.deepEqual(extractDigitsFromNumber(12345),[1,2,3,4,5]);
//assert.deepEqual(extractDigitsFromNumber()) Edge case;
assert.deepEqual(extractDigitsFromNumber(78),[7,8]);
assert.deepEqual(extractDigitsFromNumber(0),[0]);

const {findUnique} = lib;
//--------test for extracting digits from given number----------//
assert.deepEqual(findUnique([1,2,3]),[1,2,3]);
assert.deepEqual(findUnique([3]),[3]);
assert.deepEqual(findUnique([]),[]);

const {findUnion} = lib;
//---test for creating new array containing union of given two array---//
assert.deepEqual(findUnion([1,2,3],[4,5,6]),[1,2,3,4,5,6]);
assert.deepEqual(findUnion([1,2,3],[2,3]),[1,2,3]);
assert.deepEqual(findUnion([1,2,3],[2,3,5]),[1,2,3,5]);
assert.deepEqual(findUnion([],[1,2,3]),[1,2,3]);

const {findIntersection} = lib;
//---test for creating new array containing intersection of given two array---//
assert.deepEqual(findIntersection([1,2,3,4],[2,3]),[2,3]);
assert.deepEqual(findIntersection([1,2,3,4],[2,3,5]),[2,3]);
assert.deepEqual(findIntersection([1,4],[2,3]),[]);

const {findDifference} = lib;
//---test for creating new array of elements of first array which are not in second array--//
assert.deepEqual(findDifference([1,2,3,4],[2,3]),[1,4]);
assert.deepEqual(findDifference([1,2,3,4],[2,3,5]),[1,4]);
assert.deepEqual(findDifference([1,4],[2,3]),[1,4]);

const {isSubsetOf} = lib;
//--------test for checking: is first set subset of second----------//
assert.deepEqual(isSubsetOf([1,2,3],[3]),true);
assert.deepEqual(isSubsetOf([1,4,3,6],[3,1]),true);
assert.deepEqual(isSubsetOf([1,-4,-3,6],[3,1]),false);
assert.deepEqual(isSubsetOf([1,2],[3]),false);
assert.deepEqual(isSubsetOf([1,2,3],[]),true);

const {zipArrays} = lib;
//-------test for zipping two arrays in new array is added----------//
assert.deepEqual(zipArrays([1,2,3],[0,4,5]),[[1,0],[2,4],[3,5]]);
assert.deepEqual(zipArrays([1,2],[0]),[[1,0]]);
assert.deepEqual(zipArrays([1],[0,2]),[[1,0]]);
assert.deepEqual(zipArrays(["a"],["b","c"]),[["a","b"]]);

const {rotateArray} = lib; 
//-------test for creating new array of rotated array---------//
assert.deepEqual(rotateArray([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotateArray([1,2,3,4,5],5),[1,2,3,4,5]);
assert.deepEqual(rotateArray([1,2,3,4,5],0),[1,2,3,4,5]);
assert.deepEqual(rotateArray([1,2,3,4,5],6),[2,3,4,5,1]);
assert.deepEqual(rotateArray([1,2,3,4,5],-2),[4,5,1,2,3]);
assert.deepEqual(rotateArray([1,2,3,4,5],0),[1,2,3,4,5]);


console.log("-------------Everything is fine-----------------");
