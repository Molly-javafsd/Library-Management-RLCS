import React from 'react'
import Books from '../BooksData'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

import { Button } from '@mui/material';

import AddBoxIcon from '@mui/icons-material/AddBox';

function BookDashboard() {
  return (
    <div style={{marginTop: '30px'}} className='background_1'>
      <Navbar/><br /><br />
      <div style={{margin: 'auto', textAlign: 'center'}}>
        <Link to='/addData'><Button variant="contained">
          <AddBoxIcon />
          Add Books
        </Button></Link>
      </div>
      <Books/>
    </div>
  )
}
export default BookDashboard
