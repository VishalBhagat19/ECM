import React from 'react'
import UserMenu from '../component/layouts/UserMenu'
import { useAuth } from '../context/Auth'

function Dashboard() {
  const[auth]=useAuth()
  return (
    <>
    <br/><br/>
    <div className='container-fluid m-3 p-3'>
      <div className='row'>
        <div className='col-md-3'>
          <UserMenu/>
        </div>
        <div className='col-md-9'>
         <div className='card p-3 w-75'>
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.phone}</h3>
            <h3>{auth?.user?.address}</h3>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard