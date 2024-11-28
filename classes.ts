class Timan {
    private readonly nome:string;// readonly = não deixa alterar 
    idade:number;
    protected horas:number;
    protected oculos:boolean;

    constructor(nome:string, idade:number, horas:number, oculos:boolean){
        this.nome = nome
        this.idade = idade
        this.horas = horas
        this.oculos = oculos
    }

    public setNewHora(hora:number){
        if(hora && hora <12 && hora > 0){
            this.horas = hora;
        }
    }

    public getHoras(){
        return this.horas
    }
}

let funcionario = new Timan('Arisson',27,8,true)
funcionario.idade = 28

console.log(funcionario.getHoras());
funcionario.setNewHora(30); // hora maior que a esperada
console.log(funcionario.getHoras());
funcionario.setNewHora(10); 
console.log(funcionario.getHoras());


//herança 
class Main extends Timan {
    public setNewHora(add:number):number{
        this.horas += add;
        return this.horas
    }
}

let main = new Main('Arisson',27,8,true);
console.log(main.getHoras());
main.setNewHora(30); // hora maior que a esperada
console.log(main.getHoras());
main.setNewHora(10); 
console.log(main.getHoras());
