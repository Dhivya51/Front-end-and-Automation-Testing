import { useEffect, useState } from "react";
import axios from "axios";
import "./AttendanceManagement.css";

function AttendanceManagement() {
  const [attendance, setAttendance] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [editAttendance, setEditAttendance] = useState(null);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    const res = await axios.get("http://localhost:3002/attendance");
    setAttendance(res.data);
  };

 const addAttendance = async () => {

  if (!employeeName || !employeeId || !date) {
    alert("Please fill all fields");
    return;
  }

  const attendanceData = {
    employeeId,
    employeeName,
    date,
    status,
  };

  if (editAttendance) {

    await axios.put(
      `http://localhost:3002/attendance/${editAttendance.id}`,
      attendanceData
    );

    setEditAttendance(null);

  } else {

    await axios.post(
      "http://localhost:3002/attendance",
      attendanceData
    );

  }

  loadAttendance();

  setEmployeeId("");
  setEmployeeName("");
  setDate("");
  setStatus("Present");
};

    

  const deleteAttendance = async (id) => {
    await axios.delete(`http://localhost:3002/attendance/${id}`);
    loadAttendance();
  };

  return (
    <div className="attendance-page">

      <h1>Attendance Management</h1>

      <div className="attendance-form">

        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Present</option>
          <option>Absent</option>
          <option>Leave</option>
        </select>

        <button onClick={addAttendance}>
  {editAttendance ? "Update Attendance" : "Mark Attendance"}
</button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {attendance.map((item) => (

            <tr key={item.id}>

              <td>{item.employeeId}</td>

              <td>{item.employeeName}</td>

              <td>{item.date}</td>

              <td>{item.status}</td>

             <td>

  <button
    onClick={() => {

      setEditAttendance(item);

      setEmployeeId(item.employeeId);
      setEmployeeName(item.employeeName);
      setDate(item.date);
      setStatus(item.status);

    }}
  >
    Edit
  </button>

  <button
    onClick={() => deleteAttendance(item.id)}
  >
    Delete
  </button>

</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AttendanceManagement;