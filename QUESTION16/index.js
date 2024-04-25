//16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guests = ["Areeba Fatima", "Anmol Fatima", "Muqaddas fatima"];
guests.map(function (item) { return console.log("Dear ".concat(item, ", I found a bigger table for u")); });
var guestBegin = "Umm-e-Habiba";
guests.unshift(guestBegin);
console.log(guests);
var middleGuest = "Ajwah Fatima";
var middleIndex = guests.length / 2;
guests.splice(middleIndex, 0, middleGuest);
console.log(guests);
var lastGuest = "Hoorain Fatima";
guests.push(lastGuest);
console.log(guests);
