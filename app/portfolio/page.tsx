import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#5BC0EB]/10 via-white to-[#4A2FBD]/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#5BC0EB]/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#4A2FBD]/10 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 mb-8">Explore our recent projects, all delivered in 24 hours</p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fitness Studio Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fitness Studio</h3>
                <p className="text-gray-600 mb-4">
                  A modern, responsive website for a local fitness studio with class scheduling and membership
                  information.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Responsive
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Booking System
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    SEO Optimized
                  </span>
                </div>
                <a href="#" className="inline-flex items-center text-[#5BC0EB] hover:text-[#4A2FBD] transition-colors">
                  View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Restaurant Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fine Dining Restaurant</h3>
                <p className="text-gray-600 mb-4">
                  An elegant website for a high-end restaurant featuring online reservations and a digital menu.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Reservation System
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Digital Menu
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Gallery</span>
                </div>
                <a href="#" className="inline-flex items-center text-[#5BC0EB] hover:text-[#4A2FBD] transition-colors">
                  View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Law Firm Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Law Firm</h3>
                <p className="text-gray-600 mb-4">
                  A professional website for a law firm with practice areas, attorney profiles, and contact forms.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Professional
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Lead Generation
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Team Profiles
                  </span>
                </div>
                <a href="#" className="inline-flex items-center text-[#5BC0EB] hover:text-[#4A2FBD] transition-colors">
                  View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="E-commerce Store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Boutique E-commerce</h3>
                <p className="text-gray-600 mb-4">
                  A stylish online store for a boutique clothing brand with product catalog and secure checkout.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    E-commerce
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Product Catalog
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Secure Checkout
                  </span>
                </div>
                <a href="#" className="inline-flex items-center text-[#5BC0EB] hover:text-[#4A2FBD] transition-colors">
                  View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Real Estate Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Real Estate Agency</h3>
                <p className="text-gray-600 mb-4">
                  A feature-rich website for a real estate agency with property listings and agent profiles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Property Listings
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Search Functionality
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Contact Forms
                  </span>
                </div>
                <a href="#" className="inline-flex items-center text-[#5BC0EB] hover:text-[#4A2FBD] transition-colors">
                  View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Consulting Firm Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Business Consulting</h3>
                <p className="text-gray-600 mb-4">
                  A professional website for a business consulting firm with service details and case studies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Corporate
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Service Pages
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Testimonials
                  </span>
                </div>
                <a href="#" className="inline-flex items-center text-[#5BC0EB] hover:text-[#4A2FBD] transition-colors">
                  View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#5BC0EB]/10 to-[#4A2FBD]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Your Own 24-Hour Website?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your free 15-minute discovery call today and join our satisfied clients.
            </p>
            <Link
              href="/#lead-form"
              className="inline-flex items-center justify-center rounded-md bg-[#4A2FBD] px-8 py-4 text-lg font-medium text-white hover:bg-[#4A2FBD]/90 transition-all"
            >
              Book My Free 15-Minute Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
