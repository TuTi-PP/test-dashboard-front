import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const NavVertical = ({open, setOpen}) => {
   
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  return (
    <AppBar position="fixed" open={open} sx={ open ? {bgcolor:"#ffffff"} : {bgcolor:"#f9f9f9"}}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}> 
          <IconButton 
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            size="large"
            edge="start"
            sx={{
              color:"black",
              fontSize:"4rem",
              fontWeight:"bold",
              ml:"-1.1rem",
              ...(open && { visibility: 'hidden' }),
            }}
          >
            <MenuIcon sx={{fontSize:"1.9rem" }}/>
          </IconButton>
          <h3 className='logo'>TuTi</h3>
       
        </Toolbar>
    </AppBar>
  )
}

export default NavVertical