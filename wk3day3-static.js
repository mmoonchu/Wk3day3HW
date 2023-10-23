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

// class Governor extends Person {
//     constructor(name, age, hairColor, state) {
//         super(name, age, hairColor)
//         this.state = state;
//     }

//     static hairColors() {
//         return ["green", "pink", "grey"];
//     }
// }

class PostalWorker extends Person {
    constructor(name, age, hairColor, longHours) {
       super (name, age, hairColor)
       this.longHours = longHours
    }
}