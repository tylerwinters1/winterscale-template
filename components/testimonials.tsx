export function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#5BC0EB]/10">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 - Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#5BC0EB] hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#5BC0EB]/20 rounded-full mr-4 flex items-center justify-center text-[#5BC0EB] font-bold">
                JD
              </div>
              <div>
                <h4 className="font-semibold">Client Name</h4>
                <p className="text-sm text-gray-500">Company Name</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Winterscale Media delivered our website in just 24 hours, and it exceeded all our expectations. The
              design is beautiful and our conversion rate has already improved."
            </p>
          </div>

          {/* Testimonial 2 - Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#4A2FBD] hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4A2FBD]/20 rounded-full mr-4 flex items-center justify-center text-[#4A2FBD] font-bold">
                AS
              </div>
              <div>
                <h4 className="font-semibold">Client Name</h4>
                <p className="text-sm text-gray-500">Company Name</p>
              </div>
            </div>
            <p className="text-gray-600">
              "I was skeptical about getting a quality website in just 24 hours, but Winterscale Media proved me wrong.
              The process was smooth and the result was fantastic."
            </p>
          </div>

          {/* Testimonial 3 - Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#5BC0EB] hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#5BC0EB]/20 rounded-full mr-4 flex items-center justify-center text-[#5BC0EB] font-bold">
                MK
              </div>
              <div>
                <h4 className="font-semibold">Client Name</h4>
                <p className="text-sm text-gray-500">Company Name</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The team at Winterscale Media understood our brand immediately and delivered a website that perfectly
              represents our business. And they did it in just one day!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
