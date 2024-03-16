import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function App() {
  return (
    <div> 
     <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<div>Error404</div>} />
        </Routes>
      <Footer/>
    </div>
  )
}