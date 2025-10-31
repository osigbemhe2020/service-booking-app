"use client"

import React, { useState, useEffect } from 'react';

interface BookingData {
  service: string;
  provider: string;
  date: string;
  time: string;
  duration: number;
  serviceFee: number;
  bookingFee: number;
  name: string;
  email: string;
  phone: string;
}

interface BookingSelection {
  date: string;
  time: string;
  dateObject: Date;
  timestamp: number;
}

interface DateTimePickerProps {
  onSelectionChange?: (selection: BookingSelection) => void;
  initialDate?: string;
  initialTime?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ 
  onSelectionChange,
  initialDate,
  initialTime 
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(initialTime || null);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  // Generate 14 days from current date
  useEffect(() => {
    const dates: Date[] = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    setAvailableDates(dates);
    
    // Set initial date if provided
    if (initialDate && dates.length > 0) {
      setSelectedDate(dates[0]);
    }
  }, [initialDate]);

  // Available time slots
  const timeSlots: string[] = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const handleDateClick = (date: Date): void => {
    setSelectedDate(date);
    updateSelection(date, selectedTime);
  };

  const handleTimeClick = (time: string): void => {
    setSelectedTime(time);
    updateSelection(selectedDate, time);
  };

  const updateSelection = (date: Date | null, time: string | null): void => {
    if (date && time && onSelectionChange) {
      const dateStr = date.toLocaleDateString('en-US', { 
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      onSelectionChange({
        date: dateStr,
        time: time,
        dateObject: date,
        timestamp: new Date(`${date.toDateString()} ${time}`).getTime()
      });
    }
  };

  const getDayName = (date: Date): string => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getDay = (date: Date): number => {
    return date.getDate();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-slate-200 p-6">
      <h2 className="text-2xl font-semibold mb-6 text-slate-900">Date & Time</h2>
      
      {/* Date Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-slate-900">Select a Date</h3>
        <div className="grid grid-cols-7 gap-2">
          {availableDates.map((date, index) => (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedDate && selectedDate.toDateString() === date.toDateString()
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              <div className="text-xs mb-1">{getDayName(date)}</div>
              <div className="text-xl font-semibold">{getDay(date)}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div>
        <h3 className="text-lg font-medium mb-4 text-slate-900">Available Times</h3>
        <div className="grid grid-cols-6 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeClick(time)}
              className={`py-3 px-4 rounded-lg border-2 transition-all font-medium ${
                selectedTime === time
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};




// DateTimeStep component that integrates with BookingFlow
interface DateTimeStepProps {
  data: BookingData;
  onNext: (data: Partial<BookingData>) => void;
}

const DateTimeStep: React.FC<DateTimeStepProps> = ({ data, onNext }) => {
  const [selectedData, setSelectedData] = useState<BookingSelection | null>(null);

  const handleSelectionChange = (selection: BookingSelection): void => {
    setSelectedData(selection);
  };

  const handleContinue = (): void => {
    if (selectedData) {
      onNext({
        date: selectedData.date,
        time: selectedData.time,
      });
    }
  };

  return (
    <div className="space-y-6">
      <DateTimePicker 
        onSelectionChange={handleSelectionChange}
        initialDate={data.date}
        initialTime={data.time}
      />
      
      {selectedData && (
        <div className="flex justify-end">
          <button
            onClick={handleContinue}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default DateTimeStep