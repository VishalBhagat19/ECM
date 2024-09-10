import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Layout from '../../component/layouts/Layout'

function Forgot() {
    const[email,setEmail]=useState('')
    const[newPassword,setNewPassword]=useState('')
    const[question,setQuestion]=useState('')
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log(email,newPassword,question);
      
      try {
          const res=await axios.post('/api/v1/auth/forgotpassword',{email,newPassword,question})
          if(res && res.data.success){
              toast.success(res.data && res.data.message)
              
              navigate('/login')
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
    <Layout title={'Forgot'}><br/>
     <div className='reg'>
    <div className='container-fluid'>
      <div className='row'>
    <div className='col-md-4'></div>
    <div className='col-md-4'>
    <form className='row g-3'onSubmit={handleSubmit}>
  
      <div className=" col-12 mb-3">
       
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div className="col-12 mb-3">
        
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your New password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required/>
      </div>
      <div className=" col-12 mb-3">
       
       <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='What is your Favourite sport' value={question}  onChange={(e)=>setQuestion(e.target.value)} required/>
     </div>
     
      <button type="submit" className="btn btn-primary">Reset</button>
     
    </form>
    </div>
    </div>
    </div>
  </div>
    </Layout>
  )
}

export default Forgot