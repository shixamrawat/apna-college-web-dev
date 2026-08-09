const student={
    name:"Shivam",
    age:19,
    marks:9
};
console.log(student);

console.log(student.age);
console.log(student["marks"]);

let temp="name";

console.log(student[temp]);

const fruit={
    name:"Mango",
    price:100,
    quantity:5
};                               
console.log(fruit);
//Update a existing value
student.marks='A';
// create a new value
student.gender="male";
console.log(student);

//delete an entry
delete student.gender;

let data={
    shivam:{
        section:"A",
        city:"Delhi"
    },
    mohit:{
        section:"B",
        city:"mumbai"
    },
    rohit:{
        section:"C",
        city:"pune"
    },
};
data.shivam.city="Madrid";

// list of objects

let lst=[
    {
        name:"shivam",
        rollno:12
    },
    {
        name:"rohit",
        rollno:10
    }
];
console.log(Math.abs(-4.3));
console.log(Math.pow(4,3));
console.log(Math.floor(4.3)); //round off to nearest smallest int vale
console.log(Math.ceil(4.3)); //round off to nearest largest int vale
console.log(Math.random()); //random number btw 0 and 1 (never 1)

let rand=Math.random();
rand*=10;
rand=Math.floor(rand);

console.log(Math.floor(Math.random()*10)+1);
