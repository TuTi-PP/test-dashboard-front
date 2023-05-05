import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import NavBusqueda from '../navBusqueda/NavBusqueda';
import { ButtonNavDesplegable, buttons_nav_products } from '../../../assets/buttons/Buttons';


const NavSection = () => {

  const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <>
      <AppBar position="static"   sx={{display:"flex", boxShadow: "rgba(0, 0, 0, 0.01) 0px 14px 28px, rgba(0, 0, 0, 0.24) 0px 8px 10px" ,justifyContent:"space-between", gap:"1rem", flexDirection:"row", padding:".75rem 2rem", flexWrap:"nowrap",  alignItems:"center", borderRadius:"10px" , bgcolor:"#fefefe"}}>
          <Box sx={{display:"flex",gap:"2rem"}}>
            {
              buttons_nav_products.map((index,key)  => {
                return  <Button key={key} variant="contained"  sx={{ bgcolor:'#11192a', p:".6rem" , px:"1.5rem", fontSize:".9rem", color:"#ffffff", fontWeight:"bold"}} startIcon={index.icon}> 
                          {index.name}
                        </Button>
                })
            }
          </Box>
          <Box>

            <ButtonNavDesplegable  
                nameIcon="Buscar Productos"
                handleSearch={handleSearch}
                openSearch={openSearch}
            />

          </Box>
      </AppBar>
      
      {openSearch && <NavBusqueda />}
    </>
  )
}

export default NavSection