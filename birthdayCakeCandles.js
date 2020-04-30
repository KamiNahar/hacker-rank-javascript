//  declare array
let arr = [3, 1, 2, 3];
let counter = 0;
let tallestCandle; //  dont have to initialize in JavaScript

//  sort array
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    let currentNum = arr[j];
    let nextNum = arr[j + 1];
    //  comparing the index's values (which are the elements)
    if (currentNum > nextNum) {
      arr[j + 1] = currentNum;
      arr[j] = nextNum;
    }
  }
}
// arr.length tells you how many elements are inside the array. In this case there are 4 (# 3, 3,2, 1).
//  arr[ ] This syntax is used to access the array index. So here arr[arr.length] means go to array arr and then index 4,
// (arr[4] but note that in this array there is no index 4! it only goes upto index 3),
// which is why you subtract 1 from the index in this line.
tallestCandle = arr[arr.length - 1];
// for each loop runs the code in the brackets for each element in the array.
arr.forEach((element) => {
  //  compare each value in the array to the tallestCandle value, it they are equal add 1 to the counter.
  if (tallestCandle === element) {
    counter++;
  }
});

console.log(counter);
