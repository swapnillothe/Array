const findOddNumbers = function (givenArray){
  let arrayOfOddNumbers = [];
  for(number of givenArray){
    if(+number%2){
      arrayOfOddNumbers[arrayOfOddNumbers.length] = +number;
    }
  }
  return arrayOfOddNumbers
}

const findEvenNumbers = function (givenArray){
  let arrayOfEvenNumbers = [];
  for(number of givenArray){
    if(+number%2==0){
      arrayOfEvenNumbers[arrayOfEvenNumbers.length] = +number;
    }
  }
  return arrayOfEvenNumbers
}

const calculateSum = function (givenArray){
  let sum = 0;
  for(number of givenArray){
    sum = sum + (+number);
  }
  return sum;
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
const reverseArray = function (givenArray){
  return swapeElementsInReverse(givenArray);
}

const giveEveryNthElement = function (nNumber,givenArray){
  let requiredArray = [];
  for(let index = 0; index < givenArray.length; index+=nNumber){
    requiredArray[requiredArray.length] = +givenArray[index] 
  }
  return requiredArray;
}

const giveEvery2ndElement = function (givenArray){
  let requiredArray = [];
  return giveEveryNthElement(2,givenArray);
}

const findGreatestNumber = function(givenArray){
  if(!givenArray.length){return ""};
  let greatestNumber = givenArray[0];
  arrayLength = givenArray.length
  for(let index=1; index<arrayLength; index++){
    if(greatestNumber<givenArray[index]){
      greatestNumber=givenArray[index];
    }
  }
  return greatestNumber;
}
const findLowestNumber = function(givenArray){
  if(!givenArray.length){return ""};
  let lowestNumber = givenArray[0];
  arrayLength = givenArray.length
  for(let index=1; index<arrayLength; index++){
    if(lowestNumber>givenArray[index]){
      lowestNumber=givenArray[index];
    }
  }
  return lowestNumber;
}
exports.findOddNumbers = findOddNumbers;
exports.findEvenNumbers = findEvenNumbers;
exports.calculateSum = calculateSum;
exports.reverseArray = reverseArray;
exports.giveEveryNthElement = giveEveryNthElement;
exports.giveEvery2ndElement = giveEvery2ndElement;
exports.findGreatestNumber = findGreatestNumber;
exports.findLowestNumber = findLowestNumber;
