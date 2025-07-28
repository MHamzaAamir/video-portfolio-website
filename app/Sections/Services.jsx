
const Services = () => {
    return (
        <div id = "services" className="py-20 px-4 gap-10 flex flex-col items-center justify-center">
            <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4 mt-7'>Checkout the <span className='text-blue-600 italic'>Services</span> we provide</div>
            <div className="w-[80%] max-w-[1200px] flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="hover:scale-[102%] duration-200 relative overflow-hidden py-7 px-3 h-[210px] w-full md:w-1/2 flex flex-col rounded-2xl outline-1 outline-gray-900">
                        <div className="absolute top-0 -left-10 blur-3xl w-40 h-20 bg-blue-600 rounded-full"></div>
                        <div className="h-1/2 flex items-center justify-center">
                            <div className="text-2xl md:text-3xl font-bold text-center">Long Form Editing</div>
                        </div>
                        <div className="h-1/2 px-10">
                            <div className="text-xs sm:text-sm text-gray-300 text-center">We will both help you to create high rentantion content for youtube to take your brand on next level</div>
                        </div>
                    </div>
                    <div className="hover:scale-[102%] duration-200 relative overflow-hidden py-7 px-3 h-[210px] w-full md:w-1/2 flex flex-col rounded-2xl outline-1 outline-gray-900">
                        <div className="absolute top-[50%] md:top-0 -translate-y-[50%] md:-translate-y-[0%] -right-10 w-40 h-20 blur-3xl bg-blue-600 rounded-full"></div>
                        <div className="h-1/2 flex items-center justify-center">
                            <div className="text-2xl md:text-3xl font-bold text-center">Short Form Editing</div>
                        </div>
                        <div className="h-1/2 px-10">
                            <div className="text-xs sm:text-sm text-gray-300 text-center">We will both help you to create high rentantion reel for Instagram & Tiktok to take your brand on next level</div>
                        </div>
                    </div>
                </div>

                <div className="hover:scale-[102%] duration-200 relative overflow-hidden py-7 px-3 h-[210px] w-full flex flex-col rounded-2xl outline-1 outline-gray-900">
                    <div className="hidden md:flex absolute top-0 -right-10 blur-3xl w-40 h-20 bg-blue-600 rounded-full"></div>
                    <div className="absolute bottom-0 -left-10 blur-3xl w-40 h-20 bg-blue-600 rounded-full"></div>
                    <div className="h-1/2 flex items-center justify-center">
                        <div className="text-2xl md:text-3xl font-bold text-center">Video Sales Letter</div>
                    </div>
                    <div className="h-1/2 px-10">
                        <div className="text-xs sm:text-sm text-gray-300 text-center">We will help you create a high-quality Video Sales Letter that grabs attention, engages your audience, and boosts your sales.</div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Services
