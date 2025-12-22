//Check even/odd number

let z = 11;
if (z %2 == 0){
    console.log('a is even number')
}
else{
    console.log('a is odd')
}

//Find largest of 3 numbers

let a = 4;
let b = 2;
let c = 9;

if (a > b && a> c){
    console.log('a is max', +a)
}
else if(b > a && b > c){
    console.log('b is max', +b)
}
else{
    console.log('c is max' , +c)
}

//Print numbers 0–100 (skip multiples of 5)
let num = 0;
while (num <= 100) {
    if (num % 5 == 0) {
        console.log(num);
    }
    num++;
}

// Simple calculator using switch

const x = 100;
const y = 50;
let calc = "sub";

switch (calc) {
    case "add":
        console.log("addition of x and y is", x + y);
        break;

    case "sub":
        console.log("subtraction of x and y is", x - y);
        break;

    case "mul":
        console.log("multiplication of x and y is", x * y);
        break;

    case "div":
        console.log("division of x and y is", x / y);
        break;

    default:
        console.log("Invalid operation");
}
