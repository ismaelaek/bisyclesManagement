import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/Auth/login'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
