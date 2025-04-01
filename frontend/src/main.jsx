import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {store} from './redux/store'
import {Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store = {store}>
  <BrowserRouter>
  <ToastContainer position="top-center" autoClose={1000}/>
    <App />
  </BrowserRouter>
  </Provider>
  </StrictMode>
)
