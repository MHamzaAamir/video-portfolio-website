import TestimonialCard from "./TestimonialCard";


const testimonials = [
  {name:"Lukas", designation:"Founder SAT MASTERCLASS" ,link:"https://www.youtube.com/embed/0rzJkZW7anE"},
  {name:"Tyler Lambers",designation:"CEO OASIS MEDIA SOLUTIONS",link:"https://www.youtube.com/embed/cnuCZqcfT6I"},
  {name:"Tony Martin",designation:"LIFESTYLE COACH",link:"https://www.youtube.com/embed/YUe883U18rc"},
]


const Testimonials = () => {
  return (
    <div id="testimonials" className="flex flex-col lg:flex-row  gap-10 justify-center items-center">
      {
        testimonials.map((testimonial,i) => (
          <TestimonialCard key={i} testimonial={testimonial} index={i} />
        ))
      }
    </div>
  )
}

export default Testimonials
