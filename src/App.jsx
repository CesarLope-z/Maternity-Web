import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from "./layouts/AuthLayout";

import Principal from "./pages/Principal";

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>

          <Route index element={<Principal/>} />
          
          {/* <Route path='guias' element={<Guias/>} />
          <Route path='leyes' element={<Leyes/>} />
          <Route path='almacenamiento' element={<Almacenamiento/>} />
          <Route path='foro' element={<Foro/>} /> */}
          
          {/* guias leyes almacenamiento foro */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
