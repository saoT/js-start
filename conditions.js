// ------------ LES CONDITIONS --------------
console.log('------------ LES CONDITIONS --------------')

// if () il est suivi d'un statement qui va renvoyer true ou false
// ou un else if ()  il est suivi d'un statement qui sera lu seulement si le statement precedent est faux
// ou un else sera executé si aucune desconditoins precedentes n'est vrai

if ( true ) {
  console.log('Ce statement est vrai');
}

if ( false ) {
  console.log('ce statement n\'est pas vrai');
}

// Les conditions qu'on écrit entre parenthèses sont lus par le programme et traduites
// en true ou false

console.log('------------- Comparaison égale -------------');

if ( 'bonjour' == 'bonjour' ) {
  console.log('Cette condition revient à écrire : if (true)');
}

if ( 'bonjour' == 'aurevoir' ) {
  console.log('Cette condition revient à écrire : if (false)');
}

// Attention aux conditions permissives
// Elles ne prennent pas en compte le typage
if ( 0 == '0') {
  console.log('Cette comparaison est permissive');
}

if ( 0 === '0') {
  console.log('Cette comparaison n\'est pas permissive');
}

// Conditions sur les undefined/null
var variableQuiNaPasDeValeur;

console.log('------------- La valeur d\'une variable non défini--------------');
console.log(variableQuiNaPasDeValeur);

// Undefined est traduit en false
if ( variableQuiNaPasDeValeur ) {
  console.log('La variable n\'a pas de valeurs');
}

console.log('------------- Comparaison différente de -------------');
// ! -> "inverse de"
if ( !false ) {
  console.log('Ce log est différent de false');
}

if ( 'bonjour' !== 'aurevoir' ) {
  console.log('Cette condition est vérifiée, bonjour est différent de aurevoir');
}

if ( 0 !== '0') {
  console.log('Comme ma comparaison est non-permissive');
  console.log('Cette comparaison va renvoyer true');
}

// On peut faire des doubles négations
if ( !!false ) {
  console.log('Ca renvoie false');
}

console.log('------------- Comparaison supérieure/inférieure -------------');


if ( 3 > 5 ) {
  console.log('trois est plus grand que cinq');
}
else if ( 3 > 1 ) {
  console.log('trois est bien plus grand que un');
}
else {
  console.log('aucune des comparaisons est vraie');
}

console.log('------------- Comparaison supérieure ou  égal/inférieure ou égal-------------');

if ( 3 >= 3 ) {
  console.log('Il n\'est pas supérieur MAIS il est égal donc la condition se vérifie');
}