import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../screen/home/index';
import About from '../../screen/about/index';
import Courses from '../../screen/courses/index';
import Contact from '../../screen/communication/index';
import Login from '../../screen/Login/index';
import Signup from '../../screen/Signup/index';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/kurslar" element={<Courses />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter; 