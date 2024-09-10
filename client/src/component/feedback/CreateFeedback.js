import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from "react-bootstrap";

function CreateFeedback() {
    const [formData, setFormData] = useState({
        title:"",
        description:"",
        image:null,
    })
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name ,value ,files } = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:files ? files[0] : value,
        }))
    }

    const [fetchedCourse , setFetchedCourse] = useState({});

    const handleSubmit = async(e)=>{
        e.preventDefault();

    try {
            
        const {title,description,image} = formData;
        const formDataToSend = new FormData();
        formDataToSend.append("title",title);
        formDataToSend.append("description",description)
        formDataToSend.append("image",image);

        const response = await axios.post(
            "/api/v1/auth/createfeedback",
            formDataToSend,
            {
                headers:{
                    "Content-Type":"multipart/form-data",
                },
            }
        )

        console.log("Request Successful 👍",response.data.result);
        const {
            _id,
            image: { url },
          } = response.data.result;
    
          setFetchedCourse({_id,url})

          navigate(`/Blog?id=${_id}`);
    } catch (error) {
        console.error("Error submitting form:", error);

    }
}
  return (
    <div>
        <Container className="w-100" style={{ marginTop: "1rem" }}>
      <Card
        className="p-3 justify-content-center"
        style={{ width: "30rem", margin: "auto",backgroundColor:"lightblue" }}
      >
        <h3>Please give feedback here!!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter the Name"
              value={formData.title}
              onChange={handleChange}
            />

    </Form.Group>

<Form.Group controlId="description">
  <Form.Label>Description</Form.Label>
  <Form.Control
    as="textarea"
    rows={4}
    name="description"
    className="description"
    placeholder="feedbacks"
    value={formData.description}
    onChange={handleChange}
  />
</Form.Group>

<Form.Group controlId="image">
  <Form.Label>Image</Form.Label>
  <Form.Control
    type="file"
    accept="image/*"
    name="image"
    onChange={handleChange}
  />
</Form.Group>

<Button variant="info" className="mt-3" type="submit">
  Submit
</Button>
</Form>
</Card>
</Container>
    </div>
  )
}

export default CreateFeedback