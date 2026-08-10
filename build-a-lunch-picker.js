 let lunches = [];


function addLunchToEnd(incomingArray, lunchItem) {
 incomingArray.push(lunchItem);

 console.log(lunchItem + " added to the end of the lunch menu.");

return incomingArray;
}

lunches=addLunchToEnd(["sandwich", "apple"], "Coke");
console.log(lunches);


 
 function addLunchToStart(incomingArray, lunchItem) {
  incomingArray.unshift(lunchItem);
  console.log(lunchItem + " added to the start of the lunch menu.");
  return incomingArray;
 }
 
lunches=addLunchToStart(["sandwich", "apple"], "Coke");
console.log(lunches); 


 
function removeLastLunch (incomingArray){
    
    if (incomingArray.length === 0) {
    console.log("No lunches to remove.");
   }
   else{
   let lastItemRemoved = incomingArray.pop();
   console.log(lastItemRemoved + " removed from the end of the lunch menu.");
    }
    return incomingArray;
}

removeLastLunch(["sandwich", "apple"]); 




 function removeFirstLunch (incomingArray){
    
   if (incomingArray.length === 0) {
   console.log("No lunches to remove.");
   }
   else{
      let firstItemRemoved = incomingArray.shift();
   console.log(firstItemRemoved + " removed from the start of the lunch menu.");
   }
   return incomingArray;
}

removeFirstLunch(["sandwich", "apple"]); 




function getRandomLunch(incomingArray){
   if (incomingArray.length === 0){
   console.log("No lunches available.");
   }
   else {
    let getIndex = Math.floor(Math.random()* incomingArray.length);
    let randomIndex = incomingArray[getIndex];
    console.log("Randomly selected lunch: "+ randomIndex);
}
}

getRandomLunch(["sandwich", "apple", "spaghetti", "soup", "hamburger", "hot dog"]);




function showLunchMenu(incomingArray){
    if (incomingArray.length === 0){
    console.log("The menu is empty.");
}
else {
    console.log("Menu items: " + incomingArray.join(", "));
}

}
showLunchMenu(["Greens", "Corns", "Beans"]); 
