
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function Root() {

  return (
    <div className='2xl:container mx-auto'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}


export default Root
