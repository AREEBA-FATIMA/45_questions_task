//14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest = ["Areeba Fatima", "Ayesha Siddiqa", "Muqaddas fatima"];
guest.map(function (item) { return console.log("Dear ".concat(item, ", We joyfully invite you to share in our happiness at dinner")); });
