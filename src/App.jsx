import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import CourseWeb from "./pages/CourseWeb";
import "./App.css";
import SoftwareCourse from "./pages/SoftwareCourse";
import FlutterCourse from "./pages/flutterCourse";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/webDevelopment" element={<CourseWeb />} />
          <Route path="/course/software" element={<SoftwareCourse />} />
          <Route path="/course/flutter" element={<FlutterCourse />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default App;
