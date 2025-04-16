const addButton = document.querySelector('.add-button'); // Step 1: Get the "Add" button
const taskInput = document.querySelector('.task-input'); // Step 2: Get the input box
const todoList = document.querySelector('.todo-list');   // Step 3: Get the task list <ul>

addButton.addEventListener('click', function() {
    const taskText = taskInput.value; // Step 4: Get the text the user typed

    if (taskText.trim() === "") {
        alert("Please enter a task."); // Optional: Prevent empty tasks
        return;
    }

    // Step 5: Create a new <li> element
    const newTask = document.createElement('li');
    newTask.classList.add('todo-item'); // Give it the same style as other tasks

    // Step 6: Add HTML content inside the <li>
    newTask.innerHTML = `
        <input type="checkbox" class="task-check">
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">x</button>
    `;

    // Step 7: Add the new task to the list
    todoList.insertBefore(newTask, todoList.firstChild);


    // Step 8: Clear the input box after adding
    taskInput.value = "";

    // Step 9: Add delete function to the new delete button
    const deleteBtn = newTask.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        newTask.remove();
    });
});

