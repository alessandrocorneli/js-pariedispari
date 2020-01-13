// var nome = prompt("Inserisci il nome:");
// var nomeLeft = [];
// var nomeRight = [];
//
// if (palindromo(nome) == true) {
//   console.log("palindromo");
//   console.log(nomeLeft, nomeRight);
// }else {
//   console.log("non palindromo");
//   console.log(nomeLeft, nomeRight);
// }
// function palindromo(nome) {
//   for (var i = 0; i < nome.length; i++) {
//     nomeLeft.push(nome[i])
//   }
//   for (var i = nome.length - 1; i >= 0; i--) {
//     nomeRight.push(nome[i])
//   }
//   if (nomeLeft == nomeRight) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// PROVA SOLO STRINGA!! //

var nome = prompt("Inserisci un nome:");

if (palindromo(nome)) {
  document.writeln("palindromo");
}
else {
  document.writeln("non palindromo");
}

function palindromo(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
