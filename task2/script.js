document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const tasksContainer = document.getElementById('tasks');
    const completedList = document.getElementById('completed-list');
    const clearBtn = document.getElementById('clear-btn');
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskValue = taskInput.value.trim();
        if (taskValue !== '') {
            addTask(taskValue);
            taskInput.value = '';
        }
    });

    tasksContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('complete-btn')) {
            const taskText = e.target.parentElement.querySelector('span').innerText;
            markTaskAsCompleted(taskText);
            e.target.parentElement.remove();
        }
    });

    completedList.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-btn')) {
            const taskText = e.target.parentElement.querySelector('span').innerText;
            removeCompletedTask(taskText);
            e.target.parentElement.remove();
        }
    });

    clearBtn.addEventListener('click', function () {
        tasksContainer.innerHTML = '';
    });

    function addTask(task) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${task}</span>
            <button class="complete-btn">Complete</button>
        `;
        tasksContainer.appendChild(taskItem);
    }

    function markTaskAsCompleted(task) {
        const completedTaskItem = document.createElement('li');
        completedTaskItem.className = 'completed-task';
        completedTaskItem.innerHTML = `
            <span>${task}</span>
            <button class="remove-btn">Remove</button>
        `;
        completedList.appendChild(completedTaskItem);
    }

    function removeCompletedTask(task) {
        
    }
});
