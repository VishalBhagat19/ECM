import React, { useEffect, useState } from 'react'
import AdminMenu from '../../component/layouts/AdminMenu'
import axios from 'axios';
import Layout from '../../component/layouts/Layout'

function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/auth/registercourseview");
        // Assuming the API response is an array of contact
        console.log(response.data);
        const contactArray = response.data.data; // Convert object values into an array
        setUserData(contactArray);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <Layout title={'User information'}>
    <br/><br/>
    <div className='container-fluid p-3 m-3'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
                <h1>All users</h1>
                <table style={{ width: "60%", textAlign: "center", alignContent: "center" }} className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user,index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.course}</td>
              <td>{user.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default Users