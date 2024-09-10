import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../component/layouts/Layout'
function PageNotFound() {
  return (
    <Layout title={'Opps Sorry'}>
        <div className='pnf'>
            <h1 className='pnf-title'>404</h1>
            <h2 className='pnf-heading'>Oops | page not found</h2>
            <Link to='/' className='pnf-btn'>Go Back</Link>
        </div>  
    </Layout>
  )
}

export default PageNotFound