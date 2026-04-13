const  BlogrFooter = ({link}) => {


return (
<footer className="h-auto">
<section className="h-auto  w-full bg-BGB-Purple-950 rounded-tr-[90px] flex flex-col items-center justify-center lg:items-start lg:justify-start gap-14 lg:flex-row lg:gap-7 ">

  <div className=" w-auto lg:w-sm flex items-center justify-center mt-13 lg:mt-20">
    <picture>
      <img src="images/logo.svg" alt="logo" className="lg:scale-150" />
    </picture>
  </div>

    <div className="mb-10  lg:mt-20 lg:w-auto">
    <ul className="flex flex-col gap-6 p-2 lg:flex-row lg:justify-evenly lg:w-3xl lg:gap-39 ">
      {link.map(link => (
       <li key={link.id} className="text-NWhite font-Overpass font-bold text-center text-md mb-2 lg:text-left ">{link.links}
        {link.sublinks && link.sublinks.length > 0 && (
        <ul className="flex flex-col gap-1 mt-3 lg:mt-5 ">
       {link.sublinks.map((sublink,index)=> (
        <li key={index} className="text-NWhite font-normal trackting-wide text-md text-center font-Overpass lg:mt-2 lg:text-sm lg:text-left hover:cursor-pointer hover:underline">{sublink}</li>
       ))}
        
        </ul>
        )}
       
       
       </li> 
      
      ))}
    </ul>
    </div>



</section>



</footer>
)
}

export default BlogrFooter