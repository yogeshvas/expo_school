import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Attendance from "./pages/Attendance/Attendance";
import Contest from "./pages/Contest";
import Performance from "./pages/Performance";
import Class11 from "./pages/Attendance/classes/Class11";
import Class1 from "./pages/Attendance/classes/Class1";
import Class2 from "./pages/Attendance/classes/Class2";
import Class3 from "./pages/Attendance/classes/Class3";
import Class4 from "./pages/Attendance/classes/Class4";
import Class5 from "./pages/Attendance/classes/Class5";
import Class6 from "./pages/Attendance/classes/Class6";
import Class7 from "./pages/Attendance/classes/Class7";
import Class8 from "./pages/Attendance/classes/Class8";
import Class9 from "./pages/Attendance/classes/Class9";
import Class10 from "./pages/Attendance/classes/Class10";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/attendance" element={<Attendance />} />
        <Route exact path="/contest" element={<Contest />} />
        <Route exact path="/" element={<Performance />} />

        {/* classes Routes */}

        <Route exact path="/attendance/class1" element={<Class1 />} />
        <Route exact path="/attendance/class2" element={<Class2 />} />
        <Route exact path="/attendance/class3" element={<Class3 />} />
        <Route exact path="/attendance/class4" element={<Class4 />} />
        <Route exact path="/attendance/class5" element={<Class5 />} />
        <Route exact path="/attendance/class6" element={<Class6 />} />
        <Route exact path="/attendance/class7" element={<Class7 />} />
        <Route exact path="/attendance/class8" element={<Class8 />} />
        <Route exact path="/attendance/class9" element={<Class9 />} />
        <Route exact path="/attendance/class10" element={<Class10 />} />
        <Route exact path="/attendance/class11" element={<Class11 />} />
      </Routes>
    </>
  );
}

export default App;
