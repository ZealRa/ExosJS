// Fonction pour obtenir la réponse du bot en fonction de la phrase de l'utilisateur
function getBotResponse(phrase) {
  // Si la phrase se termine par un point d'interrogation
  if (phrase.endsWith("?")) {
      return "Ouais Ouais...";
  }
  // Si la phrase est entièrement en majuscules
  else if (phrase === phrase.toUpperCase()) {
      return "Pwa, calme-toi...";
  }
  // Si la phrase contient le mot "Fortnite"
  else if (phrase.includes("Fortnite")) {
      return "on s' fait une partie soum-soum ?";
  }
  // Si la phrase est vide
  else if (phrase.length === 0) {
    console.log("Phrase vide détectée !");
    return "t'es en PLS ?";
}
  // Pour tout autre phrase
  else {
      return "balek.";
  }
}

// Demander à l'utilisateur de saisir une phrase
var userInput = prompt("Tu veux parler au bot ?");

// Obtenir la réponse du bot
var botResponse = getBotResponse(userInput);

// Afficher la réponse du bot dans la console
console.log("Bot:", botResponse);
