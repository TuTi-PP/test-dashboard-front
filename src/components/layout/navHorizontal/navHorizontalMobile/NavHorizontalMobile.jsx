import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';



const NavHorizontalMobile = ({ open, DrawerHeader, Typography, drawerWidth, IconButton, Divider, Box, 
  LinksSections, LinksSettings, Button, links_nav_config, ChevronLeftIcon, LogoutIcon, links_nav_sections, hide }) => {
    
  return (
    <SwipeableDrawer onClose={hide} onOpen={hide} open={open} >
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: '#11192A' }}>
          <Typography variant='h1' noWrap component='p' ml={ 2 } fontWeight={ '600' } fontSize={ '1.06rem' } color={ 'white' }>Nombre Sucursal</Typography>
          <IconButton onClick={ hide }>{<ChevronLeftIcon sx={{ color: 'white' }}/>}</IconButton>
        </DrawerHeader>

        <Divider color='#444444'/>

        <Box sx={{ display: 'flex', flexGrow: 1 , flexDirection: 'column', justifyContent: 'space-between',  width: drawerWidth, bgcolor: '#11192A' }}>
          <Box>
            <LinksSections open={ open } links_nav_sections={ links_nav_sections } sx={{ marginTop: '2rem' }} hide={hide} />

            <Divider color='#444444'/>

            <LinksSettings open={open} links_nav_config={links_nav_config} hide={hide} />
          </Box>

          <Box sx={{ my: .5, mt: 6 }}>
            <Divider color='#444444'/>

            <Button variant='outlined' color='error' startIcon={ <LogoutIcon /> } sx={{ my: '1rem', mx: '1.8rem', fontWeight: '600', color: '#ff1744' }}>
              Cerrar sesión
            </Button>
          </Box>
      
        </Box>
    </SwipeableDrawer>
  )
}

export default NavHorizontalMobile;
