// Write a program to check if a string (passed in as an argument) is a palindrome
//  i.e. a word that reads the same backwards as forwards,
// e.g. madam. Assume that the word will not contain any spaces or special characters

function task(item) {
  let value = item.split(" ").join("");
  let result = value.split("").reverse().join("");
  if (result === value) {
    console.log("it is palindrome");
  } else {
    console.log("it is not palindrome");
  }
}
task("nab e el");
// Write a program that takes in an integer as an argument and reverses it i.e. 52 ==> 15 etc

function taks1(item) {
  let value = item.toString().split("").reverse().join("");
  console.log(value);
}
taks1(31);
//Remove from the array whatever is in the following arguments. Return the remaining values in an array.
//Ex removeSpecific([2,3,4,6,6, 'hello]) == [3,4, 'hello']

let array = [2, 3, 4, 6, 6, "hello"];
let a = array.splice(1, 2);
let b = array.pop();
let answer = [...a, b];
console.log(answer);

//An array contains numbers along with -1. Sort the array in ascening order but the place of -1s should not be changed
//e.g.  a = [-1, 150, 190, -1, -1, 160, 180]. sortByHeinght(a) = [-1, 150, 160, -1 ,-1, 180, 190 ]

let array1 = [-1, 150, 190, -1, -1, 160, 180];
let c = array1.shift();
let d = array1.splice(2, 2);
let e = array1.sort();
let f = e.splice(0, 2);
let answer1 = [c, ...f, ...d, ...e];
console.log(answer1);

//Sum All Primes
//Pass in a number to loop upto and add all prime numbers
//for example sumAllPrimes(20) =>  2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77
// Hint: create a separate function to check if the number is prime

let num = [2, 3, 5, 7, 11, 13, 17, 19];
function task5(...item) {
  for (let x of item) {
    if (x === 1) {
      console.log("not prime");
    } else if (x === 2) {
      console.log("prime");
    } else if (x % 2 === 0) {
      console.log("not prime");
    } else {
      let result = item.reduce((a, b) => {
        return a + b;
      });
      console.log(result);
    }
  }
}
task5(...num);

// Write a program that takes a string an returns the character that appears the max amount of times.
// For example maxChar(scooter) ==> returns 'o'.
// If there are multiple characters of the max length, return an array of the characters instead
// For example maxChar(zookeeper) ==> retuns ['o', 'e']
// If there are no repeating characters, return null
// For example maxChar(bed) ==> returns null

function task6(item) {
  let counts = {};
  for (let i = 0; i < item.length; i++) {
    if (counts[item[i]]) {
      counts[item[i]] += 1;
    } else {
      counts[item[i]] = 1;
    }
  }
  console.log(counts);
}
task6("nabeel");
// Find sum of the sum of two diagonals
// arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// Expected output:
// ((1 + 5 + 9) + (3 + 5 + 7)) => 15 + 15 ==> 30

let array2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// for (let i = 0; i < array2.length; i++) {
//    let result =array2[i].reduce((a, b) => {
//     return a + b;
//   });
//   console.log(result)
// }
// let sum = 0
// for (let i = 0; i < array2.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         console.log(sum + array2[i][j])
//     }

// }
let result = array2[0][0] + array2[1][1] + array2[2][2];
let result1 = array2[0][2] + array2[1][1] + array2[2][0];
let answer2 = result + result1;
console.log(answer2);

// Write a program that takes two arrays of objects and joins them according to their ids.
const titles = [
  { id: 1, title: "Title 1" },
  { id: 2, title: "Title 2" },
  { id: 3, title: "Title 3" },
];
const posts = [
  { id: 1, post: "This is post 1" },
  { id: 2, post: "This is post 3" },
  { id: 3, post: "This is post 2" },
];
// //Expected output
// [
//     { "id": 1, "title": "Title 1", "post": "This is post 1" },
//     { "id": 2, "title": "Title 2", "post": "This is post 2" },
//     { "id": 3, "title": "Title 3", "post": "This is post 3" }
// ]

let v = [...titles, ...posts];

let result2 = titles
  .map(({ id, title }, index) => {
    let post = posts.find(({ id: postId }) => postId === id);
    if (post) {
      return {
        id,
        title,
        post: post.post,
      };
    }
  })
  .filter(Boolean);
console.log(result2);

// Write a program to group duplicates in an array
// Grouping duplicates in an array
let arr = [1, 2, 4, 1, 3, 1, 2, 6];
// group(arr);

// Expected outcome: { '1': 3, '2': 2, '3': 1, '4': 1, '6': 1 }
function myfunc(n) {
  let counts = {};
  for (let i = 0; i < n.length; i++) {
    if (counts[n[i]]) {
      counts[n[i]] += 1;
    } else {
      counts[n[i]] = 1;
    }
  }
  console.log(counts);
}
myfunc(arr);
