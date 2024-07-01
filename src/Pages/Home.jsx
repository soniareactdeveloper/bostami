import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import SocialBtn from "../Components/SocialBtn";



const Home = () => {
  return (
   <>
    <div className="container px-[15px] pb-[60px]">
       <div className="personal_info px-[30px] py-10 flex flex-wrap flex-col items-center">
          <div className="img mb-[21px]">
            <img className="w-[280px] h-[280px] rounded-full" src="images/personImg.png" alt="profile" />
          </div>
          <div className="info_content flex flex-col items-center flex-wrap">
            <h4><Link className="text-[26px] font-medium text-black mb-2"  to='#'>Monalisa Ashley</Link></h4>
            <span className="text-[14px] text-[#7b7b7b] font-poppins font-medium px-5 py-1 mb-[15px]">Ui/Ux Designer</span>
            {/* social button */}
          <div className="flex flex-wrap gap-[17px] mb-[30px]">
            <SocialBtn iconLink='https://www.facebook.com/reg/' icons={<FaFacebookF className="text-[#1773ea] hover:text-white"/>}/>
            <SocialBtn iconLink="https://x.com/i/flow/login?mx=2" icons={<FaTwitter className="text-[#1c9cea] hover:text-[white]"/>}/>
            <SocialBtn iconLink="https://www.instagram.com/" icons={<FaInstagram className="text-[#e12a72] hover:text-[white]"/>}/>
            <SocialBtn iconLink="https://bd.linkedin.com/" icons={<FaLinkedinIn className="text-[#144679] hover:text-white"/>}/>
          </div> 
            <div className="infoBtn ">
              <Link className="flex justify-center items-center gap-[5px] px-[30px] py-3 text-[18px] text-[#F3F6F6] font-poppins font-normal bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:-translate-y-1 hover:ease-in hover:duration-300  border-transparent border-[1px] border-solid rounded-[30px]" to='#'><FaDownload /> <span>Download Cv</span></Link>
            </div>
          </div>
       </div>
    </div>
    
   </>
  )
}

export default Home