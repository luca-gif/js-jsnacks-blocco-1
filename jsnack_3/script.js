let numero;
let result = 0;

for (let i = 0; i < 5; i++) {
    numero = parseInt(prompt("Inserisci un numero"));
    result += numero;
}

document.getElementById("box").append(result);