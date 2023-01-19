import React from 'react';
import Test from "./components/Test"
import MainPage from './pages/MainPage'
import Student from './pages/Student'
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student" element={<Student />} />
        {/* <Test /> */}
      </Routes>
    </div>
  )
}

export default App;
