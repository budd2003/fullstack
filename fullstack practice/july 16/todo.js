function addTask() {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') {
        alert("Please enter a task.");
        return;
    }
    let taskList = document.getElementById('taskList');
    let li = document.createElement('li');
    li.textContent = taskInput;
    taskList.appendChild(li);
    document.getElementById('taskInput').value = '';
}