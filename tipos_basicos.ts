// ts consegue atribuit tipos automaticamente.

var nome = 123;
nome = 321;
nome = 1.5;
nome = 0xFA;
console.log( nome );

//booleano
let ativo:boolean = true;


//string
let apelido = 'Tomate';
let nome_todo:string = `${apelido} Salada`

// Enums
enum ROLES {MANEGER, ADMIN, CEO}

console.log(ROLES.CEO)

function setRole(role:ROLES):void {

}
setRole(ROLES.ADMIN)

//arrays
let nomes = ['Arisson', 'Leonardo', 'Simon', true, 1]
let nomes2:string[] = ['Arisson', 'Leonardo', 'Simon']
let nomes3:number[] = [1,2,3]
let nomes4: Array<string> = ['Arisson', 'Leonardo', 'Simon']
let nomes5: Array<any> = ['Arisson', 'Leonardo', 'Simon',1,true, 0xAF]