/*
https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen


-The array arr holds types of birds. 
-The numbers in the array represent different types of birds. 
-The output is the lowest number in the array that is repeated the most. 

Steps to solve problem: 
-First go through the array, sort it using the object. 
-The object will pair the keys(which is the types of birds) to the values(how many of that type of bird is in the array). 

*/
//initialize your variables. Note: initialize is when you declare your variables and give it a value;
let arr = [1, 4, 4, 4, 5, 3, 3, 3];

let birds = {};

let previousValue = 0;

let mostCommonBirdType = 0;

//Step 1
//go through the array to find the same bird types, birdType represents each element/values in the array
arr.forEach((birdType) => {
  //if the bird type is not inside the bird object,
  if (!birds[birdType]) {
    //then put the bird type in the object only once.
    /* Note on syntax: you have to call the object name to do anything with the object. 
    And then call the element name inside the object and set it to the number of elements you want to put inside the object. */
    birds[birdType] = 1;
    //else if the birdtype is already inside the object,
  } else {
    //add one more to the number of the bird type which is the value in key:value pair.
    //Remember the dictionary analogy- bird is the dictionary, birdtype is the word you are looking for.
    birds[birdType]++;
  }

  /* The object will now look like this: Key:Value
  note: the object will automatically sort the numbers in order (using the key) for you . 
  if you console log it will display it like this:  { '1': 1, '3': 1, '4': 3, '5': 1 }
  1:1 
  3:3
  4:3
  5:1
  */
});

//Step 2 (this is to get values from the keys)
// go through object, display the key with the greatest value
//the "type" represents the key in the object, the for loop is used to go through the object keys and values
for (let typeKey in birds) {
  //store the value of this type of bird in this variable "value"
  //the syntax to get the value is " objectName[keyName]"
  let value = birds[typeKey];
  //need to compare values
  //created variable previousValue so you have a place to store the last value and compare it more easily
  if (value > previousValue) {
    previousValue = value;
    mostCommonBirdType = typeKey;
  }
}

console.log(mostCommonBirdType);
