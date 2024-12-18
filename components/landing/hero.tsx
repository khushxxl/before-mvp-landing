import React from "react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import DotPattern from "../ui/dot-pattern";
import { AvatarCirclesDemo } from "../avatar-circles-demo";

function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center h-[80vh]   w-full"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className=" text-2xl md:text-5xl font-bold text-center"
      >
        Validate your idea before you
        <br />
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-orange-500 text-center text-white px-2 py-1 text-2xl md:text-4xl font-bold rounded-md"
      >
        write first line of your code
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-500 mt-5 text-center max-w-2xl"
      >
        We help you research about your idea before you build your MVP. Save
        time and resources by validating your concept first.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4 mt-8"
      >
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600"
          onClick={scrollToPricing}
        >
          Get Started
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" mt-12"
      >
        <AvatarCirclesDemo />
      </motion.div>
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.2}
        duration={2}
        repeatDelay={2}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] "
        )}
      />
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      /> */}
    </motion.div>
  );
}

export default Hero;
