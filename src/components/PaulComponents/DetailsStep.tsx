"use client"

import { useState } from "react"

interface DetailsStepProps {
  data: any
  onNext: (data: any) => void
  onPrevious: () => void
}

export default function DetailsStep({ data, onNext, onPrevious }: DetailsStepProps) {
  const [name, setName] = useState(data.name)
  const [email, setEmail] = useState(data.email)
  const [phone, setPhone] = useState(data.phone)

  const handleNext = () => {
    onNext({
      name,
      email,
      phone,
    })
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-8">Your Details</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-3">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 mb-3">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 mb-3">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={onPrevious}
          className="flex-1 border border-slate-300 text-slate-900 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
