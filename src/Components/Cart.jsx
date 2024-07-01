

const Cart = ({cartIcon, cartHead, carttext,cartColor, cartTextTwo }) => {
  return (
    <div>
      <div className="pb-[30px]">
         <div className={`flex gap-5 pt-5 px-5 pb-[15px] ${cartColor} rounded-[12px]`}>
           <div className="icon w-[35px] h-[35px]">{cartIcon}</div>
           <div className="text">
            <h4 className="text-[22px] font-poppins font-medium text-black mb-[10px]">{cartHead}</h4>
            <p className="w-[190px] text-[16px] font-normal text-[#44566C] leading-[30px]">{carttext}</p>
            <p className="text-[14px] font-normal text-[#44566C] font-poppins">{cartTextTwo}</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Cart