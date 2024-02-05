document.addEventListener('DOMContentLoaded', () => {
    // Get task list from local storage or set an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display tasks
    displayTasks();

    // Event listener for form submission
    document.getElementById('taskForm').addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });

    // Function to add a new task
    window.addTask = function () {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            saveTasks();
            displayTasks();
        }
    };

    // Function to display tasks
    function displayTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.className = task.completed ? 'completed' : '';
            listItem.innerHTML = `
                ${task.text}
                <button onclick="toggleTask(${index})">Toggle</button>
                <button onclick="deleteTask(${index})">Delete</button>
            `;
            taskList.appendChild(listItem);
        });
    }

    // Function to toggle task completion status
    window.toggleTask = function (index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        displayTasks();
    };

    // Function to delete a task
    window.deleteTask = function (index) {
        tasks.splice(index, 1);
        saveTasks();
        displayTasks();
    };

    // Function to clear all tasks
    window.clearTasks = function () {
        tasks = [];
        saveTasks();
        displayTasks();
    };

    // Function to save tasks to local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
