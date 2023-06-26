import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function Navbar() {
  return (
    <div>
        <nav>
         <Box mr={1}>

          {/* <Link to = '/'> Contact Form </Link>
          <Link to = '/contactList'> Contact List </Link> */}
          {/* using material ui typography */}
           <Typography component={Link} to="/" variant="button" color = "red">Contact</Typography>
          </Box>
          <Typography component={Link} to="/contactList" variant="button" color="red"> ContactList</Typography>
        </nav>
    </div>
  )
}

export default Navbar