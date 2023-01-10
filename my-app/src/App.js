import React from 'react';
import PieChart from './features/chartData'
import BarChart from './features/chartData'



import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';


function App() {
  return (
    <Router>
      <PieChart />
      <BarChart />
    </Router >
  )
}

export default App;
