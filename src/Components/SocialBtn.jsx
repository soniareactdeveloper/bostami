import { Link } from "react-router-dom"


const SocialBtn = ({icons,iconLink}) => {
  return (
    <div>
      <Link to={iconLink} className="w-10 h-10 bg-[#f3f6f6] text-[20px] flex items-center justify-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white">
       {icons}
      </Link>

    </div>
  )
}

export default SocialBtn