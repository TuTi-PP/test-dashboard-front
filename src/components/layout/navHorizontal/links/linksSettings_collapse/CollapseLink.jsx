import React, {useState, useEffect } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom';

const CollapseLink = (props) => {
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    // Si la barra de navegación se minimiza (props.open cambia a false),
    // cerrar los componentes Collapse
    if (!props.open) {
      setOpenList(false);
    }
  }, [props.open]);

  const handleClick = () => {
    setOpenList(!openList);
  };

  const navigate = useNavigate();

  return (
    <>
      <ListItemButton onClick={() => {
          if (props.open) {
            handleClick();
          } else {
            navigate(props.link);
          }
        }}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: 'center' }}>
          {props.icon}
        </ListItemIcon>

        <ListItemText primary={props.name} disableTypography sx={{ opacity: props.open ? 1 : 0, fontWeight: '600', color:"#efefef" ,letterSpacing: '.2px', fontSize: '1.04rem', }} />
          {openList ? ( <ExpandLess sx={{ color: '#444444' }} /> ) : ( <ExpandMore sx={{ color: 'gray' }} /> )}
      </ListItemButton>

      {props.subLink.map((subLinkItem, key) => (
        <Collapse key={key} in={openList} timeout="auto" unmountOnExit onClick={props.handleDrawerClose}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 6, opacity: props.open ? 1 : 0 }}  onClick={() => { navigate(subLinkItem.link) }} >
              <ListItemIcon sx={{ minWidth: 0, mr: 2, justifyContent: 'center' }}>   {subLinkItem.icon}    </ListItemIcon>
              <ListItemText primary={subLinkItem.name} disableTypography sx={{   opacity: props.open ? 1 : 0, color:"#efefef",  fontWeight: '600',   fontSize: '.96rem', }}  />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
    </>
  );
};

export default CollapseLink