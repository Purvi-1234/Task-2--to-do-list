function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let taskList = document.getElementById('taskList');
    
    // Create new list item
    let li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" onclick="toggleComplete(this)" />
        <span class="task-text">${taskText}</span>
        <input type="text" class="edit-input" placeholder="Edit task..." />
        <button onclick="editTask(this)">Edit</button>
        <button onclick="removeTask(this)">Delete</button>
    `;

    // Append the new task to the list
    taskList.appendChild(li);
    
    // Clear input
    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement;
    const taskTextSpan = li.querySelector('.task-text');
    const editInput = li.querySelector('.edit-input');

    
    if (editInput.style.display === 'none' || !editInput.style.display) {
        editInput.style.display = 'block';
        editInput.value = taskTextSpan.textContent;
        taskTextSpan.style.display = 'none'; 
        button.textContent = 'Save';
        editInput.focus();
    } else {
        taskTextSpan.textContent = editInput.value; 
        editInput.style.display = 'none'; 
        taskTextSpan.style.display = 'block';
        button.textContent = 'Edit'; 
    }
}

function toggleComplete(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}


