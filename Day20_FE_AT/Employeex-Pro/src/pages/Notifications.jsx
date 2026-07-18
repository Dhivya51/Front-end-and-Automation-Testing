import { useEffect, useState } from "react";
import axios from "axios";
import "./Notifications.css";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const res = await axios.get(
      "http://localhost:3002/notifications"
    );
    setNotifications(res.data);
  };

  return (
    <div className="notification-page">
      <h1>Notifications</h1>

      {notifications.map((item) => (
        <div className="notification-card" key={item.id}>
          <h3>{item.title}</h3>

          <p>{item.message}</p>

          <small>{item.date}</small>
        </div>
      ))}
    </div>
  );
}

export default Notifications;