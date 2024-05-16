const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtrer les entrepreneurs nés dans les années 70
const entrepreneursAnnees70 = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year <= 1979);
console.log("Les entrepreneurs nés dans les années 70 sont :");
console.log(entrepreneursAnnees70);

// Extraire un array contenant les noms et prénoms des entrepreneurs
const prenomsNomsEntrepreneurs = entrepreneurs.map(entrepreneur => ({
  prenom: entrepreneur.first,
  nom: entrepreneur.last
}));

console.log("Les prénoms et noms des entrepreneurs sont :");
console.log(prenomsNomsEntrepreneurs);

// Trouver quel âge aurait chaque entrepreneur aujourd'hui
const agesEntrepreneurs = entrepreneurs.map(entrepreneur => {
   const age = 2024 - entrepreneur.year;
   return {prenom: entrepreneur.first, nom: entrepreneur.last, age: age}
});

console.log("Les âges actuels des entrepreneurs sont :");
console.log(agesEntrepreneurs)

// Trier par ordre alphabétique du nom de famille
entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));

console.log("Voici la liste des entrepreneurs triés par ordre alphabétique du nom de famille :");
console.log(entrepreneurs);
