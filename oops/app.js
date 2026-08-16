// factory person
// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log("person talks");
//         }
//     };
//     return person;
// }

// let p1=personMaker("xyz",19);

// new operator 

// function PersonMaker(name,age){
//     this.name=name;
//     this.age=age;
// }
// PersonMaker.prototype.talk=function() {
//     console.log("Talks");
// };

// let p1=new PersonMaker("xyz",22);
// p1.talk();

// using class

class PersonMaker {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log("Talks");
    }
}

let p1=new PersonMaker("Xyx",21);

console.log(p1.name);
p1.talk();

// inheritance
class animals{
    constructor(name){
        this.name=name;
    }
    eats(){
        console.log("eats");
    }
}

class Dog extends animals{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    barks(){
        console.log("barks");
    }
}