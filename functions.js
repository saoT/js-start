// ----------------------- FUNCTION ---------------------
console.log('----------------------- FUNCTION ---------------------');

// Premiere etape de la function : je la construis
// On appelle ca la déclaration 
function nomDeLaFunction () {
  console.log('ma function a été appelée');
}

// Deuxieme etape de la function : on utilise la function
// On appelle ca "l'appel" d'une fonction
nomDeLaFunction();
nomDeLaFunction();
nomDeLaFunction();
nomDeLaFunction();
nomDeLaFunction();
nomDeLaFunction();

function avecArgument ( argumentDeLaFunctionA, argumentDeLaFunctionB ) {
  console.log('L\'argument de cette fonction est : ' +  argumentDeLaFunctionA);
  console.log('Le deuxieme argument est : ' +  argumentDeLaFunctionB);
}

// avecArgument(argumentDeLaFunction = 'chaussette');
avecArgument('chaussette');
avecArgument('baguette');
avecArgument();
avecArgument('chien' , 'chat');

function avecArgumentObjet (objet) {
  console.log(objet.cleA + ' ' + objet.cleB)
}

avecArgumentObjet({
  cleA : 'valeurA',
  cleB : 'valeurB'
});

console.log('-------------- CHANGE VALEUR ------------');

var a = 3
console.log( 'apres declaration var a = ' + a);

function changeValeur () {
  a = a + 2;
}

console.log( 'apres declaration function a = ' + a);

changeValeur();

console.log( 'apres appel function a = ' + a);

changeValeur();

console.log( 'apres appel function a = ' + a);

console.log('-------------- AVEC RETURN ------------');

function avecReturn ( ) {
  return 'hello'
}

var b = avecReturn();

console.log('b a la valeur de ce que me renvoie la fonction : ' + b);

var robe = 50;

function calculTVA (number) {
  return number * 1.196;
}

var robeTTC = calculTVA(robe);

console.log('prix de la robe sans charge : ' + robe);
console.log('prix de la robe TTC :' + robeTTC);








