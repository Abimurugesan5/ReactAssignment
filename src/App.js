import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Login from "./Components/Login"
import Dashboard from "./Components/Dashborad";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
       
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}
export default App;