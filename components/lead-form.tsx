"use client"

import { useState } from "react"
import { submitLeadForm } from "@/app/actions"

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)

    try {
      // Call the server action to submit the form
      const result = await submitLeadForm(formData)

      if (result.success) {
        setIsSuccess(true)
        // Reset form
        const form = document.getElementById("lead-form") as HTMLFormElement
        form?.reset()
      } else {
        setError(result.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We've received your information and will contact you shortly to schedule your free 15-minute call.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="inline-flex items-center justify-center rounded-md bg-[#5BC0EB] px-6 py-3 text-base font-medium text-white shadow hover:bg-[#5BC0EB]/90 transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      id="lead-form"
      action={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-[#5BC0EB]/20"
    >
      {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5BC0EB]"
            placeholder="John Smith"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5BC0EB]"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5BC0EB]"
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="website" className="text-sm font-medium">
            Business Website (Optional)
          </label>
          <input
            id="website"
            name="website"
            type="url"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5BC0EB]"
            placeholder="https://example.com"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            Tell us about your project <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5BC0EB]"
            placeholder="I need a website for my business that..."
          ></textarea>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#5BC0EB] to-[#4A2FBD] px-6 py-4 text-lg font-medium text-white shadow-lg hover:opacity-90 transition-all disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Book My Free 15-Minute Call"}
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500 text-center">
        By submitting this form, you agree to our{" "}
        <a href="#" className="text-[#5BC0EB] hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#5BC0EB] hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  )
}
