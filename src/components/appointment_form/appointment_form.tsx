import React from "react";
import { InputField } from "../popupComponents";
import { Textarea } from "../popupComponents";

export type AppointmentFormValue = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

type Props = {
  value: AppointmentFormValue;
  onChange: (next: AppointmentFormValue) => void;
};

const AppointmentForm = ({ value, onChange }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full">
      <form action="" className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3">
          <InputField
            htmlFor="first-name"
            id="first-name"
            placeholder="John"
            required={true}
            text="First Name"
            type="text"
            name="firstName"
            value={value.firstName}
            onChange={handleInputChange}
          />
          <InputField
            htmlFor="last-name"
            id="last-name"
            placeholder="Doe"
            required={true}
            text="Last Name"
            type="text"
            name="lastName"
            value={value.lastName}
            onChange={handleInputChange}
          />
        </div>
        <InputField
          htmlFor="email-address"
          id="email-address"
          placeholder="johndoe@example.com"
          required={true}
          text="Email Address"
          type="email"
          name="email"
          value={value.email}
          onChange={handleInputChange}
        />
        <InputField
          htmlFor="phone-number"
          id="phone-number"
          placeholder="+1 (555) 123-4567"
          required={true}
          text="Phone Number"
          type="tel"
          name="phone"
          value={value.phone}
          onChange={handleInputChange}
        />
        <Textarea
          htmlFor="additional-notes"
          placeholder="Any special requests or information..."
          text="Additional Notes (Optional)"
          name="notes"
          value={value.notes}
          onChange={handleTextareaChange}
        />
      </form>
    </section>
  );
};

export default AppointmentForm;