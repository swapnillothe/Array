const createCompliment = function(functionRefference){
  return function(argv){
    return !functionRefference(argv);
  }
}

const counter = function(start){
  return function(){
    return start++;
  }
}

const isInclude = function (array){
  return function(element){
    return array.includes(element)
  }
}

const isOdd = function(number){
  return Math.abs(number%2)==1;
}

const isEven=createCompliment(isOdd);

const add = function(firstNumber,secondNumber){
  return firstNumber+secondNumber;
}

const findOddNumbers = function (dataSet){
  return dataSet.filter(isOdd);
}

const findEvenNumbers = function (dataSet){
  return dataSet.filter(isEven);
}

const calculateSum = function (dataSet){
  return dataSet.reduce(add);
}

const reverseDataSet = function (dataSet){
  return dataSet.reverse();
}

const isIndexEven = function(element,index){
  return isEven(index);
}

const extractEverySecondElement = function (dataSet){
  return dataSet.filter(isIndexEven); 
}

const findGreaterNumber = function(firstNumber,secondNumber){
  return Math.max(firstNumber,secondNumber);
}

const findLowerNumber = function(firstNumber,secondNumber){
  return Math.min(firstNumber,secondNumber);
}

const findGreatestNumber = function(dataSet){
  return dataSet.reduce(findGreaterNumber);
}

const findLowestNumber = function(dataSet){
  return dataSet.reduce(findLowerNumber);
}

const calculateAverageOfNumbers = function(dataSet){
  return (calculateSum(dataSet))/dataSet.length;
}

const mapLengthOfText = function(text){
  return text.length;
}

const mapLengthOfElements = function(dataSet){
  return dataSet.map(mapLengthOfText);
}

const countOddNumbers = function(dataSet){
  return findOddNumbers(dataSet).length;
}

const countEvenNumbers = function(dataSet){
  return findEvenNumbers(dataSet).length;
}

const isAbove = function(threshold){
  return compare = function(element){
    return isGreater(element,threshold);
  }
}

const isBelow = function(threshold){
  return compare = function(element){
    return isLower(element,threshold);
  }
}
 
const countNumbersAboveThreshold = function(dataSet,threshold){
  const belowBoundary = isAbove(threshold); 
  return dataSet.filter(belowBoundary).length;
}

const countNumbersBelowThreshold = function(dataSet,threshold){
  const upperBoundary = isBelow(threshold);
  return dataSet.filter(upperBoundary).length; 
}

const unshiftElement = function(array,element){
  (array).unshift(element);
  return array;
}

const reverseArray = function(dataSet){
  return dataSet.reduce(unshiftElement,[]);
}

const hasMatch = function(numberToMatch){
  const count = counter(0);
  return findIndex = function(object,element){
    let index = count();
    switch((object.numberIndex==-1)&&element==numberToMatch){
      case true : object.numberIndex = index;
    }
    return object;
  }
}

const findIndexOfNumber = function(dataSet,number){
  const hasMatched = hasMatch(number); 
  return dataSet.reduce(hasMatched,{numberIndex:-1}).numberIndex;
}

const isAscending = function(dataSet){
  let isAscending = true;
  for(let index=0; index<(dataSet.length)-1; index++){
    switch(dataSet[index]>dataSet[index+1]){
      case true : isAscending = false;
    }
  }
  return isAscending;
}

const isDescending = function(dataSet){
  let isDescending = true;
  for(let index=0; index<(dataSet.length)-1; index++){
    switch(dataSet[index]<dataSet[index+1]){
      case true :  isDescending = false;
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
  switch(isPresent(array,element)){
    case true : return array;
  }
  (array).push(element);
  return array;
}

const findUnique = function(dataSet){ 
  return dataSet.reduce(fillOnlyUnique,[]);
}

const findUnion = function(array1,array2){
  let unionArray = array1.concat(array2);
  return findUnique(unionArray);
}

const intersectionMainFunc = function(intialValue,element,array2,array1){
  switch((array2).includes(element)&&(array1).includes(element)){
    case true : (intialValue).push(element);
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
    switch(array2.includes(array1[index])){
      case false : differentElementsArray[differentElementsArray.length]=array1[index];
    }
  }
  return differentElementsArray;
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

const rotateArray = function(dataSet,rotationFrequency){
  let rotationIndex = rotationFrequency%dataSet.length;
  let result = dataSet.slice(rotationIndex,dataSet.length);
  return result.concat(dataSet.slice(0,rotationIndex));
}

const isGreater = function(firstNumber,secondNumber){
  return firstNumber > secondNumber;
}

const isLower = function(firstNumber,secondNumber){
  return firstNumber < secondNumber;
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

const partitionArrays = function(dataSet,pivot){
  const partitate = partitionGenerater(pivot);
  let result = dataSet.reduce(partitate,{true:[],false:[]});
  return [result.false,result.true]
}

exports.findOddNumbers = findOddNumbers;
exports.findEvenNumbers = findEvenNumbers;
exports.calculateSum = calculateSum;
exports.reverseDataSet = reverseDataSet;
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
