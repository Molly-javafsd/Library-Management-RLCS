import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from '../BookDashboard';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
  

function Navbar(props) {

    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Library
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding key={Home}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary= {'Home'}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding key={'Contact'}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary= {'Contact'}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding key={'Logout'}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary= {'Logout'}/>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
       <Box sx={{ display: 'flex' }}>
       <CssBaseline />
       <AppBar component="nav" color='secondary'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Library
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                Home
              </Button>
              <Button sx={{ color: '#fff' }}>
                Contact
              </Button>
              <Link to='/'>
              <Button sx={{ color: '#fff' }}>
              Logout
              </Button>
              </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
       </Box>
    </div>
  )
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Navbar
