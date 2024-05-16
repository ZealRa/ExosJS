const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été empruntés au moins une fois ?
//Initialiser une variable
var allBooksRented = true;

// Parcourir chaque livre dans l'array
for (var i = 0; i < books.length; i++) {
  // Vérifier si le nombre d'emprunts du livre actuel est égal à zéro
  if (books[i].rented === 0) {
      // Si le livre n'a pas été emprunté, mettre le drapeau à false
      allBooksRented = false;
      // Sortir de la boucle car on a déjà trouvé un livre non emprunté
      break;
  }
}

// Vérifier le résultat
if (allBooksRented) {
  console.log("Tous les livres ont été empruntés au moins une fois.");
} else {
  console.log("Au moins un livre n'a pas été emprunté.");
}

/////////////////

// Trier les livres par nombre d'emprunts (en ordre décroissant)
books.sort((a, b) => b.rented - a.rented);

// Le livre le plus emprunté est le premier élément de l'array triée
var livreLePlusEmprunte = books[0];

// Afficher le résultat
console.log("Le livre le plus emprunté est :", livreLePlusEmprunte.title);



///////////////////


// Trier les livres par nombre d'emprunts (en ordre croissant)
books.sort((a, b) => a.rented - b.rented);

// Le livre le plus emprunté est le premier élément de l'array triée
var livreLeMoinsEmprunte = books[0];

// Afficher le résultat
console.log("Le livre le moins emprunté est :", livreLeMoinsEmprunte.title);

//////////////

// Utiliser la méthode find() pour trouver le livre avec l'ID 873495
var livreRecherche = books.find(book => book.id === 873495);

// Vérifier si le livre recherché a été trouvé
if (livreRecherche !== undefined) {
    console.log("Le livre avec l'ID 873495 est :", livreRecherche.title);
} else {
    console.log("Aucun livre trouvé avec l'ID 873495.");
}

/////////////
// Recherche l'index du livre avec l'ID 133712 dans l'array books
var index = books.findIndex(book => book.id === 133712);

// Vérifie si le livre avec l'ID 133712 a été trouvé
if (index !== -1) {
    // Utilise la méthode splice() pour supprimer le livre à l'index trouvé
    books.splice(index, 1);
    console.log("Le livre avec l'ID 133712 a été supprimé avec succès.");
} else {
    console.log("Aucun livre trouvé avec l'ID 133712. Aucune suppression effectuée.");
}

////////////////
//Trier les livres par ordre alphabétique
books.sort((a, b) => {
  return a.title.localeCompare(b.title);
});

console.log("Voici les livres triés dans l'ordre alphabétique :");
console.log(books)