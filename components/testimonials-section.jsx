"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import maxllef from "@/public/maxllef.webp";
import defaultdemo from "@/public/default.png";

const defaultImage =
  "https://images.unsplash.com/photo-1715615685666-882710b534f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "aydtube",
      location: "United Kingdom",
      text: "Well, what can I say? I’ve had some very bad experiences on Fiver with unprofessional people stating they can do a professional job and they do not deliver what was promised, but this team went above and beyond my expectations I would highly recommend Shovon and his team they did a very professional job for my company which is going to generate us massive revenue",
      rating: 5,
      image: maxllef,
    },
    {
      name: "maxilef",
      location: "United States",
      text: "Shovon and his team are so helpful and they are very passionate about their work. You can trust you are in good hands with Shovon and his team as they want to see you succeed and are happy to help, answer any questions, and make any changes.",
      rating: 5,
      image: defaultdemo,
    },
    {
      name: "davisdebard",
      location: "United States",
      text: "Shovon and his team were exceptional. They took great care to produce a difficult website to my specifications. We had many meetings throughout the development effort which solidified the direction of the site. I feel confident they will support the site further as we move into production.",
      rating: 5,
      image: defaultdemo,
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gray-50 py-20 dark:bg-gray-900 md:py-28"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Client{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Reviews
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 md:text-lg">
            See what our clients have to say about working with us.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-md dark:bg-gray-800"
            >
              <Image
                src={testimonial?.image || defaultImage}
                alt={testimonial?.name || "profile"}
                width={100}
                height={100}
                className="rounded-full ml-4 mt-4 size-16"
              />
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-900"
            onClick={() =>
              window.open("https://www.fiverr.com/code_craf/reviews", "_blank")
            }
          >
            See All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
