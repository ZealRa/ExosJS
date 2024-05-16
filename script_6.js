// Définition du code génétique : codons et acides aminés correspondants
const geneticCode = {
  "UCU": "Sérine",
  "UCC": "Sérine",
  "UCA": "Sérine",
  "UCG": "Sérine",
  "AGU": "Sérine",
  "AGC": "Sérine",
  "CCU": "Proline",
  "CCC": "Proline",
  "CCA": "Proline",
  "CCG": "Proline",
  "UUA": "Leucine",
  "UUG": "Leucine",
  "UUU": "Phénylalanine",
  "UUC": "Phénylalanine",
  "CGU": "Arginine",
  "CGC": "Arginine",
  "CGA": "Arginine",
  "CGG": "Arginine",
  "AGA": "Arginine",
  "AGG": "Arginine",
  "UAU": "Tyrosine",
  "UAC": "Tyrosine"
};

// Fonction pour traduire un ARN en une suite d'acides aminés
function translateARN(ARN) {
  // Découper l'ARN en codons (groupes de 3 lettres)
  const codons = ARN.match(/.{1,3}/g);

  // Traduire chaque codon en acide aminé selon le code génétique
  const acidesAmines = codons.map(codon => geneticCode[codon]);

  // Joindre les noms des acides aminés pour former la protéine
  const proteine = acidesAmines.join("-");

  // Retourner la protéine
  return proteine;
}

// ARN à traduire en protéines
const ARN1 = "CCGUCGUUGCGCUACAGC";
const ARN2 = "CCUCGCCGGUACUUCUCG";

// Traduire les ARN en protéines et afficher le résultat
console.log("Protéine pour ARN1 :", translateARN(ARN1));
console.log("Protéine pour ARN2 :", translateARN(ARN2));
