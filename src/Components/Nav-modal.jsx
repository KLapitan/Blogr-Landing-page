import { useState } from "react"

const NavModal = ({link}) => {

const [activeNavItem,setActiveNavItem]=useState(null)

const handleSubLinks = (id) => {
setActiveNavItem(prev => (prev === id ? null : id) )
}

return (
<div className="absolute -left-75 top-10 w-82.5 bg-NWhite h-auto rounded-sm p-2 flex flex-col gap-2 shadow-lg">
  <ul className="flex flex-col gap-5 items-center   mt-2 h-auto p-3   ">
    {link.map(item => (
    <li key={item.id} className="w-full text-center  place-items-center text-PBlue-900 font-Overpass text-xl font-bold ">
    
    <button className={`flex flex-row items-center gap-2 ${activeNavItem === item.id ? "text-PBlue-900/70" : " text-PBlue-900"}`} onClick={()=> handleSubLinks(item.id)}>
    
    {item.links}
      <img src="images/icon-arrow-dark.svg" alt="arow" className={`transition-transform ${activeNavItem === item.id ? "rotate-180" : ""}`} />
    
    </button>
   {activeNavItem === item.id && (
   <>
     
      <ul className="flex flex-col gap-1 bg-NGray-600/10   w-full items-center justify-center rounded-md p-3 text-sm tracking-wide  mt-3 py-4">
        {item.sublinks.map((sublink,index) => (
        <li key={index} className="font-Overpass font-bold text-PBlue-900/70 mb-2 ">{sublink}</li>
        ))}
      
      </ul>
   </>
   
   )}
    
    
    </li>
    
    ))}
  
  </ul>

  <div className="border-t border-NGray-600/30  h-40 flex flex-col items-center justify-center gap-3 p-2 w-72.5 ml-3">

    <button className="text-PBlue-900 font-Overpass font-bold text-lg mt-3 hover:underline">Login</button>
    <button className="rounded-full bg-linear-to-r from-BGN-Orange-300 to-BGN-Red-550 text-NWhite px-11 py-3 font-Overpass font-bold mb-3 hover:underline">Sign up</button>
  </div>

</div>
)
}
export default NavModal 