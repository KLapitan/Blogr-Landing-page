const BlogrLandingPage =() => {


return(
<main className="h-auto relative">
<section className="h-auto">

  {/* intro section */}
  <section className="relative h-140 lg:h-screen w-auto  rounded-bl-[120px] bg-linear-to-br from-BGN-Orange-300 to-BGN-Red-550  overflow-hidden   mb-10">
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



  		{/* DEsign for future section , extensible editor , robustmanagement */}
  			<section className="h-auto p-2 border">
    			<div className="flex flex-col items-center ">
					<h3 className="mb-10 mt-15 text-3xl font-Overpass text-PBlue-900 font-bold tracking-tight">Designed for the future</h3>
						<picture><img src="images/illustration-editor-mobile.svg" alt="editor-mobile"  className="mb-2"/></picture>

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



    			</div>
		</section>

		<section className="h-auto border p-2">
		
                      {/* state of the art container */}
                    	<div className=" mt-2 p-2 w-full h-auto">  
                                {/* phone */}
							<picture><img src="images/illustration-phones.svg" alt="phone-picture" className="absolute left-4 w-80 h-80  z-20 " /></picture> 
                        
								{/*container for pictures and description  */}
                        	<div className="relative w-full h-132.5 mt-35  rounded-tr-[100px] rounded-bl-[100px] bg-BGB-Purple-950 flex flex-col  overflow-hidden">
								{/* circle div container */}
                            	<div className="absolute -top-30 h-auto w-full  ">
                                  <picture> <img src="images/bg-pattern-circles.svg" alt="" className="w-full h-full scale-160"/></picture>
								</div>
                            
                            	{/* description */}
								<div className=" w-auto p-3 flex flex-col gap-3 z-30 mt-45">
                            		<h2 className="text-NWhite text-3xl text-center font-Overpass font-bold tracking-wide">State of the Art <p className="tracking-normal">Infrasctructure</p></h2>
                            		<p className="text-NWhite font-Ubuntu tracking-normal text-center text-md">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.This ensures your site will load instantly, no matter where your readers are, keeping your site competitive</p>
                             	</div> 
                       		 </div>
                    	</div>

						{/* free,open, simple */}
						<div className="w-auto mt-7 border flex flex-col gap-4">
						<picture>
								<img src="images/illustration-laptop-mobile.svg" alt="" />
						</picture>
						
						<div className="flex flex-col gap-5 p-3">
							<h3 className="text-PBlue-900 text-3xl text-center font-bold font-Overpass">Free,open,simple</h3>
							<p className="text-lg text-center text-NGray-600 tracking-normal w-auto ">Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  							features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  							and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
						</div>
					</div>

								{/* power tooling */}
							<div className="border w-full h-auto p-2 flex flex-col gap-3 mb-10">
								<h3 className="text-PBlue-900 text-3xl text-center font-bold font-Overpass mt-8">Powerful tooling</h3>
								<p className="text-NGray-600 text-center font-Overpass tracking-normal text-lg"> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
							
							</div>
		</section>


</section>
</main>
)

}

export default BlogrLandingPage