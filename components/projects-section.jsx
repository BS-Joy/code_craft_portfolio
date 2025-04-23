import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-powered audio recording app",
      description: "CleverTalk is an AI-powered app that captures audio, converts speech to text, and organizes it efficiently. It offers real-time transcription, summaries, and searchable notes, with cloud syncing. Ideal for professionals, students, and content creators, it helps manage meetings, conversations, and personal reminders easily. ",
      image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/c06fa8c89c34bade6a515da316f76f8a-1742277575237/AI-powered%20audio%20recording%20app.png",
      tags: ["Smart Summaries", "High-Quality Recording", "AI Transcription"],
      link: "#",
    },
    {
      title: "Health & Fitness app",
      description:
        "Kardena is a smart Watch App – Your All-in-One Health & Fitness Companion Elevate your wellness journey with our cutting-edge Smart Watch App, designed to seamlessly integrate with your smartwatch and provide real-time health insights. Whether you're tracking your daily activity, monitoring vital health metrics, or setting personalized fitness goals, this app empowers you to take charge of your well-being effortlessly.",
      image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/c09cbf5fbc825c4a04f68a3750d3e11d-1742806343469/Fitness%20app.png",
      tags: ["Health", "Fitness", "Fitness Companion"],
      link: "#",
    },
    {
      title: "Currency Exchange App",
      description:
        "With Cashly, we’ve built a smart, secure, and user-friendly currency exchange app that travelers, investors, and global businesses can rely on. Real-time rates, instant conversions, a multi-currency wallet, and powerful analytics—all in one sleek platform. It’s everything global users need to manage and exchange money with confidence. ",
      image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/bc7819f521fa87eaf2493c455f46ee58-1742807407684/Currency%20Exchange%20or%20Forex%20Management%20App.png",
      tags: ["Cash", "Finance", "Real-time"],
      link: "#",
    },
    {
      title: "Medical booking app",
      description:
        "This user-friendly mobile app that allows patients to quickly book doctor appointments, access medical records, receive appointment reminders, and consult with healthcare professionals via video calls. Designed to simplify healthcare access, the app connects users with clinics, hospitals, and specialists anytime, anywhere.",
      image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/92e403cd61d9ca9a5f3e1ead4c6f89ab-1743055194192/Doctors.png",
      tags: ["Mobile App", "AI", "Health"],
      link: "#",
    },
    {
      title: "Umrah Guide App",
      description:
        "Umrah Guide & Connection – Your Ultimate Pilgrimage Companion Embark on your spiritual journey with confidence using Umrah Guide & Connection, the ultimate app designed to assist pilgrims at every step of their Umrah. Whether you're a first-time traveler or an experienced pilgrim, this app provides essential guidance, real-time support, and seamless connectivity with fellow travelers and service providers, ensuring a smooth and spiritually fulfilling experience.",
      image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/4b2c1feaea14d25da73157f912943484-1743055958434/Umrah%20Guide%20App.png",
      tags: ["Education", "ChatGPT", "Guidance"],
      link: "#",
    },
    {
      title: "Language learning app",
      description: "DianaDiaz is an immersive language learning app designed to build your fluency through real-time feedback, AI-powered practice, and interactive lessons. Whether you’re a beginner, intermediate, or advanced learner, DianaDiaz helps you master pronunciation, expand vocabulary, and gain the confidence to speak naturally. ",
      image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/5e98c8c8a74bfede81c681896638d63a-1743850588729/Language%20learning%20app%20.jpg",
      tags: ["Learn", "AI", "Real-time"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="bg-[#f8f9fb] py-20 dark:bg-gray-950 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>
          <p className="mb-16 text-gray-500 dark:text-gray-400 md:text-lg">
            A showcase of CodeCraft's recent AI development work and client success stories.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-gray-200 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
