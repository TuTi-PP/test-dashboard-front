import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LinksSections from './links/LinksSections';
import LinksSettings from './links/LinksSettings';
import { links_nav_config , links_nav_sections } from '../Access';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import NavHorizontalMobile from './navHorizontalMobile/NavHorizontalMobile';
import NavHorizontalDesktop from './navHorizontalDesktop/NavHorizontalDesktop';

const drawerWidth = 240;

export const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: '#11192a',
  overflowX: 'hidden',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
 
const NavHorizontal = ({ open, setOpen, isSmallerThan600, setIsSmallerThan600 }) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setIsSmallerThan600(window.innerWidth < theme.breakpoints.values.sm);
    setOpen(!isSmallerThan600);
  }, [theme.breakpoints.values.sm]);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    (!isSmallerThan600) ?
      
      <NavHorizontalDesktop 
        DrawerHeader = { DrawerHeader }
        Typography = { Typography }
        IconButton = { IconButton }
        Divider = { Divider }
        Box = { Box }
        LinksSections = { LinksSections }
        LinksSettings = { LinksSettings }
        Button = { Button }
        links_nav_sections = { links_nav_sections }
        links_nav_config = { links_nav_config }
        handleDrawerClose = { handleDrawerClose }
        LogoutIcon = { LogoutIcon }
        ChevronLeftIcon = { ChevronLeftIcon }
        open= { open }
      /> 

    :

      <NavHorizontalMobile 
        DrawerHeader = { DrawerHeader }
        Typography = { Typography }
        IconButton = { IconButton }
        Divider = { Divider }
        Box = { Box }
        LinksSections = { LinksSections }
        LinksSettings = { LinksSettings }
        Button = { Button }
        links_nav_sections = { links_nav_sections }
        links_nav_config = { links_nav_config }
        handleDrawerClose = { handleDrawerClose }
        LogoutIcon = { LogoutIcon }
        ChevronLeftIcon = { ChevronLeftIcon }
        drawerWidth = { drawerWidth }
        open= { open }
      />
  )
}

export default NavHorizontal;
