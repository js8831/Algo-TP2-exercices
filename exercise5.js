const prompt = require("prompt-sync")();

for (let i = 1; i <= 10; i++) {
  // pour le premier i = 1 il passe le relais a la boucle 2 qui est dans son bloc
  let produit = "";
  for (let n = 1; n <= 10; n++) {
    // pour chaque itération on effectue la multiplication ensuite on sort
    // padStart fonctionne sur les chaines de caractères
    produit += `${i * n}`.toString().padStart(7);
  }
  // et on passe au console.log car le code s'execute ligne par ligne et on revient
  // a réitere sur la boucle 1 car elle n'est pas arrivé a 10 et on recommence tout
  console.log(produit);
}
