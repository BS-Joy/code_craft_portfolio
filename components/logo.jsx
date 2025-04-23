import Link from "next/link"
import { Code, Cpu } from "lucide-react"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative">
        <Cpu className="h-7 w-7 text-purple-600 dark:text-purple-400" />
        <Code className="absolute -bottom-1 -right-1 h-4 w-4 text-purple-600 dark:text-purple-400" />
      </div>
      <span className="font-bold text-xl text-gray-900 dark:text-white">
        Code<span className="text-purple-600 dark:text-purple-400">Craft</span>
      </span>
    </Link>
  )
}
