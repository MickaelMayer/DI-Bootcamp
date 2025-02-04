import { TodoList } from "./todo.js"; 

const myTodo = new TodoList();
myTodo.addTask("Learn ES6 Modules");
myTodo.addTask("Build a Todo App");
myTodo.completeTask(0); 

console.log(myTodo.listTasks());