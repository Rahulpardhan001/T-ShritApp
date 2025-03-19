import React from "react"
import { Route, Routes } from "react-router-dom"
import Dashbord from "./pages/Dashbord"
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
        <Route path="getproducts" element ={<PrivateRoute><Product/></PrivateRoute>}/>
        <Route path="addproduct" element ={<AddProudct/>}/>
        <Route path="update/:id" element ={<ProductUpdate/>}/>
      </Route>

      <Route path="*" element={<PageNoteFound/>} />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
