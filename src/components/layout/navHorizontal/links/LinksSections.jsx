import React from 'react';
import {useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const LinksSections = (props) => {
    const navigate = useNavigate()

  return (
    <List>
        {props.links_nav_sections.map((index, key) => (
            <ListItem key={key} disablePadding sx={{ display: 'block'}} onClick={() => {
                props.handleDrawerClose()
                navigate(index.link);}}>
                <ListItemButton color='#ff5252' sx={{ minHeight: 48, justifyContent: props.open ? 'initial' : 'center', px: 2.5,}} >
                    <ListItemIcon sx={{ minWidth: 0, mr: props.open ? 3 : 'auto', justifyContent: 'center',}}>
                        { index.icon}
                    </ListItemIcon>
                    <ListItemText primary={index.name} disableTypography  sx={{ opacity: props.open ? 1 : 0 , color:"#efefef", fontWeight:"600", letterSpacing:".2px", fontSize:"1.04rem"}} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
  )
}

export default LinksSections