import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import CardCourse from '../component/courses/CardCourse'
import Layout from '../component/layouts/Layout'
import './About.css'

function Courses() {
  const [blogs, setBlogs] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/auth/display");
      // console.log(response);
      const fetchedBlogs = response.data.data;
      console.log(fetchedBlogs);
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <><br/>
    <Layout title={'Courses'}>
    <div className='container-fluid z'>
      <div className='row'>
        
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='title text-center mt-4'>Some Courses</h1>
      <Container className="d-flex flex-wrap my-5">
        {blogs.map((blog) => (
          <Col key={blog._id} md={4} className="mb-3">
            <CardCourse
              title={blog.title}
              description={blog.description}
              image={blog.image?.url}
              style={{ height: "100%" }}
            />
          </Col>
        ))}
      </Container>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default Courses