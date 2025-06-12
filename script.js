const input = document.getElementById('input-task')
const button = document.getElementById('button-1')
const taskList = document.getElementById('sub-section-main')

button.addEventListener( 'click', () => {
    const task = input.value.trim();
    const submittedTask = document.createElement('li');
    submittedTask.textContent = task;
    taskList.appendChild(submittedTask);
    

    if(task === "") {
        alert('Please enter your task first')
    }

    submittedTask.addEventListener('dblclick', () => {
   submittedTask.remove();
});

   submittedTask.addEventListener('click', () => {
    submittedTask.style.textDecoration = "line-through"
   }
   )
}
)




alert('Single Click if the task is completed, Double Click to delete the task')
