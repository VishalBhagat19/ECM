import React, { useState } from 'react'
import axios from 'axios';

function FeedbackEdit() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: files ? files[0] : value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const { title, description, image } = formData;
          const formDataToSend = new FormData();
          formDataToSend.append('title', title);
          formDataToSend.append('description', description);
          formDataToSend.append('image', image);
    
          // Make sure to replace 'your-api-endpoint' with the actual endpoint
          await axios.put(`http://localhost:8000/api/v1/auth/update${blogId}`, formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          console.log('Update Successful 👍');
          // You might want to redirect or perform additional actions upon successful update
        } catch (error) {
          console.error('Error updating blog:', error);
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input type="text" name="title" onChange={handleChange} value={formData.title} />
    
          <label>Description</label>
          <textarea name="description" onChange={handleChange} value={formData.description}></textarea>
    
          <label>Image</label>
          <input type="file" accept="image/*" name="image" onChange={handleChange} />
    
          <button type="submit">Update Blog</button>
        </form>
      );
}

export default FeedbackEdit