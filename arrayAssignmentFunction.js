const findOddNumbers = function (givenArray){
  let arrayOfOddNumbers = [];
  for(number of givenArray){
    if(number%2){
      arrayOfOddNumbers[arrayOfOddNumbers.length] = +number;
    }
  }
  return arrayOfOddNumbers
}

const findEvenNumbers = function (givenArray){
  let arrayOfEvenNumbers = [];
  for(number of givenArray){
    if(number%2==0){
      arrayOfEvenNumbers[arrayOfEvenNumbers.length] = +number;
    }
  }
  return arrayOfEvenNumbers
}


const main = function(){
  let argument = process.argv[2]; 
  let givenArray = process.argv[3];
  if ( argument == "odd"){
    console.log(findOddNumbers(givenArray));
  }
  if ( argument == "even"){
    console.log(findEvenNumbers(givenArray));
  }
  if ( argument == "sum"){
    console.log(sumOfNumbers(givenArray))
  }
  return;
}

main();
exports.findOddNumbers = findOddNumbers;
exports.findEvenNumbers = findEvenNumbers;
