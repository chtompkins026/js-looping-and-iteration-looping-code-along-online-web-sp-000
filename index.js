// Code your solutions in this file

function printBadges(array){ 
  for (let i = 0; i < array.length; i+=1) { 
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array; 
}

function maybeTrue() {
    return Math.random() >= 0.5;
}
 
 function tailsNeverFails() {  
   let tails = 0; 
    while (maybeTrue()){ 
      tails += 1; 
    }
    console.log(`You got ${tails + 1} tails in a row!`);
}

tailsNeverFails();