import React from "react"
import Home from "./Pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import Menu from "./Pages/Menu/Menu"
import Cart from "./Pages/Cart/Cart"


function App() {


  return (
    <>
      <div className="MainBody">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/restaurant/:resId" element={<Menu/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </div>
   </>
  )
}

export default App
