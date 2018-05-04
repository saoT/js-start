// -------------- LES VARIABLES ----------------//
// 3 genre de variables
console.log('----------LES GENRES---------');

const language = 'french';
let slang = false;
var hello = 'Bonjour !';

console.log(hello);

slang = true;
hello = 'Cava';

console.log(hello);

// 3 type de variable
console.log('----------LES TYPES---------');

// Le type string = permet de contenir du texte
// J'ecris mes variables en camelCase
console.log('----------string---------');

var chaineDeCharactere = 'Ceci est une chaine de charactère';
var autreChaineDeCharactere = 'Ceci est une autre chaine de charcatere';

var concatenationDesDeuxChaines = chaineDeCharactere + ' ' + autreChaineDeCharactere;

console.log(concatenationDesDeuxChaines);

// Le type number
console.log('----------number---------');
var deux = 2;
var trois = 3;
var huit = '8';

// Toutes les opérations sont possibles (du moment qu'ils ne sont pas une chaine de charactere)
console.log('----------number operation---------');
var addition = deux + huit + trois + deux;

console.log(addition);

console.log('----------number decimal---------');
var decimal = 3.9;

console.log(decimal);

// Arrondis au plus bas
console.log(Math.floor(decimal));
console.log(parseInt(decimal));

// Arrondis au plus haut
console.log(Math.ceil(decimal));

// LE MODULO : %
console.log('----------number modulo---------');
console.log(4%2);
console.log(7%2);

// Le type boolean 
console.log('----------boolean---------');

// Valeur true ou false
var bool = true;
var fakeBool = 'true';
console.log(bool);
console.log(fakeBool);
