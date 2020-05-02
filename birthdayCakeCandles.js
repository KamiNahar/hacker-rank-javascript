//  declare array
let ar = [3, 1, 2, 3];
let counter = 0;
let tallestCandle; //  dont have to initialize in JavaScript

//  sort array
for (let i = 0; i < ar.length; i++) {
  for (let j = 0; j < ar.length; j++) {
    let currentNum = ar[j];
    let nextNum = ar[j + 1];
    //  comparing the index's values (which are the elements)
    if (currentNum > nextNum) {
      ar[j + 1] = currentNum;
      ar[j] = nextNum;
    }
  }
}
// arr.length tells you how many elements are inside the array. In this case there are 4 (# 3, 3,2, 1).
//  arr[ ] This syntax is used to access the array index. So here arr[arr.length] means go to array arr and then index 4,
// (arr[4] but note that in this array there is no index 4! it only goes upto index 3),
// which is why you subtract 1 from the index in this line.
tallestCandle = ar[ar.length - 1];
// for each loop runs the code in the brackets for each element in the array.
ar.forEach((element) => {
  //  compare each value in the array to the tallestCandle value, it they are equal add 1 to the counter.
  if (tallestCandle === element) {
    counter++;
  }
});

/*
how the for each loop goes the numbers in the array 
tallestCandle = 3 bc tallestCandle = ar[ar.length - 1] 
and the array numbers are : 1, 2, 3, 3
3 to 3
3 to 3
3 to 2
3 to 1
*/

//console.log just prints out the value in the console, so instead use return
return counter;
