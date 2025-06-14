import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <div className="space-y-4">
      <img
        src="/profile.jpg"
        alt="Ibrahim Fathy"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-2xl font-bold text-center">Ibrahim Fathy</h2>
      <p className="text-center">
        I’m Ibrahim Fathy, a Mechatronics Engineer from Egypt with hands-on experience in
        automation, hydraulics, and heavy machinery systems. I hold a B.Sc. in Mechatronics
        Engineering with Honors from HTI.
      </p>
      <p className="text-center">
        I’ve gained practical skills in PLC programming (TIA Portal), hydraulic systems, diesel
        engine diagnostics, and 3D CAD modeling using SolidWorks. I enjoy working on real-world
        engineering challenges and sharing what I learn.
      </p>
      <div className="text-center space-x-4">
        <a href="https://www.linkedin.com/in/ebrahimfathy" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="mailto:ibrahimfathy2052002@gmail.com" className="text-blue-600 hover:underline">Email</a>
        <a href="/ibrahim-fathy-cv.pdf" download className="text-blue-600 hover:underline">Download CV</a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold">Multi-Tasking SCARA Robot Arm</h3>
        <p>Designed with SolidWorks, programmed with PLC (TIA Portal) and C++ for motion control. Includes hydraulic and pneumatic actuators for improved performance.</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold">Diesel Engine Overhaul Workshop</h3>
        <p>Overhauled diesel engines, maintaining fuel, lubrication, and cooling systems. Focused on diagnosing and repairing fuel systems.</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold">Heavy Equipment Hydraulics Workshop</h3>
        <p>Troubleshot hydraulic circuits for loaders and excavators. Designed subsystems to optimize pressure and flow efficiency.</p>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Blog</h2>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold">Designing and Building a Multi-Tasking SCARA Robot Arm</h3>
        <p>
          This article explains the development of a SCARA robot for automation tasks. It covers:
          design using SolidWorks, PLC & C++ programming, hardware integration, motion logic,
          challenges, and performance outcomes in an industrial setting.
        </p>
        <a href="#" className="text-blue-600 hover:underline">Read more</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Ibrahim Fathy</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-600">About</Link>
            <Link to="/projects" className="hover:text-blue-600">Projects</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          </div>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
