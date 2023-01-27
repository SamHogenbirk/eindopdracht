import React from 'react';
// import Test from "./components/Test"
import MainPage from './pages/MainPage'
import Student from './pages/Student'
import { Route, Routes, Navigate } from 'react-router-dom';
import './styles/App.css';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/home" element={<MainPage />} /> */}
        <Route path="/student/:name" element={<Student />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </>
  )
}

export default App;
