const isOdd = function(number){
  return Math.abs(number%2)==1;
}

const isEven = function(number){
  return Math.abs(number%2)==0;
}

const add = function(num1,num2){
  return num1+num2;
}
const findOddNumbers = function (givenArray){
  return givenArray.filter(isOdd);
}

const findEvenNumbers = function (givenArray){
  return givenArray.filter(isEven);
}

const calculateSum = function (givenArray){
  return givenArray.reduce(add);
}

const swapeElementsInReverse = function(givenArray){
  swapingLength=(givenArray.length)/2;
  for(let index=0; index<swapingLength; index++){
    valueToSwap = givenArray[index];
    givenArray[index]=givenArray[givenArray.length-1-index]; 
    givenArray[givenArray.length-index-1]=valueToSwap;
  }
  return givenArray;
}

const reverseOriginalArray = function (givenArray){
  return swapeElementsInReverse(givenArray);
}

const isIndexEven = function(element,index){
  return isEven(index);
}

const extractEverySecondElement = function (givenArray){
  return givenArray.filter(isIndexEven); 
}

const findGreaterNumber = function(num1,num2){
  if(num1>num2){
    return num1;
  }
  return num2;
}

const findLowerNumber = function(num1,num2){
  if(num1>num2){
    return num2;
  }
  return num1;
}


const findGreatestNumber = function(givenArray){
  return givenArray.reduce(findGreaterNumber);
}

const findLowestNumber = function(givenArray){
  return givenArray.reduce(findLowerNumber);
}

const calculateAverageOfNumbers = function(givenArray){
  return (calculateSum(givenArray))/givenArray.length;
}

const mapLengthOfText = function(text){
  return text.length;
}

const mapLengthOfElements = function(givenArray){
  return givenArray.map(mapLengthOfText);
}

const countOddNumbers = function(givenArray){
  return findOddNumbers(givenArray).length;
}

const countEvenNumbers = function(givenArray){
  return findEvenNumbers(givenArray).length;
}

const isAbove = function(threshold){
  return function(element){
    return isGreater(element,threshold)
  }
}

const isBelow = function(threshold){
  return function(element){
    return isLower(element,threshold)
  }
}
 
const countNumbersAboveThreshold = function(givenArray,threshold){
  const belowBoundary = isAbove(threshold); 
  return givenArray.filter(belowBoundary).length;
}

const countNumbersBelowThreshold = function(givenArray,threshold){
  const upperBoundary = isBelow(threshold);
  return givenArray.filter(upperBoundary).length; 
}

const reverseArray = function(givenArray){
  let lastIndex = (givenArray.length)-1;
  let reversedArray = [];
  for(let reversedIndex=lastIndex; reversedIndex>=0; reversedIndex--){
    let index = givenArray.length-reversedIndex-1; 
    reversedArray[reversedIndex] = givenArray[index];
  }
  return reversedArray;
}

const findIndexOfNumber = function(givenArray,number){
  indexOfGivenNumber = -1;
  for(let index=0; index<givenArray.length; index++){
    if(givenArray[index]==number){
      indexOfGivenNumber = index;
      return indexOfGivenNumber;
    }
  }
  return indexOfGivenNumber;
}

const isAscending = function(givenArray){
  let isAscending = true;
  for(let index=0; index<(givenArray.length)-1; index++){
    if(givenArray[index]>givenArray[index+1]){
      isAscending = false;
    }
  }
  return isAscending;
}

const isDescending = function(givenArray){
  let isDescending = true;
  for(let index=0; index<(givenArray.length)-1; index++){
    if(givenArray[index]<givenArray[index+1]){
      isDescending = false;
    }
  }
  return isDescending;
}

const extractDigitsFromNumber = function(givenNumber){
  let requiredArray = []; // have to change the variable name
  stringOfGivenNumber = ""+givenNumber; 
  noOfDigits = (""+givenNumber).length;
  for(let index=0; index<noOfDigits; index++){
    requiredArray[requiredArray.length] = stringOfGivenNumber[index];
  }
  return requiredArray;
}



const findUnique = function(givenArray){ //function name to change
  let uniqueElementsArray = [];
  for(let index=0; index<givenArray.length; index++){
    if(!(uniqueElementsArray.includes(givenArray[index]))){
      uniqueElementsArray[uniqueElementsArray.length]=givenArray[index];//too long
    }
  }
  return uniqueElementsArray;
}

const findUnion = function(array1,array2){
  let unionArray = array1.concat(array2);
  return findUnique(unionArray);
}

const findIntersection = function(array1,array2){ //function name to change
  let intersectedElementsArray = [];
  for(let index=0; index<array1.length; index++){
    if(array2.includes(array1[index])){
      intersectedElementsArray[intersectedElementsArray.length]=array1[index];//too long 
    }
  }
  return intersectedElementsArray;
}

const findDifference = function(array1,array2){ //function name to change
  let differentElementsArray = [];
  for(let index=0; index<array1.length; index++){
    if(!(array2.includes(array1[index]))){
      differentElementsArray[differentElementsArray.length]=array1[index];//too long bad variable name 
    }
  }
  return differentElementsArray;
}

const isSubset= function(array1,array2){ 
  let isSubset= true;
  for(let index=0; index<array2.length; index++){
    if(!(array1.includes(array2[index]))){
      isSubset= false;
    }
  }
  return isSubset;
}

const zipArrays = function(array1,array2){
  zipLength = findLowestNumber([array1.length,array2.length]);
  let zippedArray = new Array(zipLength);
  for(let index=0; index<zipLength; index++){
    zippedArray[index] = [array1[index],array2[index]];    
  }
  return zippedArray;
}

const rotateArray = function(givenArray,rotationFrequency){
  let rotatedArray = [];
  for(let index=0; index<givenArray.length; index++){
    indexOfGivenArray = (index+rotationFrequency)%(givenArray.length);
    rotatedArray[index] = givenArray[indexOfGivenArray]; 
  }
  return rotatedArray;
}

const isGreater = function(num1,num2){
  return (num1-num2)>0;
}

const isLower = function(num1,num2){
  return num1 < num2;
}

const partition = function(object,element,pivot){
  let whichPart = object[isLower(pivot,element)];
  let length = whichPart.length;
  whichPart[length] = element;
  return object;
}

const partitionGenerater = function (pivot){
  return function (object,element){
    return partition(object,element,pivot);
  }
}

const partitionArrays = function(givenArray,pivot){
  const partitate = partitionGenerater(pivot);
  let result = givenArray.reduce(partitate,{true:[],false:[]});
  return [result.false,result.true]
}

exports.findOddNumbers = findOddNumbers;
exports.findEvenNumbers = findEvenNumbers;
exports.calculateSum = calculateSum;
exports.reverseOriginalArray = reverseOriginalArray;
exports.extractEverySecondElement = extractEverySecondElement;
exports.findGreatestNumber = findGreatestNumber;
exports.findLowestNumber = findLowestNumber;
exports.calculateAverageOfNumbers = calculateAverageOfNumbers;
exports.mapLengthOfString = mapLengthOfElements;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.countNumbersAboveThreshold = countNumbersAboveThreshold;
exports.countNumbersBelowThreshold = countNumbersBelowThreshold;
exports.reverseArray = reverseArray;
exports.findIndexOfNumber = findIndexOfNumber;
exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.extractDigitsFromNumber = extractDigitsFromNumber;
exports.findUnique = findUnique;
exports.findUnion = findUnion;
exports.findIntersection = findIntersection;
exports.findDifference = findDifference;
exports.isSubset= isSubset;
exports.zipArrays = zipArrays;
exports.rotateArray = rotateArray;
exports.partitionArrays = partitionArrays;
