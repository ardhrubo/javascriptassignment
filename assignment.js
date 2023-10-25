// Problem -1 : Write a function to calculate the area of a triangle?
// Solve-1:

const triangleArea = function(a,b,c){ // a,b and c are the three side of triangle
    const s= (a+b+c)/2;
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return area 
}

console.log(triangleArea(3,4,5)) // answer will be 6


// Problem -2: Write a function  to convert degrees to radians?
// Solve-2:

const toRadian = function(degree){ // provide the value in degree
        
    const convert= degree*(Math.PI/180)
    return convert
}

console.log(toRadian(100)) // answer Will be  1.74....



// Problem-3: Write a function calculateFactorial that takes a number and returns its factorial.


const calculateFactorial= function(n){
 
 if(n>=0){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact *i
    }
  return fact 
 } else{
    return 'Provide a positive number.'
 }

}



console.log(calculateFactorial(4)); // The answer will be 24 and for 0,1 is 1 and will not take a negative number


// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise?
// Solve:

const isPrime = function(number){
    if(number<2){
        return false
    }
    switch(number){
        case 2:
        return true;
        case 3:
        return true;
        case 5: 
        return true;
        case 7:
        return true;
    }

    if(number%2===0||number%3===0|| number%5===0||number%7===0){
        return false
    } else {
        return true
    }
}

// You can check check the function by providing any value 
console.log(isPrime(2),isPrime(3),isPrime(5),isPrime(7),isPrime(11),isPrime(109210)) // The result will be true,true,true,true,true,false

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

const mergeArrays = function(arr1,arr2){
   
   return arr1.concat(arr2)

}


console.log(mergeArrays([2,'d',"Dhrubo"],[1])) // It will return a new mergedArray  [1,'d','Dhrubo',1]


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
 // Solve:

const isLeapYear = function(year){
    if((year%4===0 && year%100!==0) || year%400===0){
        return "This is a leap year"
    } else {
        return "Not a Leap year"
    }
}

console.log(isLeapYear(1900)) // The result will be "Not a Leap year"


// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
// Solve:
const removeDuplicates = function(array){

    return [...new Set(array)];
}

console.log(removeDuplicates([1,1,2,3,3,4,4,5,4,2])) // It will remove all duplicate value from this array and the result will be [1,2,3,4,5]



// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
// Solve:
const convertToCelsius = function(f){
    return (5*(f-32)/9)
}

console.log(convertToCelsius(100)) // The answer will be 37.777...


// Problem 9: Write a function to find the maximum of five numbers.
// Solve:

const maximumOfFive= function(a,b,c,d,e){
    return Math.max(a,b,c,d,e)
}


console.log(maximumOfFive(1,2,7,5,6)) // The answer will be the maximum number 7






// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
//Solve:
const evenOdd = function(str){
    
    if(String(str.length)%2===0){
        return "even"
    } else {
        return "odd"
    }
}

console.log(evenOdd('ardhrubo')) // The answer will be even as ardhrubo has 8 character in total.


