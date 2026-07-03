let taskInput=document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
//load tasks when page opens
window.onload = loadTasks;
//add task when button is clicked
addBtn.addEventListener("click", addTask);
//function to add a new task
function addTask(){
    let task = taskInput.ariaValueMax.trim();
    //form validation
    if(task === ""){
        alert("Please enter a task.");
        return;
    }
    createTask(task);
    saveTask(task);
    taskInput.value ="";

}