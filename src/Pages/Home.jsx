import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <Link to='/admin'>Admin</Link>
    </div>
  )
}

export default Home