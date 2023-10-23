class Governor {
    static outfit = 'suit';
    static slogan = 'Vote for me!';
    static greet() {
        console.log('Hi there! How are you today?');
    }
    static kissBaby() {
        console.log('*smooches forehead*');
    }
}
console.log(Governor.outfit);
console.log(Governor.slogan);
Governor.greet();
Governor.kissBaby();

class Person{
    constructor(name, age, hairColor){
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
}

class PostalWorker extends Person {
    constructor(name, age, hairColor) {
       super (name, age, hairColor);
    }
    seePerson() {
        console.log('Good morning!');
    }
    seeDog() {
        console.log('Aaahh!');
    }
}

class Chef extends Person {
    constructor(name, age, hairColor) {
        super (name, age, hairColor);
    }
    wearHat() {
        this.hairColor = 'not visible!'
    }
    cleanWorkstation() {
        console.log('Green then red!');
    }
}

const Abe = new PostalWorker('Abe', 55, 'brown');
const Pam = new PostalWorker('Pam', 36, 'green');

const Remy = new Chef('Remy', 27, 'brown');
const Giselle = new Chef('Giselle', 30, 'blue');

console.log(Abe);
console.log(Pam);
console.log(Remy);
console.log(Giselle);

Abe.seePerson();
Abe.seeDog();
Pam.seePerson();
Pam.seeDog();
Remy.wearHat();
Remy.cleanWorkstation();
Giselle.wearHat();
Giselle.cleanWorkstation();