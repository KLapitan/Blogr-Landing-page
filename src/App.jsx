import BlogrLandingPage from "./Components/Blogr-Landing-Page"
import BlogrFooter from "./Components/Blogr-Footer"
import BlogrNav from "./Components/Blogr-Nav"

const App = () => {
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



return(
<>
{/* <BlogrNav link={Links}/> */}
<BlogrLandingPage/>
<BlogrFooter link={Links}/> 
</>
)
}
export default App