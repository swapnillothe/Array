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

const reverseArray = function (givenArray){
  let reversedArray = [];
  reversedArray = givenArray.reverse();
  return reversedArray;
}

const giveEveryNthElement = function (nNumber,givenArray){
  let requiredArray = [];


const main = function(){
  let argument = process.argv[2]; 
  let givenArray = process.argv[3].split(",");
  if ( argument == "odd"){
    console.log(findOddNumbers(givenArray));
  }
  if ( argument == "even"){
    console.log(findEvenNumbers(givenArray));
  }
  if ( argument == "sum"){
    console.log(calculateSum(givenArray))
  }
  if ( argument == "reverse"){
    console.log(reverseArray(givenArray))
  }

  return;
}

if(process.argv[2]){
  main();
}

exports.findOddNumbers = findOddNumbers;
exports.findEvenNumbers = findEvenNumbers;
exports.calculateSum = calculateSum;
exports.reverseArray = reverseArray;
