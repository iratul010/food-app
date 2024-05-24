import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import Cart from "../components/Cart/Cart"
import { useState } from "react"

function MainLayouts() {
  const [cartIsShown,setCartIsShown] = useState(false);

  return (
    <div>
    { cartIsShown&& <Cart onShowCart={setCartIsShown}/>}
      <Header onShowCart = {setCartIsShown} cartIsShown={cartIsShown}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayouts
