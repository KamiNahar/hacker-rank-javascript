/*
Problem: 
https://www.hackerrank.com/challenges/diagonal-difference/problem
*/

//understanding how multidimensional arrays work
// let arr = [
//     [1, 2, 3, 4, 5],  row 0: index 0, 1, 2
//     [1, 2, 3, 4, 5],  row 1
//     [1, 2, 3, 4, 5],   row 2
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5]
// ];
/* Try to find a pattern for the numbers you are adding in the multidimensional array. 
left diagonal
row #, index #
0,0
1,1
2,2
3,3
4,4

right diagonal 
row #, index #
0,4
1,3
2,2
3,1
4,0

];
*/

//multidimensional arrays
let arr = [[1, 1, 3], [1, 4, 3], [1, 2, 4]];

//sum of one diagonal
let firstSum = 0;
//sum of second diagonal
let secondSum = 0;
//absolute value of the difference of the sums
let difference = 0;

//add numbers on the left diagonal

for (let a = 0; a < arr.length; a++) {
  //if you want to add each number from each iteration, this is how you do it.
  firstSum = firstSum + arr[a][a];
}

for (let b = 0; b < arr.length; b++) {
  //Remember in this syntax arr[][], the first bracket is the row, second bracket is the index.
  //note: array length means how many numbers/elements are in the array.
  secondSum = secondSum + arr[b][arr.length - (b + 1)];
  //secondSum = secondSum + [0][3 - (0 + 1)];
  //secondSum = secondSum + [0][2]; (the element in [row 0][index 2] in array arr is 3 )
  //secondSum = 0 + 3 (secondSum for the first iteration is zero bc we initialized it as zero)
  //For the second iteration secondSum will now take the value of secondSum from the first iteration which is 3 and then add whatever the next number would be).
  //1st iteration = 3
  //2nd iteration = 7
  //3rd iteration = 8
}

difference = firstSum - secondSum;
//conditionally assigning a variable a value, means the value of the difference depends on if it goes into the if statement.
//so here if the difference is negative it will go into the if statement and multiply difference by -1.
if (difference < 0) {
  difference = difference * -1;
}

console.log(difference);
return difference;
