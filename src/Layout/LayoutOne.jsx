import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"


const LayoutOne = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default LayoutOne