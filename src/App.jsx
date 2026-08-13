import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'
import './App.css'
import Home from './pages/Home.jsx'
import Footer from './components/common/Footer.jsx'

function App() {

  return (
    <>
      <div className="app"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
