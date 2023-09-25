import Home from '../src/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Productos from '../src/pages/Productos';
import { Contacto } from '../src/pages/Contacto';
import DetalleProductos from '../src/pages/DetalleProductos'

function App() {
  return (
   <> 
    <Routes>
     <Route path='/' element={<Home />}> </Route>
     <Route path='/Productos' element={<Productos />}> </Route>
     <Route path='/Contacto' element={<Contacto />}> </Route>
     <Route path='/DetalleProductos/:id' element={<DetalleProductos />}> </Route>
     <Route path='/Carrito' element={<DetalleProductos />}> </Route>

   </Routes>
   
   </>  
  );
}

export default App;
