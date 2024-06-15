import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Register from './components/Register'
import Dashboard from "./components/Dashboard"
import Login from './components/Login'
import ProtectRoute from './services/ProtectRoute'
import Add from "./blogges/Add"
import Edit from './blogges/Edit'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* use for protecting dashboard */}
          <Route path='/dashboard' element={<ProtectRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:rowIndex' element={<Edit />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
