"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll to section
  const handleScroll = (e, href) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = 64; // h-16 = 64px
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - navbarHeight,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  // Handle initial scroll for hash on page load
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = 64;
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - navbarHeight,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              // aria-current={
              //   item.href === window.location.hash ? "page" : undefined
              // }
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="default"
            onClick={() => router.push("https://www.fiverr.com/code_craf")}
            className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800 rounded-md py-2 px-3"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="container px-4 md:px-6">
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                // aria-current={item.href === window.location.hash ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800">
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
