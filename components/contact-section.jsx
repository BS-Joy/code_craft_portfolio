"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-purple-600 py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-medium text-purple-200 mb-4">
            Are you ready?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Interested to collaborate?
          </h2>
          <p className="text-2xl md:text-3xl text-white mb-10">
            Let's connect.
          </p>

          <Button
            className="bg-purple-900 hover:bg-purple-900/80 text-white font-medium text-base px-6 py-6 h-auto rounded-full"
            onClick={() =>
              window.open("https://www.fiverr.com/code_craf", "_blank")
            }
          >
            Visit Our Fiverr Profile to Collaborate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
