import { useState } from "react";
import "./EmployeeSettings.css";

function EmployeeSettings() {

  const [name, setName] = useState("Dhivya");
  const [email, setEmail] = useState("dhivya@gmail.com");
  const [password, setPassword] = useState("");

  const saveSettings = () => {
    alert("Profile Updated Successfully");
  };

  return (
    <div className="settings-page">

      <div className="settings-card">

        <h1>Employee Settings</h1>

        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={saveSettings}>
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default EmployeeSettings;