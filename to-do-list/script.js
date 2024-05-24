document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(removeButton);
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    document.getElementById('task-list').appendChild(li);
    document.getElementById('new-task').value = '';
});
