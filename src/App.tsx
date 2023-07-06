import Header from './Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'

const App = () => {
  return (
    <div className='App'>
      <div className='header-container'>
        <Header />
      </div>
      <Routes>
        <Route path='/home' element={<Home />}/>
      </Routes>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  )
}

export default App
