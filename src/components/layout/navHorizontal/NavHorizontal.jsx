import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LinksSections from './links/LinksSections';
import LinksSettings from './links/LinksSettings';

import { links_nav_config , links_nav_sections , links_nav_branch} from '../Access';
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: "#11192a",
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#11192a",
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


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

  

const NavHorizontal = ({open, setOpen }) => {

    const handleDrawerClose = () => {
        setOpen(true);
    };
  
    const handleDrawerArrow = () => {
      setOpen(!open);
    };

  return (
    <Drawer variant="permanent" open={open} >
      <DrawerHeader  sx={{display:"flex" , justifyContent:"space-between"}}>
        <Typography variant="h1" noWrap component="div" ml={2} fontWeight={"600"} fontSize={"1.06rem"} color={"white"}>Nombre Sucursal</Typography>
        <IconButton onClick={handleDrawerArrow}>{<ChevronLeftIcon sx={{color:"white"}}/>}</IconButton>
      </DrawerHeader>

      <Divider color="#444444"/>

      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Box sx={{ flexGrow: 1  }}>

          <LinksSections open={open} links_nav_sections={links_nav_sections} sx={{ marginTop: "2rem" }} handleDrawerClose={handleDrawerClose}/>
          
          <Divider color="#444444"/>

          <LinksSettings open={open} links_nav_config={links_nav_config}  handleDrawerClose={handleDrawerClose} />
        </Box>

        <Box sx={{ my: .5 , mt:6}}>
          <Divider color="#444444"/>
          {
            open ? 
              <Button variant="outlined" color="error"  startIcon={<LogoutIcon />} sx={{ my: "1rem", mx: "1.8rem", fontWeight: "600", color:"#ff1744"  }}>
                Cerrar sesión
              </Button>
              
              :
     
              <IconButton aria-label="cerrar sesion" sx={{ minWidth: 0, my: ".88rem", mx: ".7rem", justifyContent: 'center', color:"#ff1744" }}>
                <LogoutIcon  /> 
              </IconButton>
          }
         
        </Box>
      </Box>
    </Drawer>

  )
}

export default NavHorizontal