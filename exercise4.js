const prompt = require("prompt-sync")();

let continuer = "oui";

while (continuer === "oui") {
  let hasLength = false;
  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;

  let mdp = prompt("Entrer un mot de passe : ");

  if (mdp.length >= 8) {
    hasLength = true;
  }

  for (let i = 0; i < mdp.length; i++) {
    let char = mdp[i];
    if (char >= "A" && char <= "Z") {
      hasUpper = true;
    } else if (char >= "a" && char <= "z") {
      hasLower = true;
    } else if (char >= "0" && char <= "9") {
      hasDigit = true;
    }
  }

  // Ternaire : si hasUpper est true alors ✓ sinon ✗
  let symbUp = hasUpper ? "✓" : "✗";
  let symbLow = hasLower ? "✓" : "✗";
  let symbDig = hasDigit ? "✓" : "✗";
  let symbLen = hasLength ? "✓" : "✗";
  let valide = hasDigit && hasUpper && hasLength && hasLower ? "✓" : "✗";

  // Affichage des titres du tableau
  // padEnd permet de créer de l'espace de la taille du nombre en parenthèses
  // en déduisant la longueur du mot ou de la phrase auquel il se rattache

  let widthMdp = 15;
  let widthCol = 12;

  console.log(
    "Mot de passe".padEnd(widthMdp) +
      "Long >= 8".padEnd(widthCol) +
      "Majuscule".padEnd(widthCol) +
      "Miniscule".padEnd(widthCol) +
      "Chiffre".padEnd(widthCol) +
      "Valide ?".padEnd(widthCol),
  );

  console.log(
    mdp.padEnd(widthMdp) +
      symbLen.padEnd(widthCol) +
      symbUp.padEnd(widthCol) +
      symbLow.padEnd(widthCol) +
      symbDig.padEnd(widthCol) +
      valide.padEnd(widthCol),
  );
  continuer = prompt("Voulez-vous tester un autre mot de passe ? (oui/non) : ");
}
