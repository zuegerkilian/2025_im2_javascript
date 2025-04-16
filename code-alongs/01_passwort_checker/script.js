console.log("hi script.js");

let password = prompt("Passwort eingeben");
let username = prompt("Username eingeben");
checkStringlength(password, 12);
checkStringlength(username, 7);

function checkStringlength(teststring, testlength) {
if (teststring.length >= testlength) {
    console.log("Der Text ist lang genug!");
} 
else {
    console.log("Bitte verwende einen längeren Text.");
}
}