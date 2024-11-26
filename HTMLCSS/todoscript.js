
const inputField = document.querySelector("input[type='text']");
const childrenContainer = document.getElementById("children");
const addButton=document.getElementById("add");



addButton.addEventListener("click", hello);
function hello(event) {
    
        const taskText = inputField.value.trim(); 

        if (taskText) {
            // Create a new div for the task
            const taskDiv = document.createElement('div');
            taskDiv.style.display = 'flex';
            taskDiv.style.justifyContent = 'space-between';
            taskDiv.style.marginBottom = '10px';

            // Create a p tag for task description
            const taskDescription = document.createElement('p');
            taskDescription.textContent = taskText;

            // Create a button to remove the task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.backgroundColor = 'red';
            deleteButton.style.color = 'white';
            deleteButton.style.border = 'none';
            deleteButton.style.borderRadius = '5px';
            deleteButton.style.cursor = 'pointer';

            // Append the p tag and delete button to the task div
            taskDiv.appendChild(taskDescription);
            taskDiv.appendChild(deleteButton);

            // Append the task div to the container
            childrenContainer.appendChild(taskDiv);

            // Clear the input field
            inputField.value = '';

            // Add event listener to the delete button
            deleteButton.addEventListener('click', function () {
                childrenContainer.removeChild(taskDiv);
            });
        }
    }

