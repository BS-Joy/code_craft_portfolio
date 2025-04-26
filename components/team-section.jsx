import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import sharif from "@/public/sharif.png";
import rakib from "@/public/rakib.png";
import zaman from "@/public/zaman.png";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Towhidul Islam",
      role: "Founder & Lead Developer",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/b533c8b5747a513c01acf35536cb81bf-1722809524442/fec8ab8b-89e3-4c0d-88b7-aa07d4c1596b.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sharif Hossain",
      role: "AI Engineer",
      image: sharif,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Md Rakibul Islam",
      role: "UI/UX Designer",
      image: rakib,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Zaman Sheikh",
      role: "Backend Developer",
      image: zaman,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  return (
    <section id="team" className="bg-gray-50 py-20 dark:bg-gray-900 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="text-purple-600 dark:text-purple-400">Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 md:text-lg">
            Meet the talented professionals behind CodeCraft's innovative AI
            solutions.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md transition-all rounded-md hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
            >
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="mb-4 text-purple-600 dark:text-purple-400">
                  {member.role}
                </p>
                {/* <div className="flex justify-center space-x-4">
                  <Link
                    href={member.social.twitter}
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.github}
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
