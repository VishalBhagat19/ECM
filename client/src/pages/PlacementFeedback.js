import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import CreateFeedback from '../component/feedback/CreateFeedback'

function PlacementFeedback() {
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
    <div className="container-fluid m-3 p-3">
    <div className="row">
      <div>
        <div className='p-3'>
          <CreateFeedback/>
        </div> 
        </div>
      </div>
    </div>

    )
  }

export default PlacementFeedback