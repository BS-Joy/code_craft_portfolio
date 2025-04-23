import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-900 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Get in <span className="text-purple-600 dark:text-purple-400">Touch</span>
          </h2>
          <p className="mb-16 text-gray-500 dark:text-gray-400 md:text-lg">
            Have a project in mind? Let's discuss how CodeCraft can help bring your AI vision to life.
          </p>
        </div>

        <div className="grid gap-10 justify-items-center self-center">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="mt-1 h-5 w-5 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400">techtitaans@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="mt-1 h-5 w-5 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400">+880 1632-594860</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="mt-1 h-5 w-5 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-500 dark:text-gray-400">House - 14, Main Road, Block - A, Banasree, Rampura, Dhaka - 1219. Dhaka, 1219, BD</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/*<Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Input id="email" type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input id="subject" placeholder="Subject" required />
                </div>
                <div className="space-y-2">
                  <Textarea id="message" placeholder="Your Message" className="min-h-[120px]" required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
