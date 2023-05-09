import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { openedMixin } from '../NavHorizontal';

const drawerWidth = 240;

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#11192a',
  overflowX: 'hidden',
  width: `calc(${ theme.spacing(7) } + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const NavHorizontalDesktop = ({ open, DrawerHeader, Typography, IconButton, Divider, Box, LinksSections, 
    LinksSettings, Button, links_nav_config, ChevronLeftIcon, LogoutIcon, links_nav_sections, hide }) => {

  return (
    <Drawer variant='permanent' open={ open } >
      <DrawerHeader  sx={{ display: 'flex' , justifyContent: 'space-between' }}>
        <Typography variant='h1' noWrap component='div' ml={ 2 } fontWeight={ '600' } fontSize={ '1.06rem' } color={ 'white' }>Nombre Sucursal</Typography>
        <IconButton onClick={ hide }>{<ChevronLeftIcon sx={{ color: 'white' }}/>}</IconButton>
      </DrawerHeader>

      <Divider color='#444444'/>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>

          <LinksSections open={ open } links_nav_sections={ links_nav_sections } sx={{ marginTop: '2rem' }} hide={ hide } px={ 2.5 }/>
          
          <Divider color='#444444'/>

          <LinksSettings open={ open } links_nav_config={ links_nav_config } hide={ hide } px={ .5 } />
        </Box>

        <Box sx={{ my: .5, mt: 6 }}>
          <Divider color='#444444'/>
          {
            open ? 
              <Button variant='outlined' color='error' startIcon={ <LogoutIcon /> } sx={{ my: '1rem', mx: '1.8rem', fontWeight: '600', color: '#ff1744' }}>
                Cerrar sesión
              </Button>
              
              :
     
              <IconButton aria-label='cerrar sesion' sx={{ minWidth: 0, my: '.88rem', mx: '.9rem', justifyContent: 'center', color: '#ff1744' }}>
                <LogoutIcon  /> 
              </IconButton>
          }
        </Box>
      </Box>
    </Drawer>
  )
}

export default NavHorizontalDesktop;
