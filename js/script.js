
function addTask() {
    const input = document.getElementById('text');
    const taskText = input.value.trim();
    
   
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function() {
            li.remove();
        };
        
        li.appendChild(deleteButton);
        
       
        document.getElementById('taskList').appendChild(li);
        
        
        input.value = '';
      

    }
}
    





