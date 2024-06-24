import { Link, NavLink } from "react-router-dom"
import { RxHome } from "react-icons/rx";
import { LiaIdCardSolid } from "react-icons/lia";
import { RiFileUserLine } from "react-icons/ri";
import { BiBriefcase } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";
import { BsMoon } from "react-icons/bs";

const Navbar = () => {
  return (
   <> 
    <nav>
      <div className="container pt-[30px] mb-[30px]">
        <div className="main p-5 flex flex-wrap justify-between">
            <div className="logo">
              <Link to='#'><img className="w-[150px] h-[32px]" src="images/logo.png" alt="logo"/></Link>
            </div>
            <div className="menu flex flex-wrap">
              <ul className="flex flex-wrap gap-4 font-poppins font-medium">
                <li><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] text-white h-10" : "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-[#fff] text-[13px] text-[#44566C] h-10 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white" }><RxHome  className="text-xl "/>Home</NavLink></li>

                <li><NavLink to="/about" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] text-white h-10" : "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-[#fff] text-[13px] text-[#44566C] h-10 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white" }><LiaIdCardSolid  className="text-xl "/>About</NavLink></li>

                <li><NavLink to="/resume" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] text-white h-10" : "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-[#fff] text-[13px] text-[#44566C] h-10 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white" }><RiFileUserLine  className="text-xl "/>Resume</NavLink></li>

                <li><NavLink to="/work" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] text-white h-10" : "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-[#fff] text-[13px] text-[#44566C] h-10 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white" }><BiBriefcase  className="text-xl "/>Works</NavLink></li>

                <li><NavLink to="/blog" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] text-white h-10" : "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-[#fff] text-[13px] text-[#44566C] h-10 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white" }><FaRegNewspaper className="text-xl " />Blogs</NavLink></li>
                
                <li><NavLink to="/contact" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] text-white h-10" : "px-[19px] rounded-lg flex justify-center items-center gap-2 bg-[#fff] text-[13px] text-[#44566C] h-10 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white" }><FaRegAddressBook className="text-xl " />Contact</NavLink></li>
              </ul>
              <div className="menuBtn ml-[30px] flex justify-center items-center">
                <div className="icon w-[45px] h-[45px] text-[22px] bg-white flex justify-center items-center rounded-3xl text-[#44566C] shadow-6xl hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white">
                  <BsMoon />
                </div>
              </div>
            </div>
            
        </div>
      </div>
    </nav>
  
   </>
    
  )
}

export default Navbar 