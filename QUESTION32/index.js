// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users: string[] = ["Ayesha", "Areeba", "Muqaddas", "Umm-e-Habiba", "Anmol"];
// let new_users: string[] = ["Areeba", "Ajwah", "Hoorain", "Anmol", "Ayesha"];
// for (let i = 0; i < new_users.length; i++) {
//     let newUser = new_users[i].toLowerCase(); 
//     if (current_users.some(user => user.toLowerCase() === newUser)) {
//         console.log(`Sorry, the username '${new_users[i]}' is already taken. Please choose a different one.`);
//     } else {
//         console.log(`Congratulations! The username '${new_users[i]}' is available.`);
//     }
// }
var current_users = ["Ayesha", "Areeba", "Muqaddas", "Umm-e-Habiba", "Anmol"];
var new_users = ["Areeba", "Ajwah", "Hoorain", "Anmol", "Ayesha"];
for (var i = 0; i < new_users.length; i++) {
    var newUser = new_users[i].toLowerCase();
    var oldUser = current_users[i].toLowerCase();
    if (newUser === oldUser) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
    }
}
