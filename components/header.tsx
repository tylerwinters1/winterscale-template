import Link from "next/link"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-white via-[#5BC0EB]/5 to-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-[#5BC0EB] to-[#4A2FBD] bg-clip-text text-transparent">
              Winterscale Media
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium hover:text-[#5BC0EB] transition-colors">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#5BC0EB] transition-colors">
            Process
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#5BC0EB] transition-colors">
            Portfolio
          </Link>
          <Link href="#lead-form" className="text-sm font-medium hover:text-[#5BC0EB] transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex md:hidden">
          <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        <div className="hidden md:block">
          <Link
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-md bg-[#4A2FBD] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A2FBD]/90 transition-all"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  )
}
