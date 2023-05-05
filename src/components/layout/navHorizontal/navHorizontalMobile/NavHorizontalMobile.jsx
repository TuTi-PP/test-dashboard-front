import React from 'react';

const NavHorizontalMobile = ({ Drawer, open, setOpen, DrawerHeader, Typography, drawerWidth, IconButton, Divider, Box, 
  LinksSections, LinksSettings, Button, links_nav_config, ChevronLeftIcon, LogoutIcon, links_nav_sections, handleDrawerClose }) => {
    
  const desplegar = () => {
    setOpen(false);
  };

  return (
    <Drawer anchor='left'  open={ open } onClick={ desplegar }>
      <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: '#11192A' }}>
        <Typography variant='h1' noWrap component='div' ml={ 2 } fontWeight={ '600' } fontSize={ '1.06rem' } color={ 'white' }>Nombre Sucursal</Typography>
        <IconButton onClick={ handleDrawerClose }>{<ChevronLeftIcon sx={{ color: 'white' }}/>}</IconButton>
      </DrawerHeader>

      <Divider color='#444444'/>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: drawerWidth, bgcolor: '#11192A' }}>
        <Box>
          <LinksSections open={ open } links_nav_sections={ links_nav_sections } sx={{ marginTop: '2rem' }} handleDrawerClose={handleDrawerClose} />

          <Divider color='#444444'/>

          <LinksSettings open={open} links_nav_config={links_nav_config} handleDrawerClose={handleDrawerClose} />
        </Box>

        <Box sx={{ my: .5, mt: 6 }}>
          <Divider color='#444444'/>

          <Button variant='outlined' color='error' startIcon={ <LogoutIcon /> } sx={{ my: '1rem', mx: '1.8rem', fontWeight: '600', color: '#ff1744' }}>
            Cerrar sesión
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default NavHorizontalMobile;
