

const TestimonialCard = ({ testimonial, index }) => {

    return (
        <div key={testimonial.name} className=" relative overflow-hidden transition-all duration-200 hover:scale-105 h-80 w-56 lg:h-96 lg:w-72 outline-1 outline-gray-900 p-3 flex flex-col justify-between rounded-xl select-none"
        >
            <div className="bg-blue-600 blur-3xl h-20 w-20 absolute bottom-0 left-[50%] -translate-x-[50%]"></div>
            <div className="italic">"{testimonial.description}"</div>
            <div>
                - {testimonial.name}
            </div>
        </div>
    )
}

export default TestimonialCard
