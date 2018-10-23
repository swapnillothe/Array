const assert = require("assert");
  
const repeatSpace = function (width){
  return new Array(width).fill(" ").join("");
}

const repeatDash = function (width){
  return new Array(width).fill("-").join("");
}

const counter = function (count){
  return increment = function(){
    return count++;
  }
}

const count = counter(1);

const createHeader = function(){
  console.log("+--------+----------------------+---------------------------+---------------+------------------------------------+");
  let header = "| sr.no. | Function Name        | Inputs                    | Outputs       | Test for following" +repeatSpace(17)+"|" 
  console.log(header);
  console.log("+--------+----------------------+---------------------------+---------------+------------------------------------+");
  return;
}
const testLogCreater = function(func,inputArray,output,message){
  let line = "";
  let serialNumber = "" + count();
  line = line +"|   " +serialNumber + repeatSpace(5-serialNumber.length) + "|"
  line = line + " " + func.name + repeatSpace(21-(func.name).length); 
  let length = JSON.stringify(inputArray).length;
  line = line + "| " + JSON.stringify(inputArray) + repeatSpace(26-length) +"| ";
  line = line + output + repeatSpace(14-(""+output).length) + "| " 
  line = line + message + repeatSpace(35-message.length) + "|";
  console.log(line);
  console.log(repeatDash(112),"+");
  return;
}

const checkAssert = function(func,input,output,expectedOutput){
  testLogCreater(func,input,output,"message");
  assert.deepEqual(output,expectedOutput)
  return;
}

createHeader();
exports.checkAssert = checkAssert;

