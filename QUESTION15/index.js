// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guest = ["Areeba Fatima", "Ayesha Siddiqa", "Muqaddas fatima"];
console.log(guest);
var canNotJoin = "Ayesha Siddiqa";
console.log(canNotJoin + " " + "can not join us at dinner");
var newGuest = "Anmol Fatima";
guest[guest.indexOf(canNotJoin)] = newGuest;
console.log(guest);
guest.map(function (item) { return console.log("Dear ".concat(item, ", We joyfully invite you to share in our happiness at dinner")); });
