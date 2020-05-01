//declare variables

//start of sams house
let s = 7;

//end of sams house
let t = 11;

//number of oranges
let n = 2;

//number of apples
let m = 3;

//apple tree location
let a = 5;

//orange tree location
let b = 15;

//distances apples fell from tree
let apples = [-2, 2, 1];

//distances oranges fell from the tree
let oranges = [5, -6];

//apple distance + apple tree distance
let appleTotalDistance = 0;

//orange distance + orange tree distance
let orangeTotalDistance = 0;

//counter to add to every time a number in the apples array is in the inclusive range
let appleCounter = 0;

//counter to add to every time a number in the oranges array is in the inclusive range
let orangeCounter = 0;

//calculate how many apples fell on sams house
for (let i = 0; i < apples.length; i++) {
  let appleNum = apples[i];
  //add the apple distance to the apple tree location
  appleTotalDistance = appleNum + a;
  //compare the sum to the inclusive ranges which is s and t
  if (appleTotalDistance >= s && appleTotalDistance <= t) {
    appleCounter++;
  }
}

//calculate how many oranges fell on sams house
for (let j = 0; j < oranges.length; j++) {
  let orangeNum = oranges[j];
  //add the orange distance to the orange tree location
  orangeTotalDistance = orangeNum + b;
  //compare the sum to the inclusive ranges which is s and t
  if (orangeTotalDistance >= s && orangeTotalDistance <= t) {
    orangeCounter++;
  }
}

console.log(appleCounter);
console.log(orangeCounter);
