import TestimonialCard from "./TestimonialCard";


const testimonials = [
  {name:"Hamza",description:"Working with Premier Edits was a game-changer for our brand. Their attention to detail and storytelling through editing brought our product launch video to life. We've seen a 40% boost in engagement since we published it!"},
  {name:"Hazkeel",description:"I’ve hired many editors in the past, but Premier Edits truly stands out. Fast turnaround, cinematic quality, and a deep understanding of our vision. Every frame felt intentional. Highly recommended!"},
  {name:"Daniyal",description:"From raw footage to final cut, the process was smooth and professional. Premier Edits made our corporate training videos actually enjoyable to watch — no small feat. We’ll definitely be coming back."},
]


const Testimonials = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-10 justify-center items-center">
      {
        testimonials.map((testimonial,i) => (
          <TestimonialCard key={i} testimonial={testimonial} index={i} />
        ))
      }
    </div>
  )
}

export default Testimonials
