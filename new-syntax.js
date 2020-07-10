'use strict';

class User {
  constructor(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
  }

  getFullName() {
    console.log( this );
    return `${this.firstName} ${this.lastName}`;
  };

  sayHello() {
    console.log( this );
    alert( `Hello, my name is ${this.getFullName()}.` );
  }

  isAdult() {
    return this.age >= 18;
  }

  static isUser(obj) {
    console.dir( this );
    return obj instanceof User;
  }

  static isAdult(user) {
    if (!User.isUser( user )) {
      throw new TypeError( 'param user must be instance of User class' );
    }

    return user.age >= 18;

  }

}

const alex = new User( 'Sash', 'Surname', 26 );
const masha = new User( 'Masha', 'Ivanova', 17 );

alex.isAdult();

User.isAdult( alex );


