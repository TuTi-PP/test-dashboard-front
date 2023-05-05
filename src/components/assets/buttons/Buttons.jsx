import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';


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




/* filters */

/* nombre de los filtros para la seccion productos  */
export const filters_nav_search = [
    {name:"Categoria" },
    {name:"Stock"     },
    {name:"Visible"   },
    {name:"Sku"       },
]


/* datos que recive el filtro de categorias en productos */
export const data_categorys = [
  {name:"Pizzas"      },
  {name:"Empanadas"   },
  {name:"Todas"       },
]

/* datos que recive el filtro de categorias en productos */
export const data_stock = [
  {name:"Con Stock"      },
  {name:"Sin Stock"   },
  {name:"Todos"       },
]


/* datos que recive el filtro de categorias en productos */
export const data_visible = [
  {name:"Productos visibles"      },
  {name:"Productos no visibles"   },
  {name:"Todos los productos"     },
]



/* Consumir datos del backend para los filtros. ejemplo: traer los datos de las categorias creadas por el usuario */


export const Filter_select = (props) => {
    const [filter, setFilter] = React.useState();

    const handleChange = (event) => {
      setFilter(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
       { !props.search ? 
          <FormControl fullWidth sx={{bgcolor:"#ffffff"}}  size="small">
              <InputLabel id="filter">{props.name}</InputLabel>
              <Select
                labelId="Option"
                id={props.name}
                value={filter}
                label= {props.name}
                onChange={handleChange}
              >
              
              { props.data_filters.map(index  => {
                return <MenuItem value={index.name} >{index.name}</MenuItem>
                })}
                    
              </Select>

            </FormControl>
          :

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: 'flex', alignItems: 'flex-end' , bgcolor:"#ffffff"}}>
            <TextField
                color="primary" 
                id={props.name}
                label={props.name}
                size="small"
                InputProps={{
                  endAdornment: (
                  <IconButton color="primary" aria-label={props.name} sx={{bgcolor:"#ffffff"}}>
                    <SearchIcon />
                  </IconButton>
                  ),
                }}
                variant="outlined"
              />
          </Box>
          
          }
      </Box>
    );

}