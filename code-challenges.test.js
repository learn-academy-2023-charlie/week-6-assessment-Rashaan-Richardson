// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// describe("cappy", () => {
//     it("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized, () => {
//          const hitchhikersCharacters = [{ name: "ford prefect", occupation: "a hitchhiker" },{ name: "zaphod beeblebrox", occupation: "president of the galaxy" },{ name: "arthur dent", occupation: "a radio employee" }]
//          Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
//          expect(cappy = (hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//     })
// })

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// create a function that takes in an array of objects
const cappy = (element) => {
  return element.map(value => {
    // On this line, I want to use string interpertation to format the output as i see fit. We need to use 'dot' notation to single our the key of the information we're looking for. Then charAt() to capitalize our first character. Then add it all together 
    return `${value.name.charAt(0).toUpperCase() + value.name.slice(1)} is ${value.occupation}.`;
  });
}
console.log(cappy(hitchhikersCharacters));
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
// describe("numby3", () => {
//     it("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
//          const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//          Expected output: [ 2, 0, -1, 0 ]
//          expect(numby3 = (hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//     })
// })
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// create a function that takes in an array
const numby3 = (element) => {
  // filter will be used to get only our number data types. Which is typeof with the conditional of number. Then I can use the map function to iterate over the new array. then use the modular operator to get the remainders of all the number types of 3 
  return element.filter(value => typeof value === "number").map(number => number % 3)
}
console.log(numby3(hodgepodge1));
console.log(numby3(hodgepodge2));

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// describe("cubeSum", () => {
//     it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed..", () => {
//          const cubeAndSum1 = [2, 3, 4]
//          Expected output: 99
//          expect(cubeSum = (cubeAndSum1)).toEqual(99)
//     })
// })

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Create a function that takes in an array of numbers
const cubeSum =(element) =>{
  // add a variable to store our answer. 
  res = 0
  // use map to iterate over the array. which i call value. cube value and then add that to our res variable 
  element.map(value => res += (value**3))
  // return res since that stored our map
  return res
}
console.log(cubeSum(cubeAndSum1));
console.log(cubeSum(cubeAndSum2));

