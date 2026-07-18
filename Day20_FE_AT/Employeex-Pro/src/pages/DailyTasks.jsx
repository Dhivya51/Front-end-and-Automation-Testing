import { useEffect, useState } from "react";
import axios from "axios";
import "./DailyTasks.css";

function DailyTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await axios.get("http://localhost:3002/tasks");

    // Show only tasks assigned to employee 1
    const employeeTasks = res.data.filter(
      (task) => task.employeeId === "1"
    );

    setTasks(employeeTasks);
  };

  const completeTask = async (task) => {
    await axios.put(
      `http://localhost:3002/tasks/${task.id}`,
      {
        ...task,
        status: "Completed",
      }
    );

    loadTasks();
  };

  return (
    <div className="daily-task-page">
      <h1>My Daily Tasks</h1>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.deadline}</td>

              <td>{task.status}</td>

              <td>
                {task.status === "Pending" ? (
                  <button
                    onClick={() => completeTask(task)}
                  >
                    Complete
                  </button>
                ) : (
                  <span>✅ Completed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DailyTasks;