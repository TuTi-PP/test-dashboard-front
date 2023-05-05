import React  from 'react'
import CollapseLink from './linksSettings_collapse/CollapseLink';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

const LinksConfig = (props) => {
  
  return (
    <List>
      {props.links_nav_config.map((index, key) => (
        <ListItem key={key} disablePadding sx={{ display: 'block' }} >
            <CollapseLink 
              icon={index.icon} 
              name={index.name} 
              link={index.link}
              subLink={index.subLink} 
              open= {props.open}
              handleDrawerClose={props.handleDrawerClose}
            />
        </ListItem> 
      ))}
    </List>
  )
}

export default LinksConfig