"use client";

import { CodeBlock } from "@/components/code-block";
import ExampleDemo from "@/components/landing/example";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/tesimonials";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/lib/check-envs";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { GithubIcon } from "lucide-react";

export default function Home() {
  const code_snippet = `git clone https://github.com/khushxxl/boilerplate-nextjs.git`;

  const openInVSCode = () => {
    const repoUrl = "https://github.com/khushxxl/boilerplate-nextjs";
    const vscodeUrl = `vscode://vscode.git/clone?url=${repoUrl}`;
    window.open(vscodeUrl, "_blank");
  };

  const openInCursor = () => {
    const repoUrl = "https://github.com/khushxxl/boilerplate-nextjs";
    const cursorUrl = `cursor://open?url=${repoUrl}`;
    window.open(cursorUrl, "_blank");
  };

  return (
    <div className="w-full">
      <Hero />
      <ExampleDemo />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
