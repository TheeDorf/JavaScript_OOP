console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person{
    constructor(name,pets,residence,hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies= hobbies;
    }
    addHobby(hobby){
        this.hobbies.push(hobby)
    }
    removeHobby(hobbyRm){
        let foundEl= this.hobbies.indexOf(hobbyRm);
        this.hobbies.splice(foundEl, 1)
    }
    // removeHobbyFilt(hobbyRmFi){
    //     this.hobbies = this.hobbies.filter((element)=>(
    //         return element != hobbyRMFi
    //     ))
    // }
    
    greeting(){
        console.log(`Hello ${this.name}, welcome to existance!`)}
}
// ex 2
class Coder extends Person {
    constructor(name,pets,residence, hobbies, occupation){
        super(name,pets,residence,hobbies);
        
        this.occupation = occupation;
        occupation= "Full Stack Web Developer";

    }
    greeting(){
        console.log(`Hello ${this.name}, congrats on becoming a coder!`);
    }
    }





//  ex 3

const ross = new Person("Ross",2, "birmingham",["kayak fishing", "solving code","looking cool"]);
const aj = new Coder("AJ", 1, "Marina Del Rey", ["golf", "hockey"],"full stack web developer");

console.log(ross);
ross.greeting();
ross.addHobby("lure making");
console.log(aj);
aj.greeting();


// ex 4

class Calculator{
    cosntructor(){
        this.result= 0;
    }
    add(a,b = this.result){
        this.result = a +b;
        return this.result;
    }
    subtract(a,b = this.result){
        this.result = a - b;
        return this.result;
    }
    multiply(a,b = this.result){
        this.result = a * b;
        return this.result;
    }
    divide(a,b = this.result){
        this.result = a / b;
        return this.result;
    }
    displayResults(){
        console.log(this.result);
    }
}

const calculator = new Calculator();

calculator.add (7,3);


console.log(calculator);