"use client"

interface ConfirmationStepProps {
  data: any
}

export default function ConfirmationStep({ data }: ConfirmationStepProps) {
  const total = data.serviceFee + data.bookingFee

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Booking Confirmed!</h2>
        <p className="text-slate-600">
          Your appointment has been successfully booked. You'll receive a confirmation email shortly.
        </p>
      </div>

      <div className="bg-slate-50 rounded-lg p-6 mb-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-600 mb-1">Service</p>
            <p className="font-medium text-slate-900">{data.service}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Provider</p>
            <p className="font-medium text-slate-900">{data.provider}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Date & Time</p>
            <p className="font-medium text-slate-900">
              {data.date} at {data.time}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Duration</p>
            <p className="font-medium text-slate-900">{data.duration} minutes</p>
          </div>
        </div>
      </div>

      

      <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
        View My Bookings
      </button>
    </div>
  )
}
