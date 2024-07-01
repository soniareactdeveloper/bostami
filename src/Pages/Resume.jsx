import { FaSchool } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";
import Heading from '../Components/Heading'
import Text from '../Components/Text'
import Cart from "../Components/Cart";

const Resume = () => {
  return (
    <div>
      <div className="container">
        <div className='pt-[60px] px-20 bg-white rounded-[20px]'>
          {/* heading component */}
          <Heading heading='Resume'/>
          {/* text */}
          <div className="flex flex-wrap gap-[200px]">
            <div className="flex gap-[10px] mt-[-5px] pb-[20px]">
              <FaSchool className="text-[#fa5252] text-[30px]" />
              <Text text='Education'/>
            </div>
            <div className="flex gap-[10px] mt-[-5px] pb-[20px]">
              <IoBriefcaseOutline className="text-[#fa5252] text-[30px]" />
              <Text text='Experience'/>
            </div>
            <div className="flex gap-[10px] mt-[-5px] pb-[20px]">
              <FaAward className="text-[#fa5252] text-[30px]" />
              <Text text='Awards'/>
            </div>
          </div>
          {/* cart */}
         <div className="flex flex-wrap gap-5">
          <Cart cartColor="bg-[#fff4f4]" cartTextTwo="2021-2024"/>
          <Cart cartColor="bg-[#fff4f4]"/>
          <Cart cartColor="bg-[#fff4f4]"/>
          <Cart cartColor="bg-[#fff4f4]"/>
          <Cart cartColor="bg-[#fff4f4]"/>
          <Cart cartColor="bg-[#fff4f4]"/>
          <Cart cartColor="bg-[#fff4f4]"/>
          <Cart cartColor="bg-[#fff4f4]"/>
          <Cart cartColor="bg-[#fff4f4]"/>
         </div>

        </div>
      </div>
    </div>
  )
}

export default Resume