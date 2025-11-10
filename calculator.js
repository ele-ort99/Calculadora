function addSymbol(valor){
  document.getElementById("solution").value += valor;
}

function clearSolution(){
  document.getElementById("solution").value = ""
}

function calculate(){
let operation = document.getElementById("solution").value;  


function searchSigne(){
  let encontrado = false;
  let contSimb = 0
for(let i = 0; i < operation.length && encontrado == false; i++){
  if (isNaN(operation[i]) == false && isNaN(operation[i+1]) == true){
    pos = i+1;
   encontrado = true;
    } 
  }
  return pos;
}


let position = searchSigne(operation)

let num1 = operation.slice(0, position)
num1 = parseInt(num1)
let num2 = operation.slice(position + 1)
num2 = parseInt(num2)

console.log(num1)
console.log(num2)

function detectSimb(){
let simb = null
for (let i = 0; i < operation.length; i++){
  if(position == i){
    simb = operation[i];
  }
}
return simb
}
console.log(detectSimb())

simb = detectSimb()

res = num1 + simb + num2 
console.log(res)

function resolver(){
if(simb === "+"){
res = num1 + num2;
}
else if(simb === "-"){
res = num1 - num2;
}
else if(simb === "*"){
res = num1 * num2;
}
else if(simb === "/"){
res = num1 / num2;
} 
return res
}


/* let decimal = false;
function averiguarDecimal(){

if(res.toString().includes(".")){
  decimal = true
} 
}

function solDecimal(){
if(decimal == true){
input.value = " ";
} return input.value
}
 */

if(isNaN(res) == true || res == Infinity){
res = "F*CK!!!";
}
res = resolver()

document.getElementById("solution").value = res;
}
