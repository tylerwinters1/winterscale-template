import { Clock, Smartphone, Code, Zap } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#5BC0EB]/10 to-[#4A2FBD]/10">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Winterscale Media</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Badge 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#5BC0EB]/20 mb-4">
              <Clock className="w-8 h-8 text-[#5BC0EB]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your website built and launched in just 24 hours, not weeks or months.</p>
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#4A2FBD]/20 mb-4">
              <Smartphone className="w-8 h-8 text-[#4A2FBD]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-600">Websites that look great and function perfectly on all devices.</p>
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#5BC0EB]/20 mb-4">
              <Code className="w-8 h-8 text-[#5BC0EB]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Built</h3>
            <p className="text-gray-600">Tailored to your specific business needs, not a generic template.</p>
          </div>

          {/* Badge 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#4A2FBD]/20 mb-4">
              <Zap className="w-8 h-8 text-[#4A2FBD]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Conversion Focused</h3>
            <p className="text-gray-600">Designed to convert visitors into leads and customers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
