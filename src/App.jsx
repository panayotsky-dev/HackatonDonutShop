import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import PaymentPage from './pages/PaymentPage'
import Preparation from './pages/Preparation'
import PickUp from './pages/PickUp' 
import Marble from "./assets/marble_magic.svg"
function App() {
  // const [count, setCount] = useState(0)

  return (
<Router>            
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/pickup" element={<PickUp/>} /> 
      </Routes>      
    </Router>
  )
}
if(window.location.pathname == '/preparation'){
  setTimeout(() => {
    window.location.pathname = '/pickup'
  }, 5000);
}

export default App

{/* <div className="App">
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" className="logo" alt="Vite logo" />
  </a>
  <a href="https://reactjs.org" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</div> */}
