import Home from './Componentes/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Productos from './Componentes/pages/Productos';
import { Contacto } from './Componentes/pages/Contacto';
import DetalleProductos from './Componentes/pages/DetalleProductos'

function App() {
  return (
   <> 
    <Routes>
     <Route path='/' element={<Home />}> </Route>
     <Route path='/Productos' element={<Productos />}> </Route>
     <Route path='/Contacto' element={<Contacto />}> </Route>
     <Route path='/DetalleProductos' element={<DetalleProductos />}> </Route>
    
    
    
   </Routes>
   
   </>  
  );
}

export default App;
