const array = [];
let num;

for (let i = 0; i < 6; i++) {
    num = prompt("Inserisci un numero");
    if (num % 2) {
        array.push(num);
    }
}

console.log(num);
console.log(array);