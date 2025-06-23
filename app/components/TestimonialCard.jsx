

const TestimonialCard = ({ testimonial, index }) => {

    return (
        <div key={testimonial.name} className="transition-all duration-200  hover:scale-105 h-80 w-56 lg:h-96 lg:w-72 outline-1 bg-[#202020] outline-gray-300 p-3 flex flex-col justify-between rounded-[3px] select-none"
        >
            <div className="italic">"{testimonial.description}"</div>
            <div>
                - {testimonial.name}
            </div>
        </div>
    )
}

export default TestimonialCard
