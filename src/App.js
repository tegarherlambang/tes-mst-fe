import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Notfound from './Pages/Notfound';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App;
