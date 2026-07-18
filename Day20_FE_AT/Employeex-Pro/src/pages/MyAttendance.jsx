import "./MyAttendance.css";

function MyAttendance() {
  const attendance = [
    {
      date: "2026-07-10",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
    },
    {
      date: "2026-07-11",
      checkIn: "09:10 AM",
      checkOut: "06:00 PM",
      status: "Present",
    },
    {
      date: "2026-07-12",
      checkIn: "-",
      checkOut: "-",
      status: "Leave",
    },
  ];

  return (
    <div className="attendance-page">
      <h1>My Attendance</h1>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.checkIn}</td>
              <td>{item.checkOut}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyAttendance;