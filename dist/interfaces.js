"use strict";
const pegaUser = (user) => {
    return `${user.firstName} ${user.lastName}, age ${user.age}`;
};
// let user = {
//     firstName: 'Arisson',
//     lastName: 'Simon',
//     age: 27
// }
// console.log(pegaUser(user))
class User {
    constructor(f, l, a) {
        this.firstName = f;
        this.lastName = l;
        this.age = a;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let us = new User('Arisson', 'Simon', 27);
console.log(pegaUser(us));
