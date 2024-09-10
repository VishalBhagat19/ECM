import axios from 'axios';
import React, { useState } from 'react'
import './Course.css'

function Couse() {
    const [formData, setFormData] = useState({
        name:" ",
        email:" ",
        address:" ",
        phone:" ",
        course:" ",
        branch:" "
      });

      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleChange = (e) => {
        console.log("handle change");
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("hello");
        try {
          console.log("Before Axios Post");
    
          const response = await axios.post(
            "http://localhost:8000/api/v1/auth/registercourse",
            formData
          );
          console.log(response);
    
          console.log("After Axios Post");
          if (response.status === 200) {
            // Handle success show a success message)
            console.log("Message sent successfully!");
          } else {
            // Handle error (show an error message)
            console.error("Error sending message");
          }
        } catch (error) {
          console.error("Error sending message:", error);
        }
      };
  return (
    <>
    <div className='container-fluid course1'>
        <div className='row'>
        <h1 class="text-center">Course Registration Form</h1>
                <h3 class="text-center">Do Register Fast!!</h3>
                <p class="text-center bg-info">In Case Any Query, Kindly Contact: 9399892162</p>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
            <form onSubmit={handleSubmit} className='course p-3 m-3'>

<div class="form-group mb-3">
    <label>Full Name:</label>
    <input class="form-control" type="text" name="name"  required
        placeholder="Enter Your Full Name" onChange={handleChange} />
    <span class="Error"></span>
</div>
<div class="form-group mb-3">
    <label>Email:</label>
    <input class="form-control" type="email" name="email" required
        placeholder="Enter Your Email" onChange={handleChange}/>
    <span class="Error"></span>
</div>
<div class="form-group mb-3">
    <label>Enter Mobile Number:</label>
    <input class="form-control" type="number" name="phone"required
        placeholder="Enter Mobile Number" onChange={handleChange}/>
    <span class="Error"></span>
</div>
<div class="form-group mb-3">
    <label>Address:</label>
    <textarea class="form-control"name="address"onChange={handleChange}></textarea>
    {/* <!-- <input class="form-control" type="address" name="address" required
        placeholder="Address" /> --> */}
    <span class="Error"></span>
</div>
<div class="form-group mb-3">
    <label>Select Course:</label>
    <select class="form-control" name="course" onChange={handleChange}>
        <option selected=""> Select Course</option>
        <option>React.js</option>
        <option>Angular</option>
        <option>Laravel</option>
        <option>Cpp</option>
        <option>Java</option>
        <option>Python</option>
    </select>
</div>
 <div class="form-group mb-3">
    <label>Select Branch:</label>
    <select class="form-control" name="branch" onChange={handleChange}>
        <option selected=""> Select Branch</option>
        <option>CSE</option>
        <option>IT</option>
        <option>EC</option>
        <option>ME</option>
        <option>CE</option>
    </select>
</div>
<div class="form-group mb-3">
    <button class="btn btn-primary" type="submit">Submit</button>
</div>
</form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Couse