/*
* 04.b - OCD
* Deine Mitarbeiterin hat eine leichte Form von OCD und
* hat Angst vor ungeraden Zahlen. Baue ihr eine Funktion,
* die ihr eine Warnung in der Konsole zurückgibt, wenn die
* Zahl ungerade ist. Wichtig: Zahlen mit Kommastellen solle in
* Ganz-Zahlen umgewandelt werden.
*
* Was ist OCD: https://en.wikipedia.org/wiki/Obsessive%E2%80%93compulsive_disorder
* */

let number = prompt ("choose a number");
let roundedNumber = Math.round(number); // Math.round rundet die Zahl auf die nächste ganze Zahl.

checkNumber(roundedNumber); // Funktion aufrufen


function checkNumber(number) {
    if (number % 2 == 0) {
        
    } else {
        console.log("Achtung! Die Zahl ist ungerade.");
    }

function checknaturalnumber(number) {
    if (number < 0) {
        console.log("Bitte eine natürliche Zahl eingeben.");
    } else {
        console.log("Das ist eine natürliche Zahl.");
    }
}
}