var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
// var animalUpperCased = animal.toUpperCase();

var textCharsAfter = text.replace ('Papugi', animal.toUpperCase());
var len = textCharsAfter.length/2;

console.log(textCharsAfter.slice (0, len));