function addTask() 
{
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') 
    {
        alert('Please enter a valid task.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <span class="delete" onclick="deleteTask(this)">
        Delete</span>`;

    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(element) {
    var taskList = document.getElementById('taskList');
    taskList.removeChild(element.parentNode);
}
