/* eslint-disable react/prop-types */
import { useEffect } from "react"
import HeaderCartButton from "./HeaderCartButton"

function Header(props) {
  
  
  return (
    <header className="h-16  text-white shadow-lg z-10 bg-red-600 flex flex-row justify-between px-20  items-center">
      <h1 className="text-3xl font-bold">ReactMeals</h1>
       <HeaderCartButton  setCartIsShown={props.setCartIsShown}/>
    </header>
  )
}

export default Header
