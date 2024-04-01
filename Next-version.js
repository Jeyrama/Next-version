/*
You're fed up about changing the version of your software manually. 
Instead, you will create a little script that will make it for you.

Task:
  Create a function nextVersion, 
  that will take a string in parameter,
  and will return a string containing the next version number.

Example:
  Current           ->  Next version
  "1.2.3"           ->  "1.2.4"
  "0.9.9"           ->  "1.0.0"
  "1"               ->  "2"
  "1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
  "9.9"             ->  "10.0"

Rules:
  All numbers, except the first one, 
  must be lower than 10: if there are, 
  you have to set them to 0 and increment the next number in sequence.
*/


// Solution

function nextVersion(ver){
  let arr = ver.split(".").map(el => parseInt(el));
  for (let i = arr.length - 1; i >= 0; i--) {
     if (arr[i] + 1 == 10 && i != 0) { 
       arr[i] = 0; 
     } else {
       arr[i]++;
       break;
     }
  }
  return arr.join(".");
}