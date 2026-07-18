import { useState } from "react";
import axios from "axios";
import "./LeaveRequest.css";

function LeaveRequest() {

  const [leave, setLeave] = useState({
    employeeId: "1",
    employeeName: "Dhivya K",
    leaveType: "",
    from: "",
    to: "",
    reason: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setLeave({
      ...leave,
      [e.target.name]: e.target.value,
    });
  };

  const submitLeave = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3002/leaves",
        leave
      );

      alert("Leave Request Submitted Successfully");

      setLeave({
        employeeId: "1",
        employeeName: "Dhivya K",
        leaveType: "",
        from: "",
        to: "",
        reason: "",
        status: "Pending",
      });

    } catch (err) {
      console.log(err);
      alert("Unable to submit leave");
    }
  };

  return (
    <div className="leave-page">

      <div className="leave-card">

        <h1>Leave Request</h1>

        <form onSubmit={submitLeave}>

          <select
          id="leaveType"
            name="leaveType"
            value={leave.leaveType}
            onChange={handleChange}
            required
          >
            <option value="">Select Leave Type</option>
            <option>Casual Leave</option>
            <option>Sick Leave</option>
            <option>Earned Leave</option>
            <option>Work From Home</option>
          </select>

          <input
           id="fromDate"
            type="date"
            name="from"
            value={leave.from}
            onChange={handleChange}
            required
          />

          <input
          id="toDate"
            type="date"
            name="to"
            value={leave.to}
            onChange={handleChange}
            required
          />

          <textarea
            id="reason"
            name="reason"
            placeholder="Reason"
            value={leave.reason}
            onChange={handleChange}
            required
          />

          <button  id="saveLeaveBtn" type="submit">
            Submit Leave Request
          </button>

        </form>

      </div>

    </div>
  );
}

export default LeaveRequest;