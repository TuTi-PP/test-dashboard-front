import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ShareIcon from '@mui/icons-material/Share';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BrushIcon from '@mui/icons-material/Brush';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

/* Sucursales Nav */

export const links_nav_branch =  [


]

/* Links Secciones */

export const links_nav_sections = [
    {name:"Reportes" ,      link : "./reportes",        icon : <EqualizerIcon              sx={{color:"#40c4ff"}} /> },
    {name:"Productos" ,     link : "./productos" ,      icon : <ViewInArIcon               sx={{color:"#40c4ff"}}/> },
    {name:"Pedidos" ,       link : "./pedidos" ,        icon : <ContentPasteIcon           sx={{color:"#40c4ff"}}/>} ,
    {name:"Envios" ,        link : "./envios" ,         icon : <MopedOutlinedIcon          sx={{color:"#40c4ff"}}/>},
    {name:"Proveedores" ,   link : "./proveedores" ,    icon : <LocalShippingOutlinedIcon  sx={{color:"#40c4ff"}}/>}

]

/* Links settings desplegables */

export const links_nav_config = [
    {name:"Mi Tienda", 
     link : "./miTienda/configuracion-de-tienda" , 
     icon : <StoreIcon sx={{color:"#40c4ff"}}/>, 
     subLink : [
        {name:"Configuración " ,   link : "./miTienda/configuracion-de-tienda",   icon : <SettingsSuggestIcon           sx={{ fontSize: 16,color:"#40c4ff" }}/>},
        {name:"Personalizacion" ,  link : "./miTienda/personalizacion" ,          icon : <BrushIcon                     sx={{ fontSize: 16,color:"#40c4ff" }}/>},
        {name:"Redes Sociales" ,   link : "./miTienda/redes-sociales" ,           icon : <ShareIcon                     sx={{ fontSize: 16,color:"#40c4ff" }}/>},
        {name:"Metodos de Pago" ,  link : "./miTienda/metodos-de-pagos" ,         icon : <PaymentsOutlinedIcon          sx={{ fontSize: 16,color:"#40c4ff" }}/>},
        {name:"Mi Plan" ,          link : "./miTienda/mi-plan" ,                  icon : <FormatListBulletedIcon        sx={{ fontSize: 16,color:"#40c4ff" }}/>},
        {name:"Apagar tienda" ,    link : "./miTienda/apagar-temporalmente" ,     icon : <HistoryToggleOffIcon          sx={{ fontSize: 16,color:"#40c4ff" }}/>},
        {name:"Dar de baja" ,      link : "./miTienda/baja" ,                     icon : <CreditCardOffOutlinedIcon     sx={{ fontSize: 16,color:"#40c4ff" }}/>}
     ]
    },
    {name:"Configuracion", 
     link : "./configuracion/cuenta" , 
     icon : <SettingsIcon sx={{color:"#40c4ff"}}/>,
     subLink : [
        {name:"Cuenta" ,      link : "./configuracion/cuenta",        icon : <ManageAccountsOutlinedIcon    sx={{ fontSize: 16,color:"#40c4ff" }}/> },
        {name:"Privacidad" ,  link : "./configuracion/privacidad" ,   icon : <LockOutlinedIcon              sx={{ fontSize: 16,color:"#40c4ff" }}/> },
        {name:"Ayuda" ,       link : "./configuracion/ayuda" ,        icon : <HelpOutlineIcon               sx={{ fontSize: 16,color:"#40c4ff" }}/>} ,
     ]
    },
]




