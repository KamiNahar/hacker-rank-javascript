/*
https://www.hackerrank.com/challenges/the-birthday-bar/problem
*/

//array length is the number of chocolate squares and each square is labeled with a different number.
//let s = [5, 5, 3, 2, 2, 2, 1, 2, 5, 3, 5, 5, 4, 3, 3, 5];
let s = [
  2,
  3,
  4,
  4,
  2,
  1,
  2,
  5,
  3,
  4,
  4,
  3,
  4,
  1,
  3,
  5,
  4,
  5,
  3,
  1,
  1,
  5,
  4,
  3,
  5,
  3,
  5,
  3,
  4,
  4,
  2,
  4,
  5,
  2,
  3,
  2,
  5,
  3,
  4,
  2,
  4,
  3,
  3,
  4,
  3,
  5,
  2,
  5,
  1,
  3,
  1,
  4,
  2,
  2,
  4,
  3,
  3,
  3,
  3,
  4,
  1,
  1,
  4,
  3,
  1,
  5,
  2,
  5,
  1,
  3,
  5,
  4,
  3,
  3,
  1,
  5,
  3,
  3,
  3,
  4,
  5,
  2,
];

//m is the month, also how many numbers you can add together
//let m = 3;
let m = 8;

//d is the sum you need to get
//let d = 13;
let d = 26;

//holds the running total
let sum = 0;

//holds value of m so that once m becomes zero in the while loop, you want to start the while loop over again
//but if you use m instead of a variable that holds m, you wont be able to do that because m is now zero.
let mHolder = 0;

//counter counts how many sums of 13 there are
let counter = 0;

for (let i = 0; i < s.length; i++) {
  //set i back to zero so that you can start from the first index of the array for each iteration.
  i = 0;
  mHolder = m;
  //as long as mHolder is greater than zero this while loop will run
  while (mHolder > 0 && s.length > 0) {
    //continuously adds the values of the indexes together for each iteration
    sum += s[i];
    //adds one to i in each iteration, add one to i so that in the next iteration the next number gets added to sum. Note - youre using i in your sum equation
    i += 1;
    mHolder -= 1;
  }
  if (sum === d) {
    counter++;
  }
  sum = 0;
  s.shift();
}
console.log(counter);

/* 
Input 
82
s = [2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4, 3, 5, 3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5, 2, 5, 1, 3, 1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1, 5, 2, 5, 1, 3, 5, 4, 3, 3, 1, 5, 3, 3, 3, 4, 5, 2];

d = 26;

m = 8;

Expected Output
16
*/
