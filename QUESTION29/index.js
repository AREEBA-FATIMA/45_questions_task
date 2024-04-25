"use strict";
// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let fruit_names = ['Strawberry', "Cherry", "Dragon Fruit", "Kiwi"];
if (fruit_names.includes("Dragon Fruit")) {
    console.log("I really like dragon fruit.");
}
if (fruit_names.includes("Strawberry")) {
    console.log("I really like strawberry.");
}
if (fruit_names.includes("Cherry")) {
    console.log("I really like cherry.");
}
if (fruit_names.includes("Kiwi")) {
    console.log("I really like kiwi.");
}
if (fruit_names.includes("Dragon Fruit")) {
    console.log("It is very juicy fruit.");
}
