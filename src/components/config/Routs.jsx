import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from '../layout/Layout'
import Loading from '../assets/Loading'

const Reports = lazy(() => import("../sections/reports/Reports"))
const Products = lazy(() => import("../sections/products/Products"))
const Orders = lazy(() => import("../sections/orders/Orders"))
const Shipping = lazy(() => import("../sections/shipping/Shipping"))
const MiStore = lazy(() => import("../sections/miStore/MiStore"))
const Settings = lazy(() => import("../sections/reports/Reports"))
const Proveedores = lazy(() => import("../sections/proveedores/Proveedores"))






const Routs = () => {
  return (
      <Routes>
          <Route element={<Layout/>}>
            <Route  path="/reportes"        element={  <Suspense fallback={<Loading/>}>   <Reports  />   </Suspense>} />
            <Route  path="/productos"       element={  <Suspense fallback={<Loading/>}>   <Products />   </Suspense>} />
            <Route  path="/pedidos"         element={  <Suspense fallback={<Loading/>}>   <Orders   />   </Suspense>} />
            <Route  path="/envios"          element={  <Suspense fallback={<Loading/>}>   <Shipping />   </Suspense>} />
            <Route  path="/proveedores"     element={  <Suspense fallback={<Loading/>}>   <Proveedores />   </Suspense>} />

           
            <Route  path="/miTienda"                            element={  <Suspense fallback={<Loading/>}>   <MiStore  />   </Suspense>} />
            <Route  path="/miTienda/configuracion-de-tienda"    element={  <Suspense fallback={<Loading/>}>   <MiStore  />   </Suspense>} />
            <Route  path="/miTienda/personalizacion"            element={  <Suspense fallback={<Loading/>}>   <MiStore  />   </Suspense>} />
            <Route  path="/miTienda/redes-sociales"             element={  <Suspense fallback={<Loading/>}>   <MiStore  />   </Suspense>} />
            <Route  path="/miTienda/metodos-de-pagos"           element={  <Suspense fallback={<Loading/>}>   <MiStore  />   </Suspense>} />
            <Route  path="/miTienda/mi-plan"                    element={  <Suspense fallback={<Loading/>}>   <MiStore  />   </Suspense>} />
            <Route  path="/miTienda/apagar-temporalmente"       element={  <Suspense fallback={<Loading/>}>   <MiStore  />   </Suspense>} />
            <Route  path="/miTienda/baja"                       element={  <Suspense fallback={<Loading/>}>   <MiStore  />   </Suspense>} />

           
            <Route  path="/configuracion"                element={  <Suspense fallback={<Loading/>}>   <Settings />   </Suspense>} />
            <Route  path="/configuracion/cuenta"         element={  <Suspense fallback={<Loading/>}>   <Settings />   </Suspense>} />
            <Route  path="/configuracion/privacidad"     element={  <Suspense fallback={<Loading/>}>   <Settings />   </Suspense>} />
            <Route  path="/configuracion/ayuda"          element={  <Suspense fallback={<Loading/>}>   <Settings />   </Suspense>} />

            <Route  path="/*"   element={  <Suspense fallback={<Loading/>}>   <Reports  />   </Suspense>} />
          </Route>
      </Routes>

  )
}

export default Routs
