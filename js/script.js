// PROBLEMA

// Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km) - va applicato uno sconto del 20% per i minorenni - va applicato uno sconto del 40% per gli over 65.

// 1) chiedere il numero di chilometri da percorrere
let km = parseInt(prompt("Km che si desidera percorrere"));
// 2) chiedere l'età del passeggero

let eta = parseInt(prompt("Età del passeggero"));

// 3) calcolare prezzo totale del biglietto in base ai km

let price_tot = (km * 0.21)
let price_final

// 4) cacolare scontistica
//    4.1) SE la persona è minorenne allora 20% di sconto
//       SE la persona è over 65 allora 40% di sconto
//    ALTRIMENTI prezzo normale del biglietto


if (eta <= 18) {
    price_final = (price_tot - (price_tot * 20 / 100)).toFixed(2);

}


else if (eta >= 65) {
    price_final = (price_tot - (price_tot * 40 / 100)).toFixed(2);
}

else {
    price_final=price_tot
}

console.log(price_final)



const bottone = document.getElementById("genera")

bottone.addEventListener()




 