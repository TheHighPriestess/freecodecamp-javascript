function truncateString(stringarg,numarg){
  let stringLength = stringarg.length;
  if (stringLength > numarg){
    let newString = stringarg.substring(0, numarg);
    console.log(newString);
    return newString + "...";
  }
  else {
    return stringarg;
  }
}


let result = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);


console.log(result);