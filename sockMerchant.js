//ar is the color of each sock.
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

//object to put the socks in
let socks = {};

//counter to count each pair
let pair = 0;

/* The object holds key-value pairs. so for this array, the object will store the socks like this:
10:4
20:3
30:1
50:1
*/

//sockColor represents each element in the array.
ar.forEach((sockColor) => {
  /*If the current sock color is not inside the object,then put the sock color inside the object as a key.
We have to assign a value to the key in the object, otherwise object will be empty. 
The first time color 10 is in the object, assign it the value 1. As you find more socks the same color, you increase the value. 
So for example, in this array, when we put the socks in the object called "socks":
sock color will be the key which is "10" and the value will become 4 once you reach the end of the array
because there are four "10s" in total in the ar array.  
This is because you only want nonduplicate keys once in the object. 
For example you DO NOT want the object to do this: 10:1, 10:1, 10:1, 10:1
You want it like this: 10:4.
*/
  //This if/else statement is saying if the sock color from the array is not in the object, put the sock color in the object for the first time.
  if (!socks[sockColor]) {
    /*This syntax " socks[sockColor] " is also how you access the value of the key, and then set the value of that key to 1. */

    socks[sockColor] = 1;
    //The condition of the "else" statement is always the opposite of your "if" statement (when you have one "if" statement)
    //if the sock color is already inside the object, just increase the value of that sock color in the key:value pair.
    //remember: key is sock color, value is the number of same colored socks.
  } else {
    //access the value of the key and add one to the value everytime it comes across the same key in the object.
    socks[sockColor]++;
  }
});

//for in loop, will go through all the keys in the object (aka will go through all the socks in the object)
for (let key in socks) {
  //Access the values of the key. You can do that by using the key in the object since the keys are paired with their values.
  //Think about how a dictionary works. The key would be the word, and the value would be the definition.
  let value = socks[key];
  //find the same color socks, if value is 1 it means just one pair of that color exists in the sock object and we dont want that.
  while (value > 1) {
    /* We reassign value to be 2 less than what it was before.
  We DO NOT do this " value - 2 " because we need the value to work with later. 
  By assigning it to the variable " value " here, we can use that variable again. */
    //we are subtracting two from the value because we want to take that PAIR of socks out of the array since we are only looking for doubles
    value = value - 2;
    //add one to the counter everytime you subtract 2 from the value
    //The remainder is now the new " value ". If the remainder is not greater than 1, the while loop will not run again.
    //this is so you know total number of doubles you have
    pair++;
  }
}
console.log(pair);
