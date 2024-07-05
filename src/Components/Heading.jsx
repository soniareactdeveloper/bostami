

const Heading = ({heading}) => {
  return (
    <>
      <div className="text mb-10 relative">
        <h1 className=" mb-[15px] text-[40px] font-roboto font-bold text-black ">{heading}<span className="absolute top-[50%] left-[22%] translate-y-[50%] w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-[5px] mb-[30px]"></span></h1>
      </div>
    </>
  )
}

export default Heading