import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, ArrowRight, X } from "lucide-react"

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Web Design Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect package for your business needs, all delivered in just 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Services Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-r from-[#5BC0EB]/80 to-[#5BC0EB] p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Basic Website</h2>
                <p className="opacity-90">Perfect for small businesses and startups</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">$297</div>
                  <p className="text-gray-500">One-time payment</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 5 pages (Home, About, Services, Contact, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mobile responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Contact form with email notifications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Social media integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Google Maps integration</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">Custom animations</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">Advanced lead capture</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">CRM integration</span>
                  </li>
                </ul>
                <Link
                  href="/#lead-form"
                  className="block w-full py-3 px-4 bg-[#5BC0EB] hover:bg-[#5BC0EB]/90 text-white text-center font-medium rounded-md transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Advanced Package */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl relative">
              <div className="absolute top-4 right-4 bg-[#4A2FBD] text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="bg-gradient-to-r from-[#4A2FBD]/80 to-[#4A2FBD] p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Advanced Website</h2>
                <p className="opacity-90">For businesses ready to maximize online growth</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">$597</div>
                  <p className="text-gray-500">One-time payment</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 10 pages with custom layouts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced contact forms with conditional logic</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Social media integration with feeds</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Google Maps with custom styling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom animations and interactions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced lead capture with multi-step forms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>CRM integration (GoHighLevel, etc.)</span>
                  </li>
                </ul>
                <Link
                  href="/#lead-form"
                  className="block w-full py-3 px-4 bg-[#4A2FBD] hover:bg-[#4A2FBD]/90 text-white text-center font-medium rounded-md transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What's Included in Every Website</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#5BC0EB]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#5BC0EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24-Hour Delivery</h3>
              <p className="text-gray-600">
                We build and deliver your complete website in just 24 hours, so you can start generating leads
                immediately.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#4A2FBD]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4A2FBD]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built with the latest security standards and hosted on reliable servers with 99.9% uptime guarantee.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#5BC0EB]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#5BC0EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Loading</h3>
              <p className="text-gray-600">
                Optimized for speed with efficient code and compressed images to ensure visitors don't bounce due to
                slow loading.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#4A2FBD]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4A2FBD]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Responsive</h3>
              <p className="text-gray-600">
                Looks perfect on all devices from smartphones to desktops, ensuring you never lose a visitor.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#5BC0EB]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#5BC0EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
              <p className="text-gray-600">
                Tailored to your brand with custom colors, typography, and imagery that reflects your business identity.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#4A2FBD]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4A2FBD]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">30-Day Support</h3>
              <p className="text-gray-600">
                We don't disappear after delivery. Enjoy 30 days of support for any questions or minor adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Our streamlined process gets you from concept to live website in just 24 hours
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center mb-12">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                  <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                    <h3 className="font-bold text-lg mb-2">1. Discovery Call</h3>
                    <p className="text-gray-600">
                      We'll have a focused 15-minute call to understand your business and website needs.
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#5BC0EB] border-4 border-white shadow"></div>
                <div className="pl-12 md:pl-8 md:w-1/2"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center mb-12">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0 md:order-1">
                  <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                    <h3 className="font-bold text-lg mb-2">2. Design & Development</h3>
                    <p className="text-gray-600">
                      Our team immediately starts designing and developing your custom website.
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#5BC0EB] border-4 border-white shadow"></div>
                <div className="pl-12 md:pl-8 md:w-1/2 md:order-0"></div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center mb-12">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                  <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                    <h3 className="font-bold text-lg mb-2">3. Review & Approval</h3>
                    <p className="text-gray-600">
                      Within 24 hours, we'll present your completed website for your review and approval.
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#5BC0EB] border-4 border-white shadow"></div>
                <div className="pl-12 md:pl-8 md:w-1/2"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0 md:order-1">
                  <div className="bg-white shadow-md rounded-lg p-4 md:max-w-xs w-full">
                    <h3 className="font-bold text-lg mb-2">4. Launch & Support</h3>
                    <p className="text-gray-600">
                      Once approved, we'll launch your site and provide support to ensure everything runs smoothly.
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#4A2FBD] border-4 border-white shadow"></div>
                <div className="pl-12 md:pl-8 md:w-1/2 md:order-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {/* Question 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How can you build a website so quickly?</h3>
                <p className="text-gray-600">
                  We've developed a streamlined process and use a framework that allows for rapid development without
                  sacrificing quality. Our team is specialized in fast turnarounds and works efficiently to deliver
                  exceptional results in 24 hours.
                </p>
              </div>

              {/* Question 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Will my website be unique or use templates?</h3>
                <p className="text-gray-600">
                  While we use our proven framework as a foundation, every website we create is custom-designed for your
                  specific business. We don't use generic templates - your site will be uniquely yours with custom
                  colors, layouts, and content.
                </p>
              </div>

              {/* Question 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What if I need changes after the website is delivered?</h3>
                <p className="text-gray-600">
                  We include one round of revisions with every package. After delivery, you'll have the opportunity to
                  request minor adjustments. For more substantial changes, we offer affordable maintenance packages.
                </p>
              </div>

              {/* Question 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Do I need to provide content for my website?</h3>
                <p className="text-gray-600">
                  While it's helpful if you can provide content, we can work with minimal input from you. During our
                  discovery call, we'll gather the essential information needed, and our team can help create
                  professional content for your site.
                </p>
              </div>

              {/* Question 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What happens after my website is launched?</h3>
                <p className="text-gray-600">
                  After launch, we provide 30 days of support to address any questions or minor adjustments. We also
                  offer optional maintenance packages if you'd like ongoing support, updates, and improvements to your
                  site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#5BC0EB]/10 to-[#4A2FBD]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Your Website in 24 Hours?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your free 15-minute discovery call today and take the first step toward your new website.
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
