import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"

function MainLayouts() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayouts
