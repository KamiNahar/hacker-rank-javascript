/* https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

Create a highlighted rectangle around the word. 
The size of the box is based on the tallest letter height in the word and the number of letters in the word. 
For  example: 
"zaba" 

The array of numbers represents the letter sizes in the alphabet. 
1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
The width of each letter is: 1mm. 

so its going to be: height of tallest letter x width of each letter x number of total letters in the word = output
z = 7, number of letters in word = 4, 7x1x4= 28 
output is: 28 

* contraints: words contain no more than 10 letters. 
*/
//letter height sizes for each letter in the alphabet
let h = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  7,
];

//variable to store output
let boxArea = 0;

//string you want to highlight in a box
let word = 'zaba';

let tallestLetter = 0;

let letterSize = 0;

//holds each letter from the string
let letter = '';

//Map the heights from the letterHeights array[] to the letters in the alphabet object{}.
//console log it to check: console.log(alphabet);
let alphabet = {
  a: h[0],
  b: h[1],
  c: h[2],
  d: h[3],
  e: h[4],
  f: h[5],
  g: h[6],
  h: h[7],
  i: h[8],
  j: h[9],
  k: h[10],
  l: h[11],
  m: h[12],
  n: h[13],
  o: h[14],
  p: h[15],
  q: h[16],
  r: h[17],
  s: h[18],
  t: h[19],
  u: h[20],
  v: h[21],
  w: h[22],
  x: h[23],
  y: h[24],
  z: h[25],
};

//iterate through the string to check how many letters and which letters there are in your string. the string variable is called "word"
for (let i = 0; i < word.length; i++) {
  //get the letters from the string "abc"
  letter = word.charAt(i);
  //get the letter sizes from the object. (remember each letter is mapped to their sizes in the object already)
  //putting it in a variable helps so you can use it later to compare letter sizes.
  letterSize = alphabet[letter];
  //Now find the tallest letter.
  if (letterSize > tallestLetter) {
    /* Remember: The variable you are reassigning always goes on the left side of the equation. 
    TallestLetter is reassigned here to letterSize because you want to give the 
    tallestLetter a value if you encounter a value that is greater than the one it already had. 

    If you set letterSize = tallestLetter instead, you are just recording what the letterSize is going to be. 
    You are reassigning letterSize not tallestLetter. But you want to reassign tallestLetter because thats what you are looking for.*/
    tallestLetter = letterSize;
  }
}

boxArea = tallestLetter * word.length;

console.log(boxArea);
return boxArea;
