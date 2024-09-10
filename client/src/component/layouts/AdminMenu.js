import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminMenu() {
  return (
    <>
    
    <div className='text-center'>
    <div className="list-group">
  <h1>Admin Panel</h1>
  <NavLink to="/dashboard/admin/create-course" className="list-group-item list-group-item-action">Create Courses</NavLink>
  <NavLink to="/dashboard/admin/feedback" className="list-group-item list-group-item-action">Student Feedback</NavLink>
  <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">users</NavLink>
  <NavLink to="/dashboard/admin/contact" className="list-group-item list-group-item-action">Contact information</NavLink>
</div>
</div>
    </>
  )
}

export default AdminMenu