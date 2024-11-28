// inteface ts
interface UserInterface {
    firstName:string;
    lastName:string;
    age:number;

    getFullName() :string
}


const pegaUser = (user: UserInterface):string=>{
    return `${user.firstName} ${user.lastName}, age ${user.age}`
}

// let user = {
//     firstName: 'Arisson',
//     lastName: 'Simon',
//     age: 27
// }

// console.log(pegaUser(user))

class User implements UserInterface {
    firstName:string
    lastName:string
    age:number
    constructor(f:string, l:string, a:number){
        this.firstName = f
        this.lastName = l
        this.age = a
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let us = new User ('Arisson', 'Simon', 27)
console.log(pegaUser(us));