function main(){

    // Variables (var) exist in bigger scope than expected
    // Let acts more like normal
    let x = 5;
    const y = 10;
    // y = 20; // Causes an error

    // Can modify the keys of the const book but not the book itself
    const book = {title:'Hello World'};
    book.title = 'Hello WOrld 2';

    if(true){
        let x = 20;
        x = 30;
        console.log(x);
    }
    console.log(x);
    console.log(y);
    console.log(book);
}


// const addTraditional = function (a, b){
//     return a+b;
// };

// Arrow function one liner
// const add = (a, b) => a+b;


const add = (a, b) => {
    console.log('Your result: ');
    return a+b;
};

// console.log(add(1,1));
// main();

const ids = [1,2,3,4,5];

// Arrow function for each loop
// ids.forEach(id => {
//     id++;
//     console.log(id);
// });


// Cannot call the funciton until after declared by expression
// If using the function keyword like normal decleration not a problem
// test();

// // Creating function using an expression
// const test = () => {console.log('Hello World');}{
    
// };


// Rest operator example has dynamic number of arguments
// function test(firstArgument, ...others){
//     console.log(firstArgument);
//     console.log(others);
// };

// test('Sophia', 'Anne', 'Fisher');

// Spread operator example merge multiple arrays into one
const fruits = ['apple','banana'];
const more = ['cherry','melon'];
const allFruits = [...fruits,...more,'watermelon'];
console.log(allFruits);
// Arrays used to merge retain old state
console.log(fruits);