import { useEffect, useState } from "react";

const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: 20,
      right: 20,
      background: "#111",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: 8,
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      animation: "slideIn 0.5s"
    }}>
      🔔 {message}
    </div>
  );
};

export default Notification;