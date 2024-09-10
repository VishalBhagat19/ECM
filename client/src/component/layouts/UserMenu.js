import React from 'react'
import { NavLink } from 'react-router-dom'

function UserMenu() {
  return (
    <>
    <div className='text-center'>
    <div className="list-group">
  <h1>Dashboard</h1>
  <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
  <NavLink to="/dashboard/user/course" className="list-group-item list-group-item-action">Enroll courses</NavLink>
</div>
</div>
    </>
  )
}

export default UserMenu