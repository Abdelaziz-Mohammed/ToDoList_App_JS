const inputBox = document.getElementById('input-box');
const addBtn = document.getElementById('add-btn');
const tasksList = document.getElementById('tasks');

if (localStorage.tasksData) tasksList.innerHTML = localStorage.tasksData;

addBtn.addEventListener('click', () => {
    const task = inputBox.value.trim();
    if (task) {
        // create task element and append it to tasks list
        const taskElement = document.createElement('li');
        taskElement.innerHTML = task;
        tasksList.appendChild(taskElement);
        // create cross icon to remove task
        const crossIcon = document.createElement('span');
        crossIcon.innerHTML = '\u00d7';
        taskElement.appendChild(crossIcon);
        // clear input value
        inputBox.value = '';
        saveDataToLocalStorage();
    }
});

tasksList.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        saveDataToLocalStorage();
    }
    else if (ev.target.tagName === 'SPAN') {
        ev.target.parentElement.remove();
        saveDataToLocalStorage();
    }
});

inputBox.onkeydown = (ev) => {
    if (ev.key === 'Enter') {
        addBtn.click();
    }
}

// Sava data to local storage
function saveDataToLocalStorage() {
    localStorage.tasksData = tasksList.innerHTML;
}
