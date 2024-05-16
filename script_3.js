// Demande à l'utilisateur le nombre d'étages
var etages = prompt("Voici ma super pyramide ! Combien d'étages veux-tu ?");
etages = parseInt(etages); // Convertis la saisie utilisateur en nombre entier

console.log("Voici ta pyramide :");
for (var i = 1; i <= etages; i++) {
    var ligne = '';
    // Ajouter des espaces pour aligner la pyramide
    for (var j = 1; j <= etages - i; j++) {
        ligne += ' ';
    }
    // Ajouter des # pour former la pyramide
    for (var k = 1; k <= i; k++) {
        ligne += '#';
    }
    console.log(ligne);
}
