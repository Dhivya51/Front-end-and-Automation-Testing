import { useState } from "react";
import "./SettingsPage.css";

function SettingsPage() {
  const [company, setCompany] = useState("Employeex Pro");
  const [email, setEmail] = useState("admin@employeexpro.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");

  const saveSettings = () => {
    alert("Settings Saved Successfully!");
  };

  return (
  <div className="settings-page">

    <div className="settings-header">
      <h1>⚙ Settings</h1>
    </div>

    <div className="settings-card">

      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Admin Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Contact Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Theme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>

      <div className="form-group">
        <label>Language</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option>English</option>
          <option>Tamil</option>
          <option>Hindi</option>
        </select>
      </div>

      <button onClick={saveSettings}>
        Save Settings
      </button>

    </div>

  </div>
);
}

export default SettingsPage;