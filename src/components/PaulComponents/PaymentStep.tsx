"use client"

import { useState } from "react"
import AddPaymentForm from "../appointment_form/AddPaymentForm"

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
      

      <div className="space-y-2">
        <AddPaymentForm/>
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
