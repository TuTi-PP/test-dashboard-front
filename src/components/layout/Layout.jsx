
import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import NavVertical from './navVertical/NavVertical';
import NavHorizontal from './navHorizontal/NavHorizontal';
import { Outlet } from 'react-router-dom';
import {useMediaQuery } from '@mui/material';



const DrawerHeader = styled('div')(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Layout = () => {
  const isSmallerThan600 = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = React.useState(!isSmallerThan600);
    
  const desplegar = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <NavVertical open={open} setOpen={setOpen} />

        <NavHorizontal 
            anchor="left" 
            open={open} 
            setOpen={setOpen} 
        />

        <Box component="main" sx={{ flexGrow: 1, p: 3 , bgcolor:"#f2f5f9", height:"100vh"}} onClick={ desplegar}>
          <DrawerHeader />
          <Outlet/>
        </Box>

    </Box>
  )
}

export default Layout