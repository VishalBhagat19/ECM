import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import Layout from '../../component/layouts/Layout'
import './Register.css'

function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[auth,setAuth]=useAuth()
    const navigate=useNavigate()
    const location=useLocation()

    const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log(email,password);
      
      try {
          const res=await axios.post('/api/v1/auth/login',{email,password})
          if(res && res.data.success){
              toast.success(res.data && res.data.message)
              setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token
              })
              localStorage.setItem('auth',JSON.stringify(res.data))
              navigate(location.state||'/')
          }
          else{
              toast.error(res.data.message)
          }
      } catch (error) {
          console.log(error);
          toast.error("Something went wrong")
      }
  }
  return (
    <Layout title={'Login page'}><br/>
      <div className='reg'>
      <div className='container-fluid'>
      <div className='row'>
    <div className='col-md-4'></div>
    <div className='col-md-4'>
    <form className='row g-3'onSubmit={handleSubmit}>
  
      <div className="col-12 mb-3">
       
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div className="col-12 mb-3">
        
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      </div>
      <div className='col-md-4 mb-3'>
     <button type='button' className='btn btn-primary'onClick={()=>{navigate('/forgotpassword')}}>Forgot Password</button>
     </div>
     <div className='col-md-4 mb-3'>
      <button type="submit" className="btn btn-primary">Login</button>
      </div>
      <div className='col-md-4 mb-3'>
      <Link to='/register'type="submit" className="btn btn-primary">Register</Link>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </Layout>
  )
}

export default Login