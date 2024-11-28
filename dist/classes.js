"use strict";
class Timan {
    constructor(nome, idade, horas, oculos) {
        this.nome = nome;
        this.idade = idade;
        this.horas = horas;
        this.oculos = oculos;
    }
    setNewHora(hora) {
        if (hora && hora < 12 && hora > 0) {
            this.horas = hora;
        }
    }
    getHoras() {
        return this.horas;
    }
}
let funcionario = new Timan('Arisson', 27, 8, true);
funcionario.idade = 28;
console.log(funcionario.getHoras());
funcionario.setNewHora(30); // hora maior que a esperada
console.log(funcionario.getHoras());
funcionario.setNewHora(10);
console.log(funcionario.getHoras());
//herança 
class Main extends Timan {
    setNewHora(add) {
        this.horas += add;
        return this.horas;
    }
}
let main = new Main('Arisson', 27, 8, true);
console.log(main.getHoras());
main.setNewHora(30); // hora maior que a esperada
console.log(main.getHoras());
main.setNewHora(10);
console.log(main.getHoras());
