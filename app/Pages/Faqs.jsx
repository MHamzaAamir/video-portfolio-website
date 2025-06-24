"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase for a full refund.",
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, our support team is available 24/7 via chat and email.",
    },
    {
        question: "How long does delivery take?",
        answer: "Standard delivery usually takes 3-5 business days depending on your location.",
    },
    {
        question: "Can I change or cancel my order?",
        answer: "Yes, you can change or cancel your order within 12 hours of placing it.",
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide. Shipping fees may vary.",
    },
];

const Faqs = () => {
    const [openIndexes, setOpenIndexes] = useState(Array(faqs.length).fill(false));
    const toggleFAQ = (index) => {
        setOpenIndexes((prev) =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };


    return (
        <div id="faq" className="flex flex-col justify-center items-center py-24 gap-10">
            <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4'>Frequently <span className='text-blue-600 italic'>Asked</span> Questions</div>
            <div className="flex flex-col justify-center items-center w-[60%] max-w-[600px]">
            {
                faqs.map((faq, i) => (
                    <div onClick={() => toggleFAQ(i)} key={i} className="w-full px-4 py-4 outline-1 outline-gray-900 cursor-pointer select-none">
                        <div>Q. {faq.question}</div>
                        <AnimatePresence initial={false}>
                            {openIndexes[i] && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-2">
                                        A. {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                ))
            }
            </div>

        </div>
    )
}

export default Faqs
