import { useState } from "react";
import "./AttendancePage.css";

function AttendancePage() {

  const [attendance, setAttendance] = useState([
    { id: 1, name: "Dhivya", department: "IT", status: "Present" },
    { id: 2, name: "Rahul", department: "HR", status: "Absent" },
    { id: 3, name: "Priya", department: "Finance", status: "Present" },
    { id: 4, name: "Arun", department: "Marketing", status: "Present" },
    { id: 5, name: "Karthik", department: "Sales", status: "Absent" },
  ]);

  const [search, setSearch] = useState("");

  const filteredAttendance = attendance.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAttendance = (id) => {
    setAttendance(
      attendance.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              status:
                employee.status === "Present" ? "Absent" : "Present",
            }
          : employee
      )
    );
  };

  const presentCount = attendance.filter(
    (employee) => employee.status === "Present"
  ).length;

  const absentCount = attendance.filter(
    (employee) => employee.status === "Absent"
  ).length;

  return (
    <div className="attendance-page">

      <h1>Attendance Management</h1>

      <div className="attendance-summary">
        <div className="card">
          <h2>{presentCount}</h2>
          <p>Present</p>
        </div>

        <div className="card">
          <h2>{absentCount}</h2>
          <p>Absent</p>
        </div>

        <div className="card">
          <h2>{attendance.length}</h2>
          <p>Total Employees</p>
        </div>
      </div>

      <input
      id="attendanceSearch"
        className="search"
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="attendance-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredAttendance.map((employee) => (

            <tr key={employee.id}>

              <td>{employee.name}</td>

              <td>{employee.department}</td>

              <td>{employee.status}</td>

              <td>

                <button
                  className="markAttendanceBtn"
                  onClick={() => toggleAttendance(employee.id)}
                >
                  Mark {employee.status === "Present" ? "Absent" : "Present"}
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AttendancePage;