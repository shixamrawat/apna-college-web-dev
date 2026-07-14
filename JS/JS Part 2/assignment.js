let num=23;
if(num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}

let name=prompt("Enter your name ");
let age=prompt("Enter your age");

alert(`${name} is ${age} years old`);

let quarter=3;

switch(quarter){
    case 1:
        console.log("Months in Quarter 1:January,February,March");
        break;
    case 2:
        console.log("Months in Quarter 2:April,May,June");
        break;
    case 3:
        console.log("Months in Quarter 3:July,August,September");
        break;
    case 4:
        console.log("Months in Quarter 4:October,November,December");
        break;
}