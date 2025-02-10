function add (num1 , num2){
  return num1+num2;
 
}

function subtract (num1 , num2){
  return num1-num2;

}

function multiply (num1 , num2){
  return num1*num2;

}

function divide (num1 , num2){
 return num1/num2;
}

let num1 = ""
let num2 = ""
let operator
let result
let decimalUsedforNum1 = false ;
let decimalUsedforNum2 = false;


function operate(){

  switch(operator){

    case "+" : result = add(parseFloat(num1),parseFloat(num2));
    break;

    case "-" : result = subtract(parseFloat(num1),parseFloat(num2));
    break;

    case "*" : result = multiply(parseFloat(num1),parseFloat(num2));
    break;

    case "/" : result = divide(parseFloat(num1),parseFloat(num2));
    break;
  }
}

const container = document.querySelector("#container");
const display = document.querySelector("#display");

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((button) => {
  button.addEventListener("click", () => {
 
    if (!operator == true){ // Check if operator is not truthy or null or undefined(not pressed). Assign values to num1. 
      
      display.textContent = num1 + button.textContent;
      num1 = num1+button.textContent;
      

      if(display.textContent.length>20){
        display.textContent = "Oops! Enter less than 20 digits"
        num1 = "";
      }
    }  
    else {   
        //Operator is pressed. So numbers entered are stored in num2
      
      num2 = num2+button.textContent;
      display.textContent = num1 + operator + num2;
      
      if(display.textContent.length>20){
        display.textContent = "Oops! Enter less than 20 digits";
        num1 = "";
        num2 = "";
      }
    }
  });
});

const operators = document.querySelectorAll(".operators");
operators.forEach((button) => { 
  button.addEventListener("click", () => {

    if (!num1 == "" && !num2 == ""){  // if both numbers are present and opertor is pressed , operate and make the result appear on screen
      operate();
      operator = button.textContent;
      display.textContent = result + button.textContent;
      num1 = result;
      num2 = "";
      decimalUsedforNum2 = false;
    }

    else {  // if num1 or num2 is not present then only display num1 and text content of operator
    
      if(num1 == ""){
        num1 = 0;
        operator = button.textContent;
        display.textContent = num1 + button.textContent;
      }

      else{
      operator = button.textContent;
      display.textContent = num1 + button.textContent; }
    }
    
  });
});

const equal = document.querySelector("#equal"); 
equal.addEventListener ("click", ()=>{
  operate(); 
  if (!operator == true){
    display.textContent = "";
    num1 = "";
  }    
  else {
  result = +result.toFixed(3);
  display.textContent = result;
  num1 = result;
  num2 = "";
  decimalUsedforNum2 = false;
}
})

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
  
  if (!operator == true ){ // Check if operator is not truthy or null or undefined(not pressed). Assign values to num1. 
    
    if (decimalUsedforNum1 == false) {
      decimalUsedforNum1 = true;
      num1 = num1+decimal.textContent;
      display.textContent = num1;}
  }  
  else {   //Operator is pressed. So numbers entered are stored in num2
    if (decimalUsedforNum2 == false){
      decimalUsedforNum2 = true;
    num2 = num2+decimal.textContent;
    display.textContent = num1 + operator + num2;}
  }
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  display.textContent = "";
  result = "";
  decimalUsedforNum1 = false;
  decimalUsedforNum2 = false;
});

const back = document.querySelector("#back");
back.addEventListener ("click", ()=> {
    
  if (!operator == true){  // if operator is "", only then delete the 1st number(num1)
  let newnum1 = num1.slice(0,-1);
  num1 = newnum1;
  display.textContent = num1;}
  
  else {  

    if(num2 == ""){  //check if there's no value in num2, only then delete the operate button
      let newOperator = operator.slice(1);
      operator = newOperator;
      display.textContent = num1 + operator;
    }
    else{
    let newnum2 = num2.slice(0,-1);
    num2 = newnum2;
    display.textContent = num1 + operator + num2}
  }

});


