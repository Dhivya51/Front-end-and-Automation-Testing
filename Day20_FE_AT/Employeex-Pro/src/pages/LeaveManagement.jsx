import { useEffect, useState } from "react";
import axios from "axios";
import "./LeaveManagement.css";

function LeaveManagement() {
  const [leaves, setLeaves] = useState([]);
   const [employeeName, setEmployeeName] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    const res = await axios.get("http://localhost:3002/leaves");
    setLeaves(res.data);
  };

  const updateStatus = async (id, status) => {
    const leave = leaves.find((l) => l.id === id);

    await axios.put(
      `http://localhost:3002/leaves/${id}`,
      {
        ...leave,
        status,
      }
    );

    fetchLeaves();
  };
const saveLeave = async () => {
  const newLeave = {
    employeeName,
    leaveType,
    from,
    to,
    reason,
    status: "Pending",
  };

  await axios.post("http://localhost:3002/leaves", newLeave);
  fetchLeaves();
};
  return (
    <div className="leave-management">
      <h1>Leave Management</h1>
       <button id="addLeaveBtn">
      Add Leave
    </button>
      <div className="leave-form">
  <input
    id="employeeName"
    type="text"
    placeholder="Employee Name"
    value={employeeName}
  onChange={(e) => setEmployeeName(e.target.value)}
  />

  <select id="leaveType" value={leaveType}
  onChange={(e) => setLeaveType(e.target.value)}>
    <option>Casual Leave</option>
    <option>Sick Leave</option>
    <option>Annual Leave</option>
  </select>

  <input id="fromDate" type="date"  value={from}
  onChange={(e) => setFrom(e.target.value)}/>

  <input id="toDate" type="date"  value={to}
  onChange={(e) => setTo(e.target.value)}/>

  <textarea
    id="reason"
    placeholder="Reason"
    value={reason}
  onChange={(e) => setReason(e.target.value)}
  ></textarea>

  <button id="saveLeaveBtn" onClick={saveLeave}>
    Save Leave
  </button>
</div>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.employeeName}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>{leave.status}</td>

              <td>
                <button
                  onClick={() =>
                    updateStatus(leave.id, "Approved")
                  }
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    updateStatus(leave.id, "Rejected")
                  }
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveManagement;