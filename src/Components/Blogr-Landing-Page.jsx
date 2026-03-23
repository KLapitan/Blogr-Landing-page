const BlogrLandingPage =() => {
return(
<main className="h-auto">
<section className="h-auto">

  {/* intro section */}
  <section className="relative h-screen w-auto  rounded-bl-[120px] bg-linear-to-br from-BGN-Orange-300 to-BGN-Red-550  overflow-hidden   ">
  <div className="absolute inset-0 z-10 bg-[url('images/bg-pattern-intro-mobile.svg')] w-full h-full overflow-hidden bg-fill bg-no-repeat bg-center flex justify-center items-center ">

    <div className="gap-4 flex flex-col border">
    
 
    <div className="flex flex-col items-center justify-center  text-NWhite w-full p-2 gap-2 z-20">
    <h2 className="font-Overpass font-normal text-4xl text-center tracking-tight p-2 w-80 border ">A modern publishing platform</h2>
    <p className="p-4 w-auto font-Ubuntu text-white/90  font-light text-center text-lg">Grow your audience and build your online brand</p>
    </div>
  




    <div className="flex  z-30 gap-4 items-center justify-center font-Overpass font-bold mb-2 ">
    <button className="border rounded-full bg-NWhite text-BGN-Red-550 px-4 py-2">Start for Free</button>
    <button className="border rounded-full px-4 py-2 border-NWhite text-NWhite">Learn More</button>
    </div>
    </div>

  </div>


  </section>

  {/* DEsign for future section */}
  <section className="h-auto p-2">
    <div className="flex flex-col items-center ">

    <h3 className="mb-10 mt-15 text-3xl font-Overpass text-PBlue-900 font-bold tracking-tight">Designed for the future</h3>
  

      <picture>
        <img src="images/illustration-editor-mobile.svg" alt="editor-mobile"  className="mb-2"/>
      </picture>
      
{/* extensible editor */}
            <div className="border w-full  flex flex-col items-center p-2 gap-2 ">
                    <span className="text-3xl p-3  tracking-tight font-Overpass text-center border w-64 text-PBlue-900 font-bold ">Introducing an extensible editor</span>
                    <p className="text-wrap text-center text-lg p-2 mb-8">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.</p>
            </div>

                        {/* Robust content management */}
                      <div className="border w-full  flex flex-col items-center p-2 gap-2">
                      <span className="text-3xl p-3  tracking-tight font-Overpass text-center border w-64 text-PBlue-900 font-bold "> Robust content management</span>
                     <p className="text-wrap text-center text-lg p-2 mb-8">Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                      by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                          </div>



                    <div className="border mt-2 p-2 w-full h-auto">
                          
                          {/* space for the picture */}
                              <div className="mt-50 ">
                            
                              {/*container for picture and description  */}
                              <div className=" relative bg-BGB-Purple-900 w-auto h-auto mt-5 rounded-tr-[100px] rounded-bl-[100px] flex flex-col gap-2 items-center justify-center ">
                                {/*
                              
                              <picture>
                                  <img src="images/illustration-phones.svg" alt="phones-picture"  className=" absolute -top-40 z-40"/>
                               </picture> */}
                              
                                  <div className="h-90  mt-20 border p-2">
                                  <span className="text-3xl p-3  tracking-tight font-Overpass text-center border w-64 text-NWhite font-bold ">State of the Art Infastructure</span>
                    <p className="text-wrap text-center text-lg p-2 mb-8">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.</p>



                                  
                                  </div>
                              
                                   





                              </div> 
                          </div>
                        
                    </div>
    
    </div>
  
  
  
  </section>



</section>
</main>
)

}

export default BlogrLandingPage