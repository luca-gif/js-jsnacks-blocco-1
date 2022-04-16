const invitati = ["luca", "marco", "sara", "martina"];
let nome = prompt("Come ti chiami?");
let nomePresente = false;

nome = nome.toLowerCase();

for (let i = 0; i < invitati.length; i++) {
    if (nome === invitati[i]) {
        nomePresente = true;
    }
}

if (nomePresente === true) {
    console.log("Puoi partecipare alla festa");
} else {
    console.log("Mi spiace, non puoi partecipare");
}