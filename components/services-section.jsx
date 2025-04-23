import { Bot, BrainCircuit, Code, Cpu, MessageSquare, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "AI Chatbot Development",
      description:
        "Custom chatbots built with the latest AI technologies to enhance customer engagement and automate support.",
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "ChatGPT Integration",
      description: "Seamless integration of OpenAI's ChatGPT into your existing platforms and applications.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "AI-Powered Mobile Apps",
      description: "Intelligent mobile applications that leverage AI to deliver personalized user experiences.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "Conversational UI Design",
      description: "Human-centered design for conversational interfaces that feel natural and intuitive.",
    },
    {
      icon: <Code className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed to address your specific business challenges and opportunities.",
    },
    {
      icon: <Cpu className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "Machine Learning Integration",
      description:
        "Expert implementation of machine learning models to power intelligent features in your applications.",
    },
  ]

  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-900 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="text-purple-600 dark:text-purple-400">Services</span>
          </h2>
          <p className="mb-16 text-gray-500 dark:text-gray-400 md:text-lg">
            CodeCraft's specialized AI development services to help businesses leverage the power of artificial
            intelligence.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-gray-200 bg-[#f8f9fb] transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
