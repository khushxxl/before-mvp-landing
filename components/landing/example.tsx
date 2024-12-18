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
} from "lucide-react";

function ExampleDemo() {
  const validationSteps = [
    {
      title: "Product Description",
      description:
        "Define your product's core features, target audience, and unique value proposition",
      icon: ClipboardList,
      delay: 0,
    },
    {
      title: "Market Analysis",
      description:
        "Comprehensive analysis of market size, trends, and competitive landscape",
      icon: BarChart2,
      delay: 0.2,
    },
    {
      title: "Customer Research",
      description:
        "In-depth understanding of customer needs, pain points, and preferences",
      icon: Users,
      delay: 0.4,
    },
    {
      title: "Business Model Validation",
      description:
        "Evaluate revenue streams, cost structure, and overall business viability",
      icon: Target,
      delay: 0.6,
    },
    {
      title: "Feasibility Studies",
      description:
        "Technical, operational, and financial feasibility assessment",
      icon: FileText,
      delay: 0.8,
    },
    {
      title: "Revenue Expectations",
      description: "Projected revenue models and financial forecasting",
      icon: DollarSign,
      delay: 1.0,
    },
    {
      title: "Actionable Insights",
      description:
        "Detailed recommendations and next steps for your business journey",
      icon: Lightbulb,
      delay: 1.2,
    },
  ];

  return (
    <div id="process" className="max-w-5xl mx-auto p-8 pt-24">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h1 className="text-3xl font-bold">Validation Process</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Our comprehensive approach to validating your business idea
          </p>
        </div>

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
