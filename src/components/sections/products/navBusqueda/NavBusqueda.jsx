import React  from 'react'
import AppBar from '@mui/material/AppBar';
import { Box} from '@mui/material';
import { Filter_select } from '../../../assets/buttons/Buttons';
import { data_categorys,  data_stock, data_visible } from '../../../assets/buttons/Buttons';

const NavBusqueda = () => {
    return (
        <AppBar position="static"   sx={{display:"flex", boxShadow: "rgba(0, 0, 0, 0.01) 0px 14px 28px, rgba(0, 0, 0, 0.24) 0px 8px 10px" ,justifyContent:"space-between", gap:"1rem", flexDirection:"row", padding:".75rem 2rem", flexWrap:"nowrap",  alignItems:"center", bgcolor:"white ", borderRadius:"10px", mt:".5rem"}}> 

          <Box sx={{display:"flex", flexDirection:"row" ,gap:"2rem"}}>
            <Filter_select  name = "Buscar Producto"  search= {true} />
            <Filter_select  data_filters={data_categorys} name = "Categoria" />
            <Filter_select  data_filters={data_stock} name = "Stock" />
            <Filter_select  data_filters={data_visible} name = "Visible" />
            <Filter_select  name = "SKU"  search= {true} />
          </Box>
        </AppBar>
  )
}

export default NavBusqueda