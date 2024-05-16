// Demander à l'utilisateur le nombre pour lequel il veut calculer la factorielle
var nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
nombre = parseInt(nombre); // Convertir l'entrée utilisateur en nombre entier

// Initialiser le résultat à 1
var resultat = 1;

// Calculer la factorielle en utilisant une boucle for
for (var i = 1; i <= nombre; i++) {
    resultat *= i;
}

// Afficher le résultat dans la console
console.log("Le résultat est : " + resultat);
