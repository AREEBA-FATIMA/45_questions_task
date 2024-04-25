// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Equality with strings
console.log("Testing equality with strings:");
let myName1: string = "areeba";
let myName2: string = "AREEBA";
console.log(myName1 === myName1); // True
console.log(myName1 === myName2); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log(myName2.toLowerCase() === myName1); // True

// Numerical tests
console.log("Numerical tests:");
console.log(20 > 10); // True
console.log(20 < 10); // False
console.log(20 >= 20); // True
console.log(10 <= 5); // False

// Using "and" and "or" operators
console.log("Testing with 'and' and 'or' operators:");
let x: number = 5;
let y: number = 10;
let z: number = 15;

console.log((x < y) && (y < z)); 
console.log((x < y) && (z < y)); 
console.log((x < y) || (z < y)); 
console.log((x > y) || (z < y)); 

let sisters: string[] = ["Ayesha", "Areeba", "Muqaddas"];

// Test whether an item is in an array
console.log("Is 'Muqaddas' in sisters?");
console.log(sisters.includes("Muqaddas")); // True

// Test whether an item is not in an array
console.log("Is 'Ajwah' not in sisters?");
console.log(!sisters.includes("Ajwah")); // True
