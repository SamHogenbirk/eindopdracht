import React from 'react';
import LineChart from "./components/LineChart"
import BarChart from "./components/BarChart"
import Test from "./components/Test"
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BarChart />} />
        {/* <Test /> */}
        {/* <LineChart /> */}
      </Routes>
    </div>
  )
}

export default App;
