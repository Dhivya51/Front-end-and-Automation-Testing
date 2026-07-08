const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
const progress = document.getElementById("progress");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display Tasks
function renderTasks(filter = "") {

    taskList.innerHTML = "";

    tasks
        .filter(task =>
            task.text.toLowerCase().includes(filter.toLowerCase())
        )
        .forEach((task, index) => {

            const li = document.createElement("li");

            if (task.completed) {
                li.classList.add("completed");
            }

            li.innerHTML = `
                <span>${task.text}</span>

                <div class="actions">

                    <button class="complete-btn"
                    onclick="toggleComplete(${index})">

                    <i class="fa-solid fa-check"></i>

                    </button>

                    <button class="edit-btn"
                    onclick="editTask(${index})">

                    <i class="fa-solid fa-pen"></i>

                    </button>

                    <button class="delete-btn"
                    onclick="deleteTask(${index})">

                    <i class="fa-solid fa-trash"></i>

                    </button>

                </div>
            `;

            taskList.appendChild(li);

        });

    updateProgress();

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Add Task
addBtn.addEventListener("click", () => {

    let text = taskInput.value.trim();

    if (text === "") {

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        text: text,

        completed: false

    });

    taskInput.value = "";

    renderTasks();

});

// Press Enter to Add
taskInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        addBtn.click();

    }

});

// Delete
function deleteTask(index) {

    if (confirm("Delete this task?")) {

        tasks.splice(index, 1);

        renderTasks();

    }

}

// Edit
function editTask(index) {

    let newTask = prompt("Edit Task", tasks[index].text);

    if (newTask !== null && newTask.trim() !== "") {

        tasks[index].text = newTask;

        renderTasks();

    }

}

// Complete
function toggleComplete(index) {

    tasks[index].completed = !tasks[index].completed;

    renderTasks();

}

// Search
searchInput.addEventListener("keyup", () => {

    renderTasks(searchInput.value);

});

// Progress
function updateProgress() {

    let total = tasks.length;

    let completed = tasks.filter(task => task.completed).length;

    let pending = total - completed;

    totalTasks.innerText = total;

    completedTasks.innerText = completed;

    pendingTasks.innerText = pending;

    let percent = total === 0 ? 0 : (completed / total) * 100;

    progress.style.width = percent + "%";

}

// Load Saved Tasks
renderTasks();