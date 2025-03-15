import './App.css'
import About from './Pages/About';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from './Pages/profile';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
