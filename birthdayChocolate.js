/*
https://www.hackerrank.com/challenges/the-birthday-bar/problem
*/

//array length is the number of chocolate squares and each square is labeled with a different number.
let s = [1, 2, 1, 3, 2];

//m is the month, also how many numbers you can add together
let m = 2;

//d is the sum you need to get
let d = 3;

let numOne = 0;
let numTwo = 0;
let sum = 0;
let counter = 0;

// = means assigning a value
// ==  means comparing just the values
// === means youre comparing both the values and types

/*conditional statements includes: 
if, else if, else, and switch statements. 
*/
//nested for loops
for (let i = 0; i < s.length; i++) {
  numOne = s[i];
  /*The conditional statement inside this for loop checks if there is just one
  number in the array and if that number equals to d, then output should be 1
  and then break out of the loop. */
  if (s.length === 1) {
    if (numOne === d) {
      counter++;
      break;
    }
  }
  numTwo = s[i + 1];
  sum = numOne + numTwo;

  if (sum === d) {
    counter++;
  }
}

console.log(counter);
return counter;
