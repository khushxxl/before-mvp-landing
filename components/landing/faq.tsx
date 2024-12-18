import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  const faqs = [
    {
      question: "What is Before MVP?",
      answer:
        "Before MVP is a service that helps entrepreneurs and developers validate their business ideas before investing time and resources into building a full product. We focus on research, market validation, and user feedback to ensure your concept has real potential.",
    },
    {
      question: "How does the validation process work?",
      answer:
        "Our validation process involves market research, competitor analysis, user interviews, and creating lightweight prototypes to test with real users. We help you gather concrete data to make informed decisions about your product direction.",
    },
    {
      question: "How long does the validation process take?",
      answer:
        "The typical validation process takes 2-4 weeks, depending on the complexity of your idea and the scope of research needed. We work efficiently to give you actionable insights as quickly as possible.",
    },
    {
      question: "What do I get at the end of the process?",
      answer:
        "You'll receive a comprehensive validation report including market analysis, user feedback data, recommended feature prioritization, and actionable next steps. This gives you a clear roadmap for moving forward with your idea.",
    },
    {
      question: "Why should I validate before building?",
      answer:
        "Validation before building helps avoid wasting time and resources on features users don't want. It typically saves months of development time and thousands of dollars in unnecessary costs.",
    },
  ];

  return (
    <div id="faq" className="max-w-4xl mx-auto w-full py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}

export default FAQ;
