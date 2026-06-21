"use client"

import { useState } from "react"
import AppointmentForm, { type AppointmentFormValue } from "@/components/appointment_form/appointment_form"

interface DetailsStepProps {
  data: any
  onNext: (data: any) => void
  onPrevious: () => void
}

export default function DetailsStep({ data, onNext, onPrevious }: DetailsStepProps) {
  const [formValue, setFormValue] = useState<AppointmentFormValue>({
    firstName: "",
    lastName: "",
    email: data.email || "",
    phone: data.phone || "",
    notes: "",
  });
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formValue.firstName || !formValue.lastName || !formValue.email || !formValue.phone) {
      setError("Please fill in all required fields.");
      return;
    }

    onNext({
      name: `${formValue.firstName} ${formValue.lastName}`.trim(),
      email: formValue.email,
      phone: formValue.phone,
      notes: formValue.notes,
    });
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-8">Your Details</h2>

      <div className="space-y-6">
        <AppointmentForm value={formValue} onChange={setFormValue} />
      </div>

      {error && <p className="text-red-500 text-sm mt-4" role="alert">{error}</p>}

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