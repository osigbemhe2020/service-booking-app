"use client"

import { useState } from "react"

interface PaymentStepProps {
  data: any
  onNext: (data: any) => void
  onPrevious: () => void
}

export default function PaymentStep({ data, onNext, onPrevious }: PaymentStepProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")

  const handleNext = () => {
    onNext({})
  }

  const total = data.serviceFee + data.bookingFee

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-8">Payment Details</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-3">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-3">Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-3">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-600">Total Amount</span>
            <span className="text-2xl font-bold text-slate-900">${total}</span>
          </div>
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
          className="flex-1 bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
        >
          Pay ${total}
        </button>
      </div>
    </div>
  )
}
