import MainPage from './pages/MainPage'
import Student from './pages/Student'
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </>
  )
}

export default App;