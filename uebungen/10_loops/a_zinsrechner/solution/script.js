/*
* 10.a - Zinsrechner
* Du arbeitest für eine Bank und möchtest deinen
* Kund:innen einen neuen Service anbieten - einen
* Zinsrechner. In diesen Rechner kann man Kapital,
* den aktuellen Zins und die Laufzeit angeben und
* so herausfinden, wie sich die Geldanlage auf dem
* Konto entwickelt.
*
* Benutze für die Berechnung einen for-Loop.
*
* Rechenbeispiel: Du hast 1000.- CHF auf einem
* Konto mit Jahreszins von 1 %. Im ersten Jahr beträgt
* dein Zinsertrag 10.- CHF (1 % von 1000.- CHF). Somit
* hast du dann 1010.- CHF. Im zweiten Jahr wäre dein Zinsertrag
* deshalb auch höher, und zwar 10.10 CHF (1% von 1010.- CHF).
*
* Wichtig: Die finale Berechnung (#result) ist aktuell mit
* der Klasse .hidden versehen und deshalb ausgeblendet. Sobald
* ein Ergebnis berechnet wurde, soll dieser Container angezeigt
* werden.
* */

const moneyInput = document.querySelector('#money');
const interestInput = document.querySelector('#interest');
const runtimeInput = document.querySelector('#runtime');
const evaluateBtn = document.querySelector('#evaluate');
const resultCt = document.querySelector('#result');
const finalCt = document.querySelector('#final');
const profitCt = document.querySelector('#profit');

evaluateBtn.addEventListener('click', function (e) {
    let money = parseFloat(moneyInput.value);
    const interest = parseFloat(interestInput.value);
    const runtime = parseInt(runtimeInput.value);
    if (!money || !interest || !runtime) return;
    let profit = 0;
    for (let i = 0; i < runtime; i++) {
        const plus = money * (interest / 100);
        profit += plus;
        money += plus;
    }
    finalCt.innerText = `${Math.round(money)}.- CHF`;
    profitCt.innerText = `${Math.round(profit)}.- CHF`;
    resultCt.classList.remove('hidden')
})
