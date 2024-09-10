import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminMenu from '../layouts/AdminMenu';

function ContactView() {
    const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/auth/contactview");
        // Assuming the API response is an array of contact
        console.log(response.data);
        const contactArray = response.data.data; // Convert object values into an array
        setContactData(contactArray);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <><br/>
    <div className='container-fluid m-3 p-3'>
      <div className='row'>
     <h2 className='text-center'>Contact Data</h2>
     <div className='col-md-3'>
     <AdminMenu/>
     </div>
     <div className='col-md-9'>
      <table style={{ width: "60%", textAlign: "center", alignContent: "center" }} className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact,index) => (
            <tr key={index}>
              <td>{contact.contname}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
    </>
  )
}

export default ContactView
