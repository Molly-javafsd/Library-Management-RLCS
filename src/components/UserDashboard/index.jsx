import React from 'react'
import Books from '../BooksData'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

import { Button } from '@mui/material';

import AddBoxIcon from '@mui/icons-material/AddBox';
import UserData from '../UserData';

function UserDashboard() {
  return (
    <div style={{marginTop: '30px'}} className='background_1'>
      <Navbar/><br /><br />
      <UserData/>

    </div>
  )
}
export default UserDashboard
