let todolist = [];
rendertask();

function rendertask() {
    todolist = JSON.parse(localStorage.getItem('todolist')) || todolist;
    
    let todohtml = '';
    
    for (let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];
        let html = `<div class= "name">${todo.name}</div>  <div class= "dueDate">${todo.dueDate}</div> <button onclick="
        todolist.splice(${i},1);
        localStorage.removeItem('todolist');
        localStorage.setItem('todolist',JSON.stringify(todolist));
        rendertask();
        " class= "delete-button">Delete</button>`;
        todohtml += html;
        }
    document.querySelector('.taskslist').innerHTML = todohtml;   
}
function addtask() {
   
    
  
    const inputText = document.querySelector('.js-task-input');
    const inputdate = document.querySelector('.js-date-input');
    let name = inputText.value;
    let dueDate = inputdate.value;
    // console.log(name);
    // console.log(dueDate);
    if (name != '' && dueDate != '') {
        todolist.push(
            {
                name, dueDate
            }
           
        );
        console.log(localStorage.setItem('todolist',JSON.stringify(todolist)));
    }
    else if(name = '')
    {
        alert('No Task entered');
    }
    else if(dueDate = '')
    {
        alert('No  Date entered');
    }
    else
    {
        alert('No Task and Date entered');
    }
    
    console.log(todolist);
   
   
    inputText.value = '';
    inputdate.value = '';
    rendertask();
  
}
