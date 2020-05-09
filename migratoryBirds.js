//number of birds sighted
let n = 0;

//types of birds sighted placed in an array
let arr = [1, 3, 3, 4, 4, 4, 5, 3, 2, 2, 1, 0];

//declare variables used to store nums we compare in the array to one another
//declaring variables takes up space and time, so should do that only once
let currentNum = 0;
let nextNum = 0;

//counter for duplicates
let duplicateCounter = 0;

//array to put duplicate numbers in
let duplicatesArray = [];

//sort array first
for (let i = 0; i < arr.length; i++) {
  for (let k = 0; k < arr.length; k++) {
    //reassign the variables to the index's values
    currentNum = arr[k];
    nextNum = arr[k + 1];
    if (currentNum > nextNum) {
      arr[k] = nextNum;
      arr[k + 1] = currentNum;
    }
  }
}

for (let p = 0; p < arr.length; p++) {
  currentNum = arr[p];

  for (let m = p + 1; m < arr.length; m++) {
    nextNum = arr[m];
    if (nextNum === currentNum) {
      duplicatesArray.push(currentNum);
    }
  }
}

console.log(duplicatesArray);
return duplicatesArray[0];

/*
breakdown of the nested for loop above.
your array = 1, 3, 4, 4, 4, 5,
round 1 outer for loop
1 

inner for loop 
3 to 1
4 to 1
4 to 1
4 to 1
5 to 1

Round 2 outer for loop 
3 

inner for loop 
4 to 3
4 to 3
4 to 3
5 to 3

round 3 outer for loop
4
inner for loop 
4 to 4
4 to 4
5 to 4

round 4 outer for loop 
4
inner for loop 
4 to 4
5 to 4

round 5 outer for loop
4
inner for loop
5 to 4

round 6 outer for loop 
5
inner for loop 
(skips it since 5 is the last number in the array)
*/
