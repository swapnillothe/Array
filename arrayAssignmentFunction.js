const createCompliment = function(func){
  return function(argv){
    return !func(argv);
  }
}

const isOdd = function(number){
  return Math.abs(number%2)==1;
}

const isEven=createCompliment(isOdd);

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

const reverseOriginalArray = function (givenArray){
  return givenArray.reverse();
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

const unshiftElement = function(array,element){
  (array).unshift(element);
  return array;
}

const reverseArray = function(givenArray){
  return givenArray.reduce(unshiftElement,[]);
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

const convertIntoNumber = function(string){
  return +string;
}

const extractDigitsFromNumber = function(givenNumber){
  return (""+givenNumber).split("").map(convertIntoNumber);
}

const isPresent = function(array,element){
  return (array).includes(element);
}

const fillOnlyUnique = function(array,element){
  if(isPresent(array,element)){
    return array;
  }
  (array).push(element);
  return array;
}

const findUnique = function(givenArray){ 
  return givenArray.reduce(fillOnlyUnique,[]);
}

const findUnion = function(array1,array2){
  let unionArray = array1.concat(array2);
  return findUnique(unionArray);
}

const intersectionMainFunc = function(intialValue,element,array2,array1){
  if((array2).includes(element)&&(array1).includes(element)){
    (intialValue).push(element);
    return intialValue;
  }
  return intialValue;
}

const intersectionFuncCreater = function(array2,array1){
  return function(intValue,element){
    return intersectionMainFunc(intValue,element,array2,array1);
  }
}

const findIntersection = function(array1,array2){ 
  const fillOnlyIntersected = intersectionFuncCreater(array2,array1);
  return array1.reduce(fillOnlyIntersected,[]);
}

const findDifference = function(array1,array2){ 
  let differentElementsArray = [];
  for(let index=0; index<array1.length; index++){
    if(!(array2.includes(array1[index]))){
      differentElementsArray[differentElementsArray.length]=array1[index];
    }
  }
  return differentElementsArray;
}

const isInclude = function (array){
  return function(element){
    return array.includes(element)
  }
}

const isSubset= function(array1,array2){ 
  let isIncludes = isInclude(array1);
  return !(array2.map(isIncludes).includes(false));
}

const zipArrays = function(array1,array2){
  zipLength = findLowestNumber([array1.length,array2.length]);
  let zippedArray = new Array(zipLength);
  for(let index=0; index<zipLength; index++){
    zippedArray[index] = [array1[index],array2[index]];    
  }
  return zippedArray;
}

const counter = function(start){
  return function(){
    return start++;
  }
}

const rotateArray = function(givenArray,rotationFrequency){
  let rotationIndex = rotationFrequency%givenArray.length;
  let result = givenArray.slice(rotationIndex,givenArray.length);
  return result.concat(givenArray.slice(0,rotationIndex));
}

const isGreater = function(num1,num2){
  return num1 > num2;
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
