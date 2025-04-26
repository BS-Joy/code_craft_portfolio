"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code, Cpu, MessageSquare, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  // Handle scroll to section
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // h-16 = 64px from Navbar
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-[#f8f9fb] dark:bg-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-purple-600/20 bg-purple-50 px-3 py-1 text-sm text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400">
              <Zap className="mr-1 h-3.5 w-3.5" />
              AI-Powered Development
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                AI Solutions by{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  CodeCraft
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Specialized AI development services for chatbots, GPT
                integrations, and intelligent mobile applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800"
                onClick={(e) => router.push("https://www.fiverr.com/code_craf")}
              >
                Check my fiverr profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {/* <Button
                variant="outline"
                onClick={(e) => handleScroll(e, "contact")}
              >
                Contact Me
              </Button> */}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Bot className="mr-1 h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>AI Chatbots</span>
              </div>
              <div className="flex items-center">
                <Code className="mr-1 h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>GPT Integration</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="mr-1 h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center">
                <Cpu className="mr-1 h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>Neural Networks</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 opacity-75 blur-xl"></div>
              <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-br from-purple-500 to-purple-400 p-1 shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-950"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/b533c8b5747a513c01acf35536cb81bf-1722809524442/fec8ab8b-89e3-4c0d-88b7-aa07d4c1596b.jpg"
                    alt="AI Developer"
                    className="h-[300px] w-[300px] rounded-full object-cover"
                  />
                </div>
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-purple-500 p-1 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-950">
                    <Bot className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-6 h-12 w-12 rounded-full bg-purple-500 p-1 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-950">
                    <Cpu className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
