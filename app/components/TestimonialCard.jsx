

const TestimonialCard = ({ testimonial, index }) => {

    return (
        <div key={testimonial.name} className=" relative overflow-hidden transition-all duration-200 hover:scale-105 h-72 w-64 outline-1 outline-gray-900 p-3 flex flex-col justify-between rounded-xl select-none"
        >
            {/* <div className="bg-blue-600 blur-3xl h-20 w-20 absolute bottom-0 left-[50%] -translate-x-[50%]"></div> */}
            <iframe
                className="h-3/4"
                src={testimonial.link}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <div className="flex gap-1 flex-col">
                <div className="">- {testimonial.name}</div>
                <div className="italic text-sm text-gray-500">{testimonial.designation}</div>
            </div>

        </div>

    )
}

export default TestimonialCard
