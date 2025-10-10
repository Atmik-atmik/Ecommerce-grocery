import React from 'react'
import { Route , Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import Checkout from './pages/Checkout'
import AddAddress from './pages/AddAddress'
import MyOrder from './pages/MyOrder'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'

const App = () => {
  const adminPath = useLocation().pathname.includes("admin");
  return (
    <>
      <div>
       {!adminPath && <Navbar/>}
       <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/shop" element = {<Shop/>}/>
        <Route path = "/product/:id" element = {<ProductDetails/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/wishlist" element = {<WishList/>}/>
        <Route path = "/checkout" element = {<Checkout/>}/>
        <Route path = "/add-address" element = {<AddAddress/>}/>
        <Route path = "/my-order" element = {<MyOrder/>}/>
        <Route path = "/signup" element = {<SignUp/>}/>
        
       </Routes>
      </div>
    </>
  )
}

export default App
