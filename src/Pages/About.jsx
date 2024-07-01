import Heading from "../Components/Heading"
import { MdPhoneIphone } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="bostami_page pt-[60px] px-20 bg-white rounded-[20px]">
          {/* heading component */}
          <Heading heading='About Me'/>
          <div className="main flex flex-wrap mb-[40px]">
            <div className="img">
             <img className="w-[263px] h-[400px] rounded-[30px] pb-[80px] px-[12px] " src="public/images/parsonimg_two.png" alt="profile" />
            </div>
            <div className="about_content px-3">
                   {/* about */}
              <div>
                <h4 className="text-[26px] text-black font-poppins font-medium mb-[11px]">Who Am I?</h4>
                <p className="w-[600px] text-[16px] text-[#44566c] font-poppins font-normal mb-[16px]">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                <p className="w-[600px] text-[16px] text-[#44566c] font-poppins font-normal mb-[16px]">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
              </div>
              {/* contact */}
              <div className="py-[20px]">
                <h3 className="mb-[15px] text-[28px] font-poppins font-medium">Personal Info</h3>
                <div className="w-[500px] flex flex-wrap justify-between pr-3">
                  {/* phone */}
                   <div className="phone flex flex-wrap gap-[10px] py-[10px]">
                    <div className="icon w-[44px] h-[44px] bg-[#ffffff] shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,0.38)] rounded-lg flex justify-center items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"><MdPhoneIphone className="text-[22px] font-black text-[#e93b81]" /></div>
                    <div className="text">
                      <span className="block text-[12px] font-poppins font-normal mb-[3px] text-[#44566c]">Phone</span>
                      <p className="text-[14px] font-poppins font-normal text-black">+123 456 7890</p>
                    </div>
                   </div>
                   {/* email */}
                   <div className=" email flex flex-wrap gap-[10px] py-[10px]">
                    <div className="icon w-[44px] h-[44px] bg-[#ffffff] shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,0.38)] rounded-lg flex justify-center items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">< FaEnvelopeOpenText className="text-[22px] font-black text-[#6AB5B9]" /></div>
                    <div className="text">
                      <span className="block text-[12px] font-poppins font-normal mb-[3px] text-[#44566c]">Email</span>
                      <p className="text-[14px] font-poppins font-normal text-black">Example@Mail.Com</p>
                    </div>
                   </div>
                   {/* location */}
                   <div className=" flex flex-wrap gap-[10px] py-[10px]">
                    <div className="icon w-[44px] h-[44px] bg-[#ffffff] shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,0.38)] rounded-lg flex justify-center items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">< FaLocationDot className="text-[22px] font-black text-[#fd7590]" /></div>
                    <div className="text">
                      <span className="block text-[12px] font-poppins font-normal mb-[3px] text-[#44566c]">Location</span>
                      <p className="text-[14px] font-poppins font-normal text-black">Hong Kong China</p>
                    </div>
                   </div>
                   {/* Birthday */}
                   <div className=" flex flex-wrap gap-[10px] py-[10px] pr-[50px]">
                    <div className="icon w-[44px] h-[44px] bg-[#ffffff] shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,0.38)] rounded-lg flex justify-center items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">< SlCalender className="text-[22px] font-black text-[#c17ceb]" /></div>
                    <div className="text">
                      <span className="block text-[12px] font-poppins font-normal mb-[3px] text-[#44566c]">Birthday</span>
                      <p className="text-[14px] font-poppins font-normal text-black">May 27, 1990</p>
                    </div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About