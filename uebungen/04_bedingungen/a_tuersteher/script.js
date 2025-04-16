/*
* 04.a - Türsteher
* Du arbeitest in einem Club als Türsteher:in. Du willst
* deinen Arbeitsalltag automatisieren und baust dir eine
* Funktion, welche ein Alter (number) als Parameter nimmt
* und dann in der Konsole ausspuckt, welche Getränke mit
* diesem Alter konsumiert werden dürfen.
*
* Unter 16: Du bist zu jung um Alkohol zu kaufen.
* Unter 18: Du bist zu jung für Schnaps.
* 18 oder darüber: Yeah, volljährig - kauf was du willst.
*
* Wenn du Lust hast, kannst du auch versuchen die Funktion
* noch etwas schlauer zu machen. Und zwar wäre es ja am
* besten, wenn anstatt das Alter direkt ein Geburtsdatum
* als Parameter eingegeben werden könnte. Nimm dir hierzu
* diese Anleitung zur Hilfe (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=de)
* oder arbeite mit KI.
* */

const myAge = prompt("Wie alt bist du?"); // Alter abfragen

checkAge(myAge); // Funktion aufrufen

function checkAge(age) {
    if (age >= 18) {
        console.log("Yeah, volljährig - kauf was du willst.");
    } //if wird als erstes geckeckt da leserichtung von code von obe nach unten ist.
    else if (age >= 16) {
        console.log("Du bist zu jung für Schnaps.");
    } // else if kommt nur zum zug wenn es nicht bei if nicht passt und dann wird else if gecheckt. Nicht zwei mal if hintereinander schreiben.
    else {
        console.log("Du bist zu jung, geh nach hause!");
    } // wird als letztes geckeckt. Alles was nicht in if und else if passt wird hier eingeordnet.

    //else if kann merhmals hintereinander geschrieben werden. Aber if und else muss immer nur einmal am Anfang und Ende stehen.

}