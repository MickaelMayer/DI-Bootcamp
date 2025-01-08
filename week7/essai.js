// Array to store task objects
const tasks = [];

// Add event listener to the form
const form = document.getElementById('taskForm');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from refreshing the page
  addTask();
});

// Function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  // Check if input is empty
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task object
  const task = {
    task_id: tasks.length,
    text: taskText,
    done: false,
  };

  tasks.push(task); // Add task to the array

  // Add task to the DOM
  const taskList = document.querySelector('.listTasks');
  const taskElement = document.createElement('div');
  taskElement.className = 'task';
  taskElement.setAttribute('data-task-id', task.task_id);

  // Checkbox input
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => doneTask(task.task_id));

  // Task label
  const label = document.createElement('label');
  label.textContent = task.text;

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  deleteButton.addEventListener('click', () => deleteTask(task.task_id));

  // Append elements to the task div
  taskElement.appendChild(checkbox);
  taskElement.appendChild(label);
  taskElement.appendChild(deleteButton);

  // Append task div to the task list
  taskList.appendChild(taskElement);

  // Clear the input
  taskInput.value = '';
}

// Function to mark a task as done
function doneTask(taskId) {
  const task = tasks.find((t) => t.task_id === taskId);
  if (task) {
    task.done = !task.done; // Toggle the "done" status

    // Update the DOM
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (task.done) {
      taskElement.classList.add('done');
    } else {
      taskElement.classList.remove('done');
    }
  }
}

// Function to delete a task
function deleteTask(taskId) {
  // Remove the task from the array
  const taskIndex = tasks.findIndex((t) => t.task_id === taskId);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);

    // Remove the task from the DOM
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    taskElement.remove();
  }
}