import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import {useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Loading from '../assets/Loading';

const NavHorizontal = React.lazy(() => import("./navHorizontal/NavHorizontal"))
const NavVertical = React.lazy(() => import("./navVertical/NavVertical"))



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Layout = () => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(!useMediaQuery('(max-width:600px)'));
  const [isSmallerThan600, setIsSmallerThan600] = React.useState(
    useMediaQuery('(max-width:600px)')
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerThan600(window.innerWidth < theme.breakpoints.values.sm);
      setOpen(isSmallerThan600);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.breakpoints.values.sm]);

  const desplegar = () => {
    setOpen(false);
  };

  return (
    <React.Suspense fallback={<Loading/>}>
      <Box sx={{ display: 'flex' }}>
        <NavVertical open={ open } setOpen={ setOpen }/>
        
        <NavHorizontal 
          anchor='left' 
          open= { open } 
          setOpen= { setOpen } 
          isSmallerThan600 = { isSmallerThan600 }
          setIsSmallerThan600 = { setIsSmallerThan600 }
        />

        <Box component='main' sx={{ flexGrow: 1, p: 3, bgcolor:'#f2f5f9', height:'100vh' }} onClick={ desplegar }>
          <DrawerHeader />
          <Outlet/>
        </Box>
      </Box>
    </React.Suspense>
  )
}

export default Layout;
