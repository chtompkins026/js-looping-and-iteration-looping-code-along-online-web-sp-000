// Code your solutions in this file

function printBadges(array){ 
  for (let i = 0; i < array.length; i+=1) { 
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}`);
  }
  return array; 
}

function maybeTrue() {
    return Math.random() >= 0.5;
}
 
while (maybeTrue()) {
    console.log('And I ran... I ran so far away!');
}