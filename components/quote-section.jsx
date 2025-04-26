"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="bg-purple-600 py-16 dark:bg-purple-800">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Hire Me</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Looking for an expert AI developer for your next project? I specialize
          in chatbots, GPT integration, and intelligent mobile applications.
        </p>
        <Button
          className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-white dark:text-purple-600 dark:hover:bg-gray-100 text-base px-6 py-6 h-auto"
          onClick={() =>
            window.open("https://www.fiverr.com/code_craf", "_blank")
          }
        >
          Hire Me
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
