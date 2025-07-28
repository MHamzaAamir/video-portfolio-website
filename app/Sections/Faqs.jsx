import FaqBox from "../components/FaqBox";
import Faq from "@/models/Faq";
import dbConnect from "@/lib/mongodb"; 

const Faqs = async () => {
    await dbConnect()

    const rawFaqs = await Faq.find({})

    const faqs = rawFaqs.map(faq => ({
        _id: faq._id.toString(),
        question: faq.question,
        answer: faq.answer
    }));

    return (
        <div id="faq" className="flex flex-col justify-center items-center py-24 gap-10">
            <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4'>Frequently <span className='text-blue-600 italic'>Asked</span> Questions</div>
            <div className="flex flex-col justify-center items-center w-[60%] max-w-[600px]">
                <FaqBox faqs={faqs} />
            </div>

        </div>
    )
}

export default Faqs
