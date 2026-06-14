import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerApp from "./pages/CustomerApp/CustomerApp";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerApp />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
