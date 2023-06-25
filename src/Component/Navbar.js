import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
          <Link to = '/'> Contact Form </Link>
          <Link to = '/contactList'> Contact List </Link>
        </nav>
    </div>
  )
}

export default Navbar