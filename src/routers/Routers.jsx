import {Routes, Route , Navigate} from 'react-router-dom'

import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"
import ProductDetails from "../pages/ProductDetails"
import Signup from "../pages/Signup"

function Routers() {
  const user = localStorage.getItem("token")

  return <Routes>
    <Route path='/' element={<Navigate to='home'/>}/>
    <Route path='home' element={<Home/>}  />
    <Route path='/shop' element={user?<Shop/>:<Navigate replace to="/login"/>}/>
    {/* <Route path='/shop' element={<Navigate replace to="/login"/>}  /> */}
    <Route path='shop/:id' element={user?<ProductDetails/>:<Navigate replace to="/login"/>}  />
    <Route path='cart' element={<Cart/>}  />
    <Route path='checkout' element={<Checkout/>}  />
    <Route path='login' element={user?<Navigate to='/shop'/>:<Login/>}  />
    <Route path='signup' element={<Signup/>}  />
  </Routes>
}

export default Routers