const prompt = require("prompt-sync")();

const choix = Math.floor(Math.random() * 100) + 1;
console.log(choix);
let proposition = parseFloat(prompt("Proposer un nombre entre 1 et 100 : "));

let i = 1;

while (choix !== proposition) {
  i++;

  if (choix < proposition) {
    proposition = parseFloat(
      prompt(`Essai ${i} : ${proposition} -> "Plus petit !" `),
    );
  } else if (choix > proposition) {
    proposition = parseFloat(
      prompt(`Essai ${i} : ${proposition} -> "Plus grand !" `),
    );
  }
  // Attention quand la condition est bonne il sort de la boucle alors mettre
  // ce que l'on veut à la suite.
}

console.log("Bravo ! Trouvé en", i, "essaie(s)");
