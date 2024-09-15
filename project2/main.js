// import minus, {sum as add} from "./math.js";
// Aliases for imported stuff

// import * as math from "./math.js";
// Importing all

// console.log(minus(1,3));
// console.log(add(1,3));

// console.log(math.sum(2,3));

// const firstName = "John";

// // Template literals using backticks
// // String interpolation
// const greeting = `Hello ${firstName}`;
// console.log(greeting);

// const A = 10;
// const B = 20;
// const desc = `The sum of ${A} and ${B} is ${A+B}`;
// console.log(desc);

// const user = {
//     name: "Alice",
//     age:30,
//     city:"Wonderland"
// }

// const desc = `User Information:
// Name: ${user.name}
// Age: ${user.age}
// City: ${user.city}`
// console.log(desc);

const todos = [
    {id: 1, task: "Learn JavaScript", completed: false},
    {id: 2, task: "Practice React", completed: false},
    {id: 3, task: "Build a project", completed: false}
];

// // Returns first expresssion where true
// const todoByID = todos.find((todo) => todo.completed === false);
// console.log(todoByID);

// const completedTodos = todos.filter(todo => todo.task.includes('Practice'));
// console.log(completedTodos);

// todos.forEach((todo,index) => {
//     todo.completed = true;
//     console.log(index + ' ' + todo.task);
// });

// // console.log(todos);

// const mappedTodos = todos.map((todo) => {
//     return {id: todo.id, desc: todo.task};
// });


const mappedTodos = todos.map((todo) => {
    return {...todo, priority:"High"};
});

console.log(mappedTodos);