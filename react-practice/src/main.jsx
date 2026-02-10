import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
// import Useeffect1 from './Pages/Useeffect1'
// import UseEffect from './Pages/UseEffect'
import App from './App'
// import CRUD from './CRUD'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <App/>
 {/* <UseEffect/> */}
 {/* <Useeffect1/> */}
 {/* <CRUD/> */}
  </StrictMode>
)
