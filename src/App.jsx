import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderC from './components/HeaderC'
import Footer from './components/Footer'
function App() {
  
  return (
    <>
      <HeaderC/>
      <div className='min-vh-100'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
