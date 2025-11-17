import React from "react";
import { InputField } from "../popupComponents";
import { Textarea } from "../popupComponents";

const AppointmentForm = () => {
  return (
    <section className="w-full">
      <form
        action=""
        className="flex flex-col gap-4"
      >
        
        <div className=" grid grid-cols-2 gap-3 ">
          <InputField
            htmlFor="first name"
            id="first-name"
            placeholder="John"
            required={true}
            text="First Name"
            type="text"
          />
          <InputField
            htmlFor="last name"
            id="last-name"
            placeholder="Doe"
            required={true}
            text="Last Name"
            type="text"
          />
        </div>
        <InputField
          htmlFor="email-address"
          id="email-address"
          placeholder="johndoe@example.com"
          required={true}
          text="Email Address"
          type="email"
        />
        <InputField
          htmlFor="phone number"
          id="phone number"
          placeholder="+1 (555) 123-4567"
          required={true}
          text="Phone Number"
          type="phone"
        />
        <Textarea
          htmlFor="additional notes"
          placeholder="Any special requests or information..."
          text="Additional Notes (Optional)"
        />
      </form>
    </section>
  );
};

export default AppointmentForm;


