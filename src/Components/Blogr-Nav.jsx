
import { useEffect, useState } from "react";
import NavModal from "./Nav-modal";
const BlogrNav =({link}) => {

  const [showLinks,setShowLinks]=useState(false)

  const [activeLinks,setActiveLinks] =useState(null)
  

const handleShowLinks =() => {
setShowLinks(prev => !prev)
}


const handleActiveLinks = (id) => {
setActiveLinks(prev => (prev == id ? null : id))

}

useEffect(() => {
  const handleEscape = (event) => {
    if(event.key === "Escape"){
      setShowLinks(false)
    }

  }
 document.addEventListener("keydown", handleEscape)
  return () => {
   document.removeEventListener("keydown", handleEscape)
  }
}, [])


useEffect(() => {
  const handleSublinkResize= () => {
  if(window.innerWidth <= 1024)
    setActiveLinks(null)
  }

    window.addEventListener("resize", handleSublinkResize)
    return () => {
    window.removeEventListener("resize", handleSublinkResize)
    }
},[])

return(
<nav className="w-full flex  h-20 absolute top-6 lg:top-13 z-30  lg:w-7xl lg:left-32 lg:shrink">
<section className=" flex  flex-row justify-between items-center m-3  w-full">

<div className="flex flex-row gap-24 md:gap-10 lg:gap-17 items-center  ml-2">
<picture>
<img src="images/logo.svg" alt="logo-picture" />
</picture>

  <ul className=" flex-row gap-10 hidden md:flex lg:flex">
  {link.map(item => (
  <li key={item.id} className="relative text-NWhite text-md font-Ubuntu font-bold">
  
  <button className="flex flex-row items-center gap-2  hover:underline" onClick={()=> handleActiveLinks(item.id)}>
  {item.links}

  <img src="images/icon-arrow-light.svg" alt="arrow-links" className={`transition-transform ${activeLinks === item.id ? "rotate-180" : ""}  `} />
  </button>


  {activeLinks === item.id && (
  <ul className="absolute bg-NWhite p-4 mt-5  w-auto h-auto -ml-4 rounded-md flex flex-col justify-end   shadow-lg shadow-NGray-900  lg:p-6 gap-2">
  {item.sublinks.map(sublink => (
  <li className="text-md    text-NGray-600 hover:text-NGray-900 hover:cursor-pointer font-Overpass  ">{sublink}</li>

  ))}
  </ul>

  
  
  )}


  </li>
  
  ))}</ul>



</div>


<div className="md:flex lg:flex flex-row gap-7 hidden ">
<button className="text-NWhite font-Ubuntu text-md cursor-pointer hover:underline">Login</button>
<button className="bg-NWhite text-BGN-Red-550 font-Ubuntu font-bold px-10 py-3 text-md rounded-full text-center active:bg-BGN-Red-550/40 active:text-NWhite cursor-pointer">Sign Up</button>


</div>



{/* md lg hidden */}
<div className="relative md:hidden lg:hidden"> 
<button  onClick={handleShowLinks}>
<img src={`${showLinks ? "images/icon-close.svg" : "images/icon-hamburger.svg"}`} alt="hamburger-nav"   />
</button>



{showLinks && (
<NavModal link={link}/>

)}

</div>
</section>
</nav>


)


}
export default BlogrNav;