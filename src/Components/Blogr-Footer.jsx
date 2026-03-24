const Links =[{

    id:0,
    links:"Product",
    sublinks:["Overview", "Pricing", "Marketplace","Features","Integrations" ]
},{
    id:1,
    links:"Company",
    sublinks:["About","Team","Blog","Careers"]

},
{
  id:2,
  links:"Connect",
  sublinks:["Contact","Newsletter" , "LinkedIn"]

}]

const  BlogrFooter = () => {


return (
<footer className="h-auto">
<section className="h-auto border w-full bg-BGB-Purple-950 rounded-tr-[90px] flex flex-col items-center justify-center gap-14">
    <picture>
      <img src="images/logo.svg" alt="logo" className="mt-13" />
    </picture>

    <div className="mb-10">
    <ul className="flex flex-col gap-6 p-2 ">
      {Links.map(link => (
       <li key={link.id} className="text-NWhite font-Overpass font-bold text-center text-md mb-2">{link.links}
        {link.sublinks && link.sublinks.length > 0 && (
        <ul className="flex flex-col gap-1 mt-3 ">
       {link.sublinks.map((sublink,index)=> (
        <li key={index} className="text-NWhite font-normal trackting-wide text-md text-center font-Overpass">{sublink}</li>
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