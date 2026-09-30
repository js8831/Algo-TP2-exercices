const prompt = require("prompt-sync")();
// ALGORITHME calculatriceSimple
// DEBUT
//     // Declaration
//     VARIABLE nbrUn,nbrDeux : ENTIER
let nbrUn;
let nbrDeux;
//     VARIABLE operateur : CHAINE
let operateur;
//     //Entrée
//     ECRIRE("Entrez un premier nombre : ", nbrUn)
//     LIRE(nbrUn)
nbrUn = parseFloat(prompt("Entrez un premier nombre : "));

//     ECRIRE("Entrez un deuxième nombre : "; nbrDeux)
//     LIRE(nbrDeux)
nbrDeux = parseFloat(prompt("Entrez un deuxième nombre : "));

//     ECRIRE("Entrez un opérateur : ", operateur)
//     LIRE(operateur)

operateur = prompt("Entrez un opérateur compris entre + , - , * et / : ");

//     //Traitement et sortie
//     SI operateur = "+" || "-"
//         ECRIRE("Voici le résultat de votre calcul : ", nbrUn+nbrDeux)
if (operateur === "+") {
  let somme = nbrUn + nbrDeux;
  console.log("Voici le résultat de votre calcul : ", somme);
} else if (operateur === "-") {
  let soustraction = nbrUn - nbrDeux;
  console.log("Voici le résultat de votre calcul : ", soustraction);
} else if (operateur === "*") {
  let multiplication = nbrUn * nbrDeux;
  console.log("Voici le résultat de votre calcul : ", multiplication);
} else if (operateur === "/" && nbrDeux === 0) {
  console.log("Erreur : division par zero");
} else if (operateur === "/") {
  let division = nbrUn / nbrDeux;
  console.log("Voici le résultat de votre calcul : ", division);
} else if (operateur === "%") {
  console.log("Erreur : opérateur inconnu");
}
// FIN
