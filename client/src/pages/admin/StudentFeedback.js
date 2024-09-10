import React, { useEffect, useState } from 'react'
import AdminMenu from '../../component/layouts/AdminMenu'
import axios from 'axios'
import { toast } from 'react-toastify'
import CreateFeedback from '../../component/feedback/CreateFeedback'
import Layout from '../../component/layouts/Layout'

function StudentFeedback() {
  const[courses,setCourses]=useState([])

  const displayfeedback=async()=>{
    try {
      const {data}=await axios.get('/api/v1/auth/getallfeedback')
      if(data.success){
        setCourses(data.data)
      }
    } catch (error) {
      console.log(error);
      toast.error('Somrthing went wrong in getting courses')
    }
  }
  useEffect(()=>{
    displayfeedback();
  },[])

  // const handleUpdate=async(e)=>{
  //   e.preventDefault()
  //   try {
  //     console.log(e);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('something went wrong')
  //   }
  // }
  return (
    < Layout title={'Student Feedback'}>
    <br/><br/>
    <div className="container-fluid m-3 p-3">
  <div className="row">
    <div className="col-md-3">
      <AdminMenu/>
      </div>
    <div className="col-md-9">
      <h1 className="text-center">Manage feedback</h1>
      <div className='p-3'>
        <CreateFeedback/>
      </div>
      <div className='w-75'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {courses?.map((c,i)=>(
      <>
      <tr key={c._id}>
      <th scope="row">{i+1}</th>
      <td>{c.title}</td>
      <td>{c.description}</td>
      <td>{c.image.url}</td>
      </tr>
      </>
      ))}
    </tr>
  </tbody>
</table>
</div> 
      </div>
    </div>
  </div>

</Layout>
  )
}

export default StudentFeedback