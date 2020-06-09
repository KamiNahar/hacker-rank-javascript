//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=internal-search
//divide sum by k
let k = 3;

//array of numbers
let ar = [1, 3, 2, 6, 1, 2];
/*
1 + 2
1 + 2
3 + 6
2 + 1
1 + 2
*/

//numbers you want to add together
let numOne = 0;
let numTwo = 0;
let sum = 0;
let counter = 0;

/*
Remember that when you nest for loops, both for loops do not run at the same time. You will enter the first outer for loop, 
and then enter the second inner for loop. You will run through all the elements in that second inner for loop until youve 
reached the end of the array, before you move on to the second element of the first outer for loop. This is how you stay 
on the first element of the first for loop, if you want to add all the other elements to that first element. 
*/

//find multiples of 3 by adding two numbers in the array
for (let i = 0; i < ar.length; i++) {
  numOne = ar[i];
  for (let j = i; j < ar.length; j++) {
    numTwo = ar[j + 1];
    sum = numOne + numTwo;
    //when you divide sum by k remainder should be zero, the ""== 0" refers to the remainder not the quotient
    //if sum is equally divisible by k add one to counter
    if (sum % k == 0) {
      counter++;
    }
  }
}

console.log(counter);
