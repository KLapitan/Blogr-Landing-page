const BlogrLandingPage =() => {


return(


<main className="h-auto relative">

<section className="h-auto">

  {/* intro section */}
  <section className="relative h-140 lg:h-150 w-auto lg:w-full rounded-bl-[120px] bg-linear-to-br from-BGN-Orange-300 to-BGN-Red-550  overflow-hidden   mb-20">
  <div className="absolute inset-0  z-10 bg-[url('images/bg-pattern-intro-mobile.svg')]  w-full h-full overflow-hidden bg-fill bg-no-repeat bg-center flex justify-center items-center lg:bg-[url('images/bg-pattern-intro-desktop.svg')] lg:bg-fill  ">


{/* container of textheader */}
    <div className="gap-4 flex flex-col  lg:mt-28 ">
    
 
    <div className="flex flex-col items-center justify-center  text-NWhite w-full p-2 gap-2 z-20">
    <h2 className="font-Overpass font-semibold text-4xl text-center tracking-tight p-2 w-80  md:text-5xl md:w-full lg:text-6xl lg:w-full lg:tracking-tighter lg:scale-129">A modern publishing platform</h2>
    <p className="p-4 w-auto font-Ubuntu text-white/90  font-light text-center text-lg md:text-xl lg:text-xl">Grow your audience and build your online brand</p>
    </div>
  




    <div className="flex  z-30 gap-4 items-center justify-center font-Overpass font-bold mb-2 ">
    <button className=" rounded-full bg-NWhite text-BGN-Red-550 px-4 py-2 lg:px-5 lg:py-3 lg:text-lg lg:font-bold active:text-NWhite active:bg-neutral-100/40 cursor-pointer hover:bg-neutral-100/80">Start for Free</button>
    <button className=" rounded-full px-4 py-2  text-NWhite lg:px-6 lg:py-3 lg:text-lg active:bg-NWhite active:text-BGN-Red-550">Learn More</button>
    </div>
    </div>

  </div>


  </section>



  		{/* DEsign for future section , extensible editor , robustmanagement */}
  			<section className="h-auto lg:h-200 p-2 ">
    			<div className="flex flex-col items-center  lg:flex-row-reverse lg:relative  ">
							<h3 className="mb-10 mt-15 text-3xl font-Overpass text-PBlue-900 font-bold tracking-tight lg:absolute lg:top-10 lg:right-121 z-50 lg:text-4xl ">Designed for the future</h3>
						
						<img src="images/illustration-editor-mobile.svg" alt="editor-mobile"  className="w-full h-full lg:hidden"/>

						{/* images right */}
						<div className="lg:relative  lg:w-738 lg:h-screen lg:overflow-x-clip  lg:flex 	">
						<picture>
						<img src="images/illustration-editor-desktop.svg" alt="editor-desktop"  className="hidden  lg:flex w-full  h-auto lg:scale-115 object-contain  lg:absolute lg:mt-12	 lg:-right-49 z-40"/>
						
						</picture>
						</div>

						{/* container for large view point  */}
						<div className=" p-2 lg:ml-20 lg:w-auto lg:mt-36 h-auto  ">
									{/* extensible editor */}
            			<div className=" w-full  flex flex-col items-center p-2 gap-2 lg:h-64 lg:gap-0 lg:items-start  ">

                    		<span className="text-3xl p-3  tracking-tight font-Overpass text-center  w-64 text-PBlue-900 font-bold lg:text-left lg:w-auto lg:text-xl lg:p-0">Introducing an extensible editor</span>


                    			<p className="text-wrap text-center text-lg  font-Overpass p-2 mb-8 lg:text-left lg:tracking-wide lg:text-md lg:-ml-2 lg:w-155  mt-4 lg:text-NGray-600 ">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    			The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    			videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    			change the looks of a blog.</p>
            			</div>


																
                        {/* Robust content management */}
                      	<div className=" w-full  flex flex-col items-center p-2 gap-2  lg:items-start">
                      		<span className="text-3xl p-3  tracking-tight font-Overpass text-center  w-64 text-PBlue-900 font-bold lg:text-left lg:w-auto lg:text-xl lg:p-0 "> Robust content management</span>
                     			<p className="text-wrap text-center text-lg lg:text-md lg:text-left lg:text-NGray-600 lg:tracking-wide lg:w-150">Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                      			by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                        </div>

						</div>
    			</div>
		</section>


		<section className="h-auto  p-2 lg:p-0">
		
                      {/* state of the art container */}
                    	<div className=" relative  mt-2  p-2 lg:p-0 w-full h-auto ">  

                                {/* phone */}
							<picture><img src="images/illustration-phones.svg" alt="phone-picture" className="absolute left-4 w-80 h-80  z-20 md:hidden lg:hidden" /></picture> 
                        
							<picture><img src="images/illustration-phones.svg" alt="phone-picture" className="hidden absolute  lg:flex lg:left-26 lg:w-155 lg:h-170  lg:z-20 lg:-top-16"/></picture> 
                        
								{/*container for pictures and description  */}
                        	<div className="relative w-full h-132.5 mt-35   rounded-tr-[100px]  rounded-bl-[100px] bg-BGB-Purple-950 flex flex-col  overflow-hidden 
												
													lg:rounded-tr-[90px] lg:rounded-bl-[90px] lg:mt-5 lg:h-120 ">

								{/* circle div container */}

                            	<div className="absolute -top-30 h-auto w-full lg:-top-160 lg:-left-100 ">
                                  <picture> <img src="images/bg-pattern-circles.svg" alt="" className="w-full h-full scale-160 lg:scale-70 "/></picture>
								</div>
                            
                            	{/* description */}
								<div className=" w-auto p-2  flex flex-col gap-3 z-30 mt-45 md:p-2   lg:w-xl lg:absolute lg:left-190 ">
                            		<h2 className="text-NWhite text-3xl text-center font-Overpass font-bold tracking-wide lg:text-left  lg:flex lg:flex-row gap-1 lg:text-4xl lg:tracking-tight ">State of the Art <p className="tracking-normal lg:tracking-tight lg:text-4xl">Infrasctructure</p></h2>
                            		<p className="text-NWhite font-Ubuntu tracking-normal  text-center text-md lg:text-left lg:tracking-normal lg:text-md lg:w-lg  ">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.This ensures your site will load instantly, no matter where your readers are, keeping your site competitive</p>
                             	</div> 
                       		 </div>
                    	</div>







						{/* free,open, simple */}
						<div className="w-auto mt-7  flex flex-col gap-4 md:mt-20 lg:flex-row lg:min-h-screen lg:mb-26">
						<picture>
								<img src="images/illustration-laptop-mobile.svg" alt="laptop-mobile" className="lg:hidden md:place-self-center md:scale-140" />
						</picture>
						<picture>
								<img src="images/illustration-laptop-desktop.svg" alt="laptop-mobile" className="hidden lg:block lg:-ml-54 lg:scale-110 lg:mt-20" />
						</picture>
						
					{/* large view container 2 description */}

<div className="md:mt-20 lg:flex lg:flex-col  lg:w-auto lg:items-center lg:justify-center lg:gap-0 lg:-ml-20 lg:mt-20">
						<div className="flex flex-col gap-5 p-3 lg:w-xl ">
							<h3 className="text-PBlue-900 text-3xl text-center font-bold font-Overpass lg:text-left lg:text-2xl">Free,open,simple</h3>
							<p className="text-lg text-center text-NGray-600 tracking-normal w-auto lg:text-left lg:w-auto lg:tracking-normal">Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  							features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  							and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
						</div>

								{/* power tooling */}
							<div className=" w-full h-auto p-2 flex flex-col gap-3 mb-10 lg:w-xl">
								<h3 className="text-PBlue-900 text-3xl text-center font-bold font-Overpass mt-8 lg:text-left lg:text-2xl">Powerful tooling</h3>
								<p className="text-NGray-600 text-center font-Overpass tracking-normal text-lg lg:text-left"> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
							
							</div>
					</div>
</div>
		</section>


</section>
</main>

)

}

export default BlogrLandingPage