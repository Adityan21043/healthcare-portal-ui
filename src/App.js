import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;


