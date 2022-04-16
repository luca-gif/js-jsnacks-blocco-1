const num1 = prompt("Inserisci un numero");
const num2 = prompt("Inserisci un altro numero");
let numeroMaggiore;

if (num1 > num2) {
    document.querySelector("#box").append(num1);
} else {
    document.querySelector("#box").append(num2);
}