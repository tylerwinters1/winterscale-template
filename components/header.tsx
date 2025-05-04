import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-[#5BC0EB] to-[#4A2FBD] bg-clip-text text-transparent">
              Winterscale Media
            </span>
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="/services" className="text-sm font-medium hover:text-[#5BC0EB] transition-colors">
            Services
          </Link>
          <Link href="/process" className="text-sm font-medium hover:text-[#5BC0EB] transition-colors">
            Process
          </Link>
          <Link href="/#lead-form" className="text-sm font-medium hover:text-[#5BC0EB] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>

        {/* Call-to-Action (Desktop Only) */}
        <div className="hidden md:block">
          <Link
            href="/#lead-form"
            className="inline-flex items-center justify-center rounded-md bg-[#4A2FBD] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A2FBD]/90 transition-all"
          >
            Book a Call
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow-md border-t">
          <nav className="flex flex-col gap-4">
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-[#5BC0EB]">
              Services
            </Link>
            <Link href="/process" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-[#5BC0EB]">
              Process
            </Link>
            <Link href="/#lead-form" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-[#5BC0EB]">
              Contact
            </Link>
            <Link
              href="/#lead-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-[#4A2FBD] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A2FBD]/90 transition-all"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}