import { useEffect, useState } from "react";
import axios from "axios";
import "./TaskManagement.css";

function TaskManagement() {

  const [tasks,setTasks]=useState([]);
  const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [deadline, setDeadline] = useState("");

  useEffect(()=>{
      loadTasks();
  },[]);

  const loadTasks=async()=>{

      const res=await axios.get("http://localhost:3002/tasks");

      setTasks(res.data);

  };
  const addTask = async () => {

const task = {

employeeId:"1",

employeeName:"Dhivya K",

title,

description,

deadline,

status:"Pending"

};

await axios.post(

"http://localhost:3002/tasks",

task

);

loadTasks();

setTitle("");

setDescription("");

setDeadline("");

};
const updateStatus = async (task) => {

  const newStatus =
    task.status === "Pending"
      ? "Completed"
      : "Pending";

  await axios.put(
    `http://localhost:3002/tasks/${task.id}`,
    {
      ...task,
      status: newStatus,
    }
  );

  loadTasks();
};
  

  return(

<div className="task-page">

<h1>Task Management</h1>
<div className="task-form">

<h2>Assign New Task</h2>

<input
type="text"
placeholder="Task Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
type="text"
placeholder="Task Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<input
type="date"
value={deadline}
onChange={(e)=>setDeadline(e.target.value)}
/>

<button onClick={addTask}>
Assign Task
</button>

</div>

<table>

<thead>

<tr>

<th>Employee</th>

<th>Task</th>

<th>Description</th>

<th>Deadline</th>

<th>Status</th>

</tr>

</thead>

<tbody>
  {tasks.map((task) => (
    <tr key={task.id}>
      <td>{task.employeeName}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.deadline}</td>

      <td>
        <button
          className="status-btn"
          onClick={() => updateStatus(task)}
        >
          {task.status}
        </button>
      </td>
    </tr>
  ))}
</tbody>

</table>

</div>

  )

}

export default TaskManagement;