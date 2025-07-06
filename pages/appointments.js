import { useEffect, useState } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("idToken");
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    fetch("https://mt3sbznmq1.execute-api.us-east-2.amazonaws.com/dev/appointments", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <pre>{JSON.stringify(appointments, null, 2)}</pre>
    </div>
  );
}

