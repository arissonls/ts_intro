"use strict";
// ts consegue atribuit tipos automaticamente.
var nome = 123;
nome = 321;
nome = 1.5;
nome = 0xFA;
console.log(nome);
//booleano
let ativo = true;
//string
let apelido = 'Tomate';
let nome_todo = `${apelido} Salada`;
// Enums
var ROLES;
(function (ROLES) {
    ROLES[ROLES["MANEGER"] = 0] = "MANEGER";
    ROLES[ROLES["ADMIN"] = 1] = "ADMIN";
    ROLES[ROLES["CEO"] = 2] = "CEO";
})(ROLES || (ROLES = {}));
console.log(ROLES.CEO);
function setRole(role) {
}
setRole(ROLES.ADMIN);
//arrays
let nomes = ['Arisson', 'Leonardo', 'Simon', true, 1];
let nomes2 = ['Arisson', 'Leonardo', 'Simon'];
let nomes3 = [1, 2, 3];
let nomes4 = ['Arisson', 'Leonardo', 'Simon'];
let nomes5 = ['Arisson', 'Leonardo', 'Simon', 1, true, 0xAF];
