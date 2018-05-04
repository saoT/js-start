// ------------ LES OBJETS --------------

console.log('--------------- LES OBJETS ------------------');

console.log(' -------- Un objet simple -------- ');
// Cet objet se déclare de facon simple c'est un singleton.
var objetSimple = {
  cleA : 'valeurA',
  cleB : 'valeurB',
  cleC : {
    cleCA : 'valeurCA',
    cleCB : 'valeurCB'
  }
}
// Je pars toujours de l'orgine meme pour afficher plusieurs valeurs
console.log(objetSimple.cleA + ' ' + objetSimple.cleB);

// On peut imbriquer les elements les uns dans les autres
// Ca s'appelle le nesting (nichage)
console.log(objetSimple.cleC.cleCB);


// ------------ LES ARRAYS --------------
console.log('------------ LES ARRAYS --------------');

// Ce sont des variables un peu plus complexes

var arrayQuonNeFaitJamais = [1, 'un', true];

var arrayNumber = [ 1, 20, 35, 6];
var arrayString = [ '1', '20', '35', '6'];
var arrayBoolean = [ true, false, true];
// Il y aussi des arrays d'arrays ou d'objet


var arrayDeFruits = ['bananes', 'fraises', 'mangues'];

// Chaque éléments dans mon tableau a une position.
// cette position est son index.
// Le premier élément du tableau a comme index = 0
console.log('----------- index dans le tableau ------------');
console.log(arrayDeFruits[0] + ' va etre egal à banane');

console.log('----------- index dans une chaine de charactere ------------');
// Une chaine de character a des indes comme un tableau
var chaineDeCharactere = 'Ceci est une chaine de character';
console.log(chaineDeCharactere[10]);


// Mon tableau a aussi une longueur (length);
// Qui va etre egale au nombre d'elements du tableau
console.log('----------- longueur du tableau ------------');
console.log(arrayDeFruits.length);

// ------------ LES BOUCLES --------------
console.log('------------ LES BOUCLES --------------');

console.log('------------ la boucle FOR --------------');
// i=0 j'intialise mon compteur
// i<10 on lui donne une condition de fin
// i++ on li donne l'action d'incrémentation
for (i=0; i<10; i++) {
  console.log(i);
}

// Je peux utiliser mon tableau pour définir la longueur de ma boucle
console.log('-------- en mode FOR ---------');
for (i=0; i<arrayDeFruits.length; i++) {
  console.log(arrayDeFruits[i]);
}

// REVIENT AU MEME que :
console.log('-------- en mode FOREACH ---------');
arrayDeFruits.forEach( function (fruit) {
  console.log(fruit);
});

console.log('------------ la boucle WHILE --------------');

// elle prend en argument une condition true ou false
var i = 200;
while ( i > 180 ) {
  console.log(i);
  i--;
}

console.log('------------ Boucler dans un array d\'OBJETs --------------');
var arrayDObjets = [
  {
    name : 'Le chanteur',
    head : 'perruque',
    hand : 'guitar'
  },
  {
    name : 'La chanteuse',
    head : 'foulard',
    hand : 'bague'
  },
  {
    name : 'Le policier',
    head : 'casque',
    hand : 'gun'
  },
  {
    name : 'Le cowboy',
    head : 'chapeau de cowboy',
    hand : 'cuiller'
  }
];

arrayDObjets.forEach( function (objet) {
  console.log(objet.name + ' porte un(e) ' + objet.head + ' et tient un(e) ' + objet.hand);
});

console.log('------------ Exemple avec l\'armoire --------------');
var ikea = [
  {
    name : 'Julie',
    tiroirA : 'manteaux'
  },
  {
    name : 'Julien',
    tiroirA : 'chaussures'
  },
  {
    name : 'Kevin',
    tiroirA : 'cravates' 
  },
  {
    name : 'Scott',
    tiroirA : 'pulls'
  }
];

ikea.forEach( function (armoire) {
  console.log( armoire.name + ' a des ' + armoire.tiroirA + ' dans le tiroir A de son armoire');
});








