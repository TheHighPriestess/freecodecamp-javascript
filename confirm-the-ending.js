
function confirmEnding(string, ending){
let endingLength = ending.length;

let result = string.slice(-endingLength);

if (result === ending){
  return true;
}
else {
  return false;
}
}


let answer = confirmEnding("Abstraction", "action");
console.log(answer);