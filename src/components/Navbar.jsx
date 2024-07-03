import { FaSearch, FaShoppingBag } from "react-icons/fa"
// import navLinks from "../data/navLinks"
import {NavLink} from "../utils/NavLink"

const Navbar = () => {
  return (
    <>
    <nav className=" w-[100%] h-[200px] bg-[#ffff]  shadow-xl flex  flex-col justify-between  px-6 py-6 overflow-hidden z-0">
        <div className="flex items-center mx-auto ">
        <div className="flex flex-row   mr-64  ">
   <img src="logo.webp" alt="" className=" w-20 h-20 object-cover flex flex-row"/>
   </div>
   <div className="flex flex-row items-center justify-between gap-8">
   {NavLink.map((curElem , index) => {  
        return (
        <div key={index} className="flex  items-center justify-between text-black ">
        <div className="flex  items-center justify-between gap-4">
            <a href="" className="flex items-center  gap-4 text-black font-medium">{curElem.label}</a>
            {/* <a href="" className="flex items-center  gap-4 text-black font-medium">{curElem.path}</a> */}

        </div>
       <div>
        <p className="flex items-center  gap-4 text-black font-medium">{curElem.icon}</p>
       </div>
        </div>
        )
      })}
      <div className="flex gap-6 items-center text-black  ">
        <FaShoppingBag/>
        <FaSearch/>
      </div>
   </div>
   </div>
    </nav>
    {/* <section>
      <WhyToChooseUs/>
    </section> */}
    </>
  )
}

export default Navbar
