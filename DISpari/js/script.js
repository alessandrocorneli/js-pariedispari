var sceltaUser = prompt("pari o dispari?");
var numeroUser = prompt("Digita un numero da 1 a 5:");
var numeroAI = Math.floor(Math.random() * (6 - 1) + 1);

if (condizione = sceltaUser) {
  console.log("hai vinto!");
}
else {
  console.log("hai perso");
}

var somma = numeroAI + numeroUser;
  
function sommaPariDispari(somma){
  if (somma % 2 == 0) {
    var condizione = pari;
    console.log("somma pari");
  }else if (somma % 2 != 0) {
    var condizione = dispari;
    console.log("somma dispari");
  }
}

var somma = numeroAI + numeroUser;
console.log(numeroAI);
if (somma % 2 == 0) {
  console.log("somma pari");
}
else {
  console.log("somma dispari");
}
