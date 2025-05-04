import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, MessageSquare, Zap, CheckCircle, Palette } from "lucide-react"

export default function ProcessPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our 24-Hour Website Process</h1>
            <p className="text-xl text-gray-600 mb-8">
              How we deliver high-converting websites in just 24 hours without sacrificing quality
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-[#5BC0EB]/20 text-[#5BC0EB]">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">1. Discovery Call</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We start with a focused 15-minute call to understand your business, goals, and website needs. This
                    helps us gather all the essential information to create a website that perfectly represents your
                    brand.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="font-semibold mb-2">What to prepare:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Your business goals and target audience</li>
                      <li>Any existing brand assets (logo, colors, etc.)</li>
                      <li>Examples of websites you like</li>
                      <li>Content you want to include (or we can help create it)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-[#4A2FBD]/20 text-[#4A2FBD]">
                  <Palette className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">2. Design & Development</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our expert team gets to work immediately after the discovery call. We design and develop your
                    website in parallel using our proven framework that allows for rapid development without sacrificing
                    quality or customization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h3 className="font-semibold mb-2">Design Phase:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Custom design based on your brand</li>
                        <li>Mobile-first responsive approach</li>
                        <li>Conversion-focused layouts</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h3 className="font-semibold mb-2">Development Phase:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Clean, optimized code</li>
                        <li>SEO best practices built-in</li>
                        <li>Fast loading speeds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-[#5BC0EB]/20 text-[#5BC0EB]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">3. Review & Approval</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Within 24 hours of our initial call, we'll present your completed website for review. You'll have
                    the opportunity to see your site in action and request any minor adjustments before final approval.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="font-semibold mb-2">What's included:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Complete website preview</li>
                      <li>One round of revisions if needed</li>
                      <li>Mobile and desktop testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-[#4A2FBD]/20 text-[#4A2FBD]">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">4. Launch & Support</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Once approved, we'll launch your website and ensure everything is working perfectly. We'll also
                    provide you with access to your site and basic training on how to make simple updates.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-8">
                    <h3 className="font-semibold mb-2">Post-launch support:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>7 days of technical support</li>
                      <li>Basic analytics setup</li>
                      <li>Optional maintenance plans available</li>
                    </ul>
                  </div>
                  <div className="bg-[#4A2FBD]/5 p-6 rounded-lg border border-[#4A2FBD]/10">
                    <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
                    <p className="mb-4">
                      Book your free 15-minute discovery call and have your website built in 24 hours.
                    </p>
                    <Link
                      href="/#lead-form"
                      className="inline-flex items-center justify-center rounded-md bg-[#4A2FBD] px-6 py-3 text-base font-medium text-white hover:bg-[#4A2FBD]/90 transition-all"
                    >
                      Book My Free Call <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-r from-[#5BC0EB]/5 to-[#4A2FBD]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">24-Hour Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* Hour 0 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                    <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                      <h3 className="font-bold">Hour 0</h3>
                      <p>Discovery call completed, project begins</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#5BC0EB] border-4 border-white shadow"></div>
                  <div className="pl-12 md:pl-8 md:w-1/2"></div>
                </div>

                {/* Hour 4 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0 md:order-1">
                    <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                      <h3 className="font-bold">Hour 4</h3>
                      <p>Design concepts finalized</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#5BC0EB] border-4 border-white shadow"></div>
                  <div className="pl-12 md:pl-8 md:w-1/2 md:order-0"></div>
                </div>

                {/* Hour 12 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                    <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                      <h3 className="font-bold">Hour 12</h3>
                      <p>Development 50% complete</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#5BC0EB] border-4 border-white shadow"></div>
                  <div className="pl-12 md:pl-8 md:w-1/2"></div>
                </div>

                {/* Hour 20 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0 md:order-1">
                    <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                      <h3 className="font-bold">Hour 20</h3>
                      <p>Development complete, internal QA begins</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#5BC0EB] border-4 border-white shadow"></div>
                  <div className="pl-12 md:pl-8 md:w-1/2 md:order-0"></div>
                </div>

                {/* Hour 24 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                    <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                      <h3 className="font-bold">Hour 24</h3>
                      <p>Website delivered for client review</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#4A2FBD] border-4 border-white shadow"></div>
                  <div className="pl-12 md:pl-8 md:w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
