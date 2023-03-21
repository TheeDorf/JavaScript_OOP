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

const ross = new Person("Ross",2, "birmingham",["kayak fishing, solving code","looking cool"])



