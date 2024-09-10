import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import {toast} from'react-toastify'

function Header() {
  const[auth,setAuth]=useAuth()
  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('auth')
    toast.success('Logout successfully')
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"><img src='logo.png'/>University of Gwalior</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/placement">Placement</Link>
        </li>
        <li>
        {
          !auth.user?(
            <>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link active text-white'>Sign up</NavLink>
            </li>
            </>
          ):(<>
           <li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {auth?.user?.name}
  </NavLink>
  <ul className="dropdown-menu ">
    <li><NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role==='admin'?'admin':'user'}`}>Dashboard</NavLink></li>
   <li> <NavLink onClick={handleLogout}to='/login'className='dropdown-item'>Logout</NavLink></li>
  </ul>
</li>
          </>)
        }
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>

  )
}

export default Header