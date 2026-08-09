console.log("hello");
// let temp=prompt("Enter your name");
// console.error(`Hi there ${temp}`);

let name="shivam";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log("    hi    ".trim());

console.log(name.slice(3));
console.log(name.replace("shi","hi"));

let nums=[1,2,3,4];
let names=["Shivam","Ankit","Jatin"];
console.log(nums[2]);
console.log(names[2]);
console.log(nums.length);

let fruits=["apple","banana"];

fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("grapes");
console.log(fruits);
fruits.shift();
console.log(fruits);

console.log(fruits.indexOf("banana"));
console.log(fruits.includes("avocado"));

console.log(names.concat(fruits));
console.log(names.reverse());

console.log(names.slice(0,2));

fruits.splice(0,0,"orange","kiwi" );
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
fruits.splice(0,0,"orange","kiwi" );

fruits.sort();
console.log(fruits);

let matrix=[[1,2],[3,4],[4,5]];
console.log(matrix);
console.log(matrix[1]);
console.log(matrix[1][0]);

