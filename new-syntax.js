'use strict';

class User {
  /**
   *
   * @param {string} name
   * @param {string} surname
   * @param {number} age
   */
  constructor(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this._age = age;
  }

  set age(value) {

    if (typeof value !== 'number') {
      throw new TypeError( 'age value must be number type' );
    }
    if (value < 0 || !Number.isInteger( value )) {
      throw new RangeError( 'age value must be an positive number' );
    }

    this._age = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    console.log( this );
    alert( `Hello, my name is ${this.getFullName()}.` );
  }

  get age() {
    return this._age;
  }

  get isAdult() {
    return this.age >= 18;
  }

  static isUser(obj) {
    return obj instanceof User;
  }

  static isAdult(user) {
    if (!this.isUser( user )) {
      throw new TypeError( 'param user must be instance of User class' );
    }
    return user.age >= 18;
  }
}

/**
 * Реализуйте класс Worker (Работник),
 * который будет иметь следующие свойства:
 *
 *    name (имя),
 *    surname (фамилия),
 *    rate (ставка за день работы),
 *    days (количество отработанных дней).
 *
 * Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */
class Worker {
  constructor(name, surname, rate = 0, days = 0, fine = 0) {
    this.firstName = name;
    this.secondName = surname;
    this._rate = rate;
    this._days = days;
    this._fine = fine;
  }

  set days(value) {

    if (typeof value !== 'number') {
      throw new TypeError();
    }

    if (value < 0 || value > 31) {
      throw new RangeError();
    }

    this._days = value;

  }

  get days() {

    return this._days;

  }

  set rate(value) {

    if (typeof value !== 'number') {
      throw new TypeError();
    }

    if (value < 0) {
      throw new RangeError();
    }

    this._rate = value;

  }

  get rate() {

    return this._rate;

  }

  set fine(value) {
    if (typeof value !== 'number') {
      throw new TypeError();
    }

    if (value < 0) {
      throw new RangeError();
    }

    this._fine = value;

  }

  get fine() {
    return this._fine;
  }

  get salary() {
    let currentFine = 0;
    const clearSalary = (this.rate * this.days);
    if (this.fine) {

      if ((clearSalary * 0.2) < this.fine) {
        const currentFine = clearSalary * 0.2;
        this.fine = this.fine - currentFine;
        return clearSalary - currentFine;
      }

      currentFine = this.fine;
      this.fine = 0;
      return clearSalary - currentFine;
    }

    return clearSalary;
  }
}

const worker1 = new Worker( 'Misha', 'Brezhnev' );
const worker2 = new Worker( 'Vasya', 'Brezhnev', 200, 10 );

const worker1SalaryValue = worker1.salary;
const worker2SalaryValue = worker2.salary;

console.log( 'Worker 1 salary = ', worker1SalaryValue );
console.log( 'Worker 2 salary = ', worker2SalaryValue );

class Fuel {

  constructor(volume, density) {
    this._volume = volume;
    this._density = density;
  }

  set volume(v) {
    if (typeof v !== 'number') {
      throw  new TypeError();
    }
    if (v <= 0) {
      throw new RangeError();
    }

    this._volume = v;
  }

  get volume() {
    return this._volume;
  }

  set density(v) {
    if (typeof v !== 'number') {
      throw  new TypeError();
    }
    if (v <= 0) {
      throw new RangeError();
    }

    this._density = v;
  }

  get density() {
    return this._density;
  }

  get weight() {
    return this._density * this._volume;
  }

}

class Car {

  /**
   *
   * @param {number} weight
   * @param {Fuel} fuel
   */
  constructor(weight, fuel) {
    this._ownWeight = weight;
    this._fuel = fuel;
  }

  get fullWeight() {
    return this._ownWeight + this._fuel.weight;
  }

}

const VW = new Car( 1200, new Fuel( 100, 0.860 ) );
alert( VW.fullWeight );