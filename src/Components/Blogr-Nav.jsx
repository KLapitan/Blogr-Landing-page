
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

return(
<nav className="w-full flex border h-20 absolute top-12 z-30  lg:w-7xl lg:left-22 lg:shrink">
<section className=" flex f-grow flex-row justify-between items-center m-3 border w-full">

<div className="flex flex-row gap-24 md:gap-10 lg:gap-17 items-center border">
<picture>
<img src="images/logo.svg" alt="logo-picture" />
</picture>

  <ul className=" flex-row gap-10 hidden md:flex lg:flex">
  {link.map(item => (
  <li key={item.id} className="relative text-NWhite text-md font-Ubuntu font-bold">
  
  <button className="flex flex-row items-center gap-2" onClick={()=> handleActiveLinks(item.id)}>
  {item.links}

  <img src="images/icon-arrow-light.svg" alt="arrow-links" className={`transition-transform ${activeLinks === item.id ? "rotate-180" : ""}  `} />
  </button>


  {activeLinks === item.id && (
  <ul className="absolute bg-NWhite p-3 rounded-md flex flex-col gap-2">
  {item.sublinks.map(sublink => (
  <li className="text-sm border-b text-NGray-900">{sublink}</li>

  ))}
  </ul>

  
  
  )}


  </li>
  
  ))}</ul>



</div>


<div className="md:flex lg:flex flex-row gap-7 hidden ">
<button className="text-NWhite font-Ubuntu text-md">Login</button>
<button className="bg-NWhite text-BGN-Red-550 font-Ubuntu font-bold px-10 py-3 text-md rounded-full text-center">Sign Up</button>


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