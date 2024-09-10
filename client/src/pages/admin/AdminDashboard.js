import React from 'react'
import AdminMenu from '../../component/layouts/AdminMenu'
import { useAuth } from '../../context/Auth'
import Layout from '../../component/layouts/Layout'
import './Admin.css'

function AdminDashboard() {
    const[auth]=useAuth()
  return (
    <Layout title={'Admin Dashboard'}>
    <br/><br/>
    <div className='container-fluid m-3 p-3 '>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
                <div className='card w-75 p-3 admin'>
                    <h3> Admin Name: {auth?.user?.name}</h3>
                    <h3> Admin Email: {auth?.user?.email}</h3>
                    <h3> Admin Contact: {auth?.user?.phone}</h3>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default AdminDashboard