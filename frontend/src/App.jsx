import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import SinglePage from './components/SinglePage'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Wishlist from './pages/wishlist'
import { useSelector } from 'react-redux'
import ChangePassword from './components/ChangePassword'
import SearchResults from './components/SearchResults'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  // const { token } = useSelector((state) => state.auth);
 const location = useLocation()
  return (
   <>
  <Header/>
  {/* <Header/> */}
  <Routes>
  <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}  />
  {/* <Route path='/me' element={<Home/>}/> */}
  <Route path='/product/:id' element={<ProtectedRoute><SinglePage/></ProtectedRoute>}  />
  <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}  />
  <Route path='/wishlist' element={<ProtectedRoute><Wishlist/></ProtectedRoute>}  />
  <Route path='/changepassword' element={<ProtectedRoute><ChangePassword/></ProtectedRoute>}  />
  <Route path="/search" element={<SearchResults/>} /> 

   <Route path='/signup' element={<Signup/>} /> 
   <Route path='/login' element={<Login/>} /> 
   <Route path='*' element={<Error/>} /> 

      </Routes>
      {location.pathname === '/cart' || location.pathname === '/wishlist' ?"" : <Footer />}

   </>
  )
}

export default App
