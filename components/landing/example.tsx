import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  BarChart2,
  Users,
  DollarSign,
  Lightbulb,
  FileText,
  Target,
  Code2,
  Clock,
  TrendingUp,
  Shield,
} from "lucide-react";

function ExampleDemo() {
  const validationSteps = [
    {
      title: "Describe your Idea",
      description:
        "Define your product's core features, target audience, and unique value proposition",
      icon: ClipboardList,
      delay: 0,
    },
    {
      title: "Get a detailed report in 3 days",
      description:
        "Receive a detailed report on your idea's market potential, user needs, and competitive landscape",
      icon: FileText,
      delay: 0.4,
    },
    {
      title: "Build without doubts or save 6 months on failed product",
      description: "Save 6 months on failed product and build without doubts",
      icon: Code2,
      delay: 1.2,
    },
  ];

  const benefits = [
    {
      title: "Research & Analysis",
      description:
        "We conduct thorough market research and competitor analysis to validate your business idea",
      icon: Clock,
      delay: 0.2,
    },
    {
      title: "Market Research",
      description:
        "We analyze market trends and competition to validate your target market and business opportunity",
      icon: TrendingUp,
      delay: 0.4,
    },
    {
      title: "Strategic Guidance",
      description:
        "Get a detailed validation report with actionable insights and recommended next steps",
      icon: Shield,
      delay: 0.6,
    },
  ];

  return (
    <div id="process" className="max-w-5xl mx-auto p-8 pt-24 space-y-16">
      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-8 text-center">
          What is Before MVP?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: benefit.delay }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className=" dark:bg-gray-800 rounded-lg  p-6">
        {/* <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-center">Validation Process</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
            Our comprehensive approach to validating your business idea
          </p>
        </div> */}

        <div className="space-y-6">
          {validationSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: step.delay }}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExampleDemo;
