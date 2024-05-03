import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './About.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/About-us' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
