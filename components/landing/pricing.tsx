"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const packages = [
    {
      name: "Basic",
      price: "$35",
      description: "Perfect for validating small business ideas",
      features: [
        "Market Size Analysis",
        "Basic Competitor Research",
        "Customer Persona Development",
        "1 Hour Consultation",
      ],
      link: "https://buy.stripe.com/test_9AQ7tR7D33va2d2fYY",
    },
    {
      name: "Pro",
      price: "$99",
      description: "Comprehensive validation for growing businesses",
      features: [
        "Everything in Basic",
        "Detailed Market Analysis",
        "Customer Survey (100 responses)",
        "Financial Projections",
        "3 Hours of Consultation",
      ],
    },
    {
      name: "Bundled Pro",
      price: "$149",
      description: "Basic + Pro + Complete Branding ",
      features: [
        "Everything in Professional",
        "In-depth Market Research",
        "Customer Survey (500 responses)",
        "Complete Business Model Analysis",
        "10 Hours of Consultation",
        "6 Months Support",
      ],
    },
  ];
  const router = useRouter();
  return (
    <motion.div
      id="pricing"
      className="max-w-7xl mx-auto py-24 px-4"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Pricing Options</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-200 flex flex-col justify-between dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-4xl font-bold mb-4">{pkg.price}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {pkg.description}
              </p>
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => {
                router.push(pkg?.link || "");
              }}
              className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Checkout
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Pricing;
