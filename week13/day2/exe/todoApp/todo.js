// In todo.js, define an ES6 module that exports a TodoList class.

// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

export class TodoList{
    constructor(){
        this.task = []
    }
    addTask(task) {
        this.task.push({text: task, completed: false})
    }
    completeTask(index){
        if (index >= 0 && index < this.task.length){
            this.task[index].completed = true;
    } else {
      console.error("Invalid task index");
    }
        }
    
    listTasks() {
        return this.task.map((task, index) => 
          `${index + 1}. ${task.text} - ${task.completed ? "Done" : "Pending"}`
        );
      }
    }
    
