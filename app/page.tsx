import { Testimonials } from "@/components/testimonials"
import { TrustBadges } from "@/components/trust-badges"
import { LeadForm } from "@/components/lead-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center overflow-hidden">
        {/* Creative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5BC0EB] via-white to-[#4A2FBD] opacity-10"></div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#5BC0EB]/30 blur-2xl"></div>

          {/* Purple circle */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#4A2FBD]/30 blur-2xl"></div>

          {/* Small blue circle */}
          <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[#5BC0EB]/40 blur-md"></div>

          {/* Geometric shapes */}
          <div className="absolute top-1/3 left-10 w-40 h-40 rounded-lg bg-[#5BC0EB]/20 rotate-12 blur-sm"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-lg bg-[#4A2FBD]/20 -rotate-12 blur-sm"></div>

          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        </div>

        {/* Content */}
        <div className="container max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Have Your Website Built in 24 Hours
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Get a high-converting website delivered in a day — risk-free, you don't pay until you see it.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-md bg-[#4A2FBD] px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-[#4A2FBD]/90 transition-all"
          >
            Book My Free 15-Minute Call
          </a>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-16 bg-gradient-to-r from-[#5BC0EB]/5 to-[#4A2FBD]/5">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Let's Build Your Website</h2>
          <LeadForm />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Footer */}
      <Footer />
    </div>
  )
}
