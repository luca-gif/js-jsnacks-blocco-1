const parola1 = prompt("Inserisci una parola");
const parola2 = prompt("Inserisci un'altra parola");

if (parola1.length < parola2.length) {
    document.getElementById("box").append(parola1, " ", parola2);
} else if (parola1.length > parola2.length) {
    document.getElementById("box").append(parola2, " ", parola1);
}