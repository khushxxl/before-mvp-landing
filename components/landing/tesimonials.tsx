import React from "react";
import { motion } from "framer-motion";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

function Testimonials() {
  const testimonials = [
    {
      author: "John Smith",
      handle: "@johnsmith",
      content:
        "This validation service saved me months of development time. Highly recommend!",
      avatar:
        "https://pbs.twimg.com/profile_images/1820021257552773120/bgAQmFYe_400x400.jpg",
    },
    {
      author: "Sarah Johnson",
      handle: "@sarahj",
      content:
        "Got invaluable insights about my target market before writing a single line of code.",
      avatar:
        "https://pbs.twimg.com/profile_images/1820021257552773120/bgAQmFYe_400x400.jpg",
    },
  ];

  return (
    <div id="testimonials" className="max-w-7xl mx-auto w-full pt-24">
      <h1 className="text-center text-3xl font-bold">
        See what our clients are saying
      </h1>
      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 justify-center mt-20 lg:gap-x-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 w-[350px] md:w-[450px] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{testimonial.author}</h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {testimonial.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
