import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';



/* Buttons nav sections */

export const buttons_nav_products = [
    {name:"Crear Categoria" ,    icon : <AddIcon                    sx={{color:"#40c4ff"}}/> },
    {name:"Editar Precios" ,     icon : <BorderColorOutlinedIcon    sx={{color:"#40c4ff"}}/> },
    {name:"Carga masiva CSV" ,   icon : <UploadFileIcon             sx={{color:"#40c4ff"}}/> } ,
]



/* recibe un nombre, la funcion de abrir y el estado */
export const ButtonNavDesplegable = ({ nameIcon, handleSearch, openSearch }) => {

    return(
        <Button
            variant="contained"
            sx={{ bgcolor: "#11192a", fontSize: ".9rem", color: "#ffffff", fontWeight: "bold" , p:".6rem", px:"1.5rem"}}
            startIcon={openSearch ? <ExpandLess sx={{ color: "#40c4ff" }} /> : <ExpandMore sx={{ color: "#40c4ff" }} />}
            onClick={handleSearch}
        >
            {nameIcon}
      </Button>
    )

}


