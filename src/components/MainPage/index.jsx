import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@mui/material';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import AddBoxIcon from '@mui/icons-material/AddBox';
function MainPage() {
  return (
    <div>
<div style={{margin: 'auto', textAlign: 'center',padding:"120px"}}>
<Link to='/'><Button variant="contained">
<SupervisedUserCircleIcon/>
  User Portal
</Button></Link>
</div>
<div style={{margin: 'auto', textAlign: 'center'}}>
        <Link to='/adminlogin'><Button variant="contained">
            <AdminPanelSettingsIcon/>
          Admin Portal
        </Button></Link>
      </div>

    </div>
  )
}

export default MainPage