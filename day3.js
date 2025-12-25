 //Write a function to check whether a number is even or odd
 
 function check(num){
    if (num %2 == 0){
        console.log('number is an even number');
    }
    else{
       console.log('the number is an odd number');
    }
 }

 let num = 19
 check(num)

// Write a function to find the largest of 3 numbers

function largest(a,b,c){
    if(a >= b && a >= c){
        console.log('num1 is the largest number');
    }
    else if(b >= a && b >= c){
        console.log('num2 is the largest number');
    }
    else{
        console.log('num3 is the largest number');
    }
}

let num1;
let num2;
let num3;
console.log (largest(23,33,12))

//Given an array [1, 2, 2, 3, 4]:
//Remove duplicate values
//Create a new array with squared values

const myarray = [1, 2, 2, 3, 4];
console.log("original array",myarray);
let unique_array = [];


for (let i = 0; i < myarray.length; i++){
     if (!unique_array.includes(myarray[i])) {
    unique_array.push(myarray[i]);
  }
}

let sq_array = [];
for (let i = 0; i < unique_array.length; i++){
    sq_array.push(unique_array[i] * unique_array[i]);
    
}

console.log("array without duplications",unique_array);
console.log("array with square value",sq_array );

// Write a function to reverse a string

function rev(str) {
    return str.split('').reverse().join('');
}

let revstr = "hello";
console.log(rev(revstr));


//Write a function to check if a string is a palindrome

function ispalindrome(str){
    let rstr = str.split('').reverse().join('');

    if(str == rstr ){
        console.log("palindrome");
        }
    else{
        console.log("is not palindrome");
    }
}
console.log(ispalindrome("maam"));



