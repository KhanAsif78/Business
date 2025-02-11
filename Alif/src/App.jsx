import GlobalStyles from "./Styles/GrobalStyles";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Register from "./Pages/Registration";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes for services, contact, etc. */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
