import Home from '../src/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Productos from '../src/pages/Productos';
import { Contacto } from '../src/pages/Contacto';
import DetalleProductos from '../src/pages/DetalleProductos';
import Checkout from '../src/pages/Checkout';
import Layout from './pages/Layout';

function App() {
  return (
   <> 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/Productos' element={<Productos />}> </Route>
        <Route path='/Contacto' element={<Contacto />}> </Route>
        <Route path='/DetalleProductos/:id' element={<DetalleProductos />}> </Route>
        <Route path='/Checkout' element={<Checkout />}> </Route>
      </Route>
   </Routes>
   
   </>  
  );
}

export default App;
