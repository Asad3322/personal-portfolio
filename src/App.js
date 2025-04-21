import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Components — match file casing
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/Aboutpage";
import SkillPage from "./Pages/Skillpage";
import ProjectsPage from "./Pages/Projectspage";
import ContactPage from "./Pages/Contactpage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
