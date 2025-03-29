import React from "react"
import { Route, Routes } from "react-router-dom"
import AdminLayout from "./pages/AdminLayout"
import Order from "./pages/Order"
import Product from "./pages/Product"
import AddProudct from "./pages/AddProudct"
import { Toaster } from "react-hot-toast"
import PageNoteFound from "./components/PageNoteFound"
import ProductUpdate from "./pages/ProductUpdate"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateRoute from "./route/PrivateRoute"
import DetailPage from "./components/DetailPage"

function App() {

  return (
    <>
   
      <Navbar/>
    <Routes>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
      {/* <Route path="/" element ={<Dashbord/>} /> */}
      <Route path="/" element={<AdminLayout/>}>
        <Route path="order"element ={ <PrivateRoute><Order/></PrivateRoute> }/>
        <Route path="" element ={<PrivateRoute><Product/></PrivateRoute>}/>
        <Route path="addproduct" element ={<PrivateRoute><AddProudct/></PrivateRoute> }/>
        <Route path="update/:id" element ={<PrivateRoute><ProductUpdate/></PrivateRoute> }/>
        <Route path="detailpage" element ={<PrivateRoute><DetailPage/></PrivateRoute> }/>
      </Route>

      <Route path="*" element={<PageNoteFound/>} />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
