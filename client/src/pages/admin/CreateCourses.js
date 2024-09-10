import React, { useEffect, useState } from 'react'
import AdminMenu from '../../component/layouts/AdminMenu'
import {toast} from'react-toastify'
import axios from 'axios'
import CourseForm from '../../component/courses/CourseForm'
import {Modal} from 'antd'
import CourseEDit from '../../component/courses/CourseEDit'
import Layout from '../../component/layouts/Layout'
function CreateCourses() {
  // const[title,setTitle]=useState('')
  // const[description,setDescription]=useState('')
  const[courses,setCourses]=useState([])
  const[visible,setVisible]=useState(false)
  const[selected,setSelected]=useState(null)
  const[updateName,setUpdateName]=useState('')

  // const handleSubmit=async(e)=>{
  //   e.preventDefault()
  // try{
  //   const{data}=await axios.post('/api/v1/auth/create',{title,description})
  //   if(data?.success){
  //     toast.success(`${data.title} is created`)
  //     getAllCourse()
  //   }
  //   else{
  //     toast.error(data.message)
  //   }
  // }
  // catch(error){
  //   console.log(error);
  // }}
  const getAllCourse=async()=>{
    try {
      const {data}=await axios.get('/api/v1/auth/getalluser')
      if(data.success){
        setCourses(data.data)
      }
    } catch (error) {
      console.log(error);
      toast.error('Somrthing went wrong in getting courses')
    }
  }
  useEffect(()=>{
    getAllCourse();
  },[])

  const handleUpdate=async(e)=>{
    e.preventDefault()
    try {
      console.log(e);
    } catch (error) {
      console.log(error);
      toast.error('something went wrong')
    }
  }
  return (
    <Layout title={'Courses'}>
    <br/><br/>
    <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
                <h1 className='text-center'>Manage courses</h1>
                <div className='p-3'>
                  <CourseForm />
                </div>
                <div className='w-75'>
              <table className="table">
  <thead>
    <tr>
      <th scope='col'>S.no</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Images</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {courses?.map((c,i) =>(
        <>
        <tr key={c._id}>
          <td scope='col'>{i+1}</td>
          <td scope='col'>{c.title}</td>
          <td>{c.description}</td>
          <td>{c.image.url}</td>
          <td><button className='btn btn-primary ms-2' onClick={()=>{setVisible(true);  setUpdateName(c.title)}}>Edit</button>
        <button className='btn btn-danger ms-2'>Delete</button>
        </td>
          </tr>
        </>
      ))}

    </tr>
  </tbody>
</table>

                </div>
                <Modal onCancel={()=>setVisible(false)}footer={null} visible={visible}><CourseEDit/></Modal>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default CreateCourses