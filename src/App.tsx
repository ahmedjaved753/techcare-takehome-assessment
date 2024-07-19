import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/patients" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/patients" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
