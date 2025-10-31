import React from "react";
import InputField from "../Input";
import Textarea from "../TextAreaa";

const AppointmentForm = () => {
  return (
    <section className="w-full">
      <form
        action=""
        className="border border-secondary500 rounded-[14px] p-6 flex flex-col gap-3"
      >
        <h4 className="text-secondary50">Your details</h4>
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
      <AddPaymentForm />
    </section>
  );
};

export default AppointmentForm;

function AddPaymentForm() {
  return (
    <form className="border border-secondary500 rounded-[14px] p-6 flex flex-col gap-7">
      <h4 className="text-secondary50">Payment</h4>
      <h4 className="text-secondary50">Payment Method</h4>
      <div>
        <ul className="flex flex-col gap-3">
          <li className=" border border-secondary400 py-4 px-8 rounded-[14px] flex  gap-3 ">
            Credit/Debit card
            <p className="flex gap-2 ">
              {["Visa", "MasterCard"].map((item) => (
                <span
                  key={item}
                  className="border text-sm border-secondary300 rounded-xl px-2"
                >
                  {item}
                </span>
              ))}
            </p>
          </li>
          <li className=" border border-secondary400 py-4 px-8 rounded-[14px] flex  gap-3 ">
            Paypal
            <span className="border text-sm border-secondary300 rounded-xl px-2">
              paypal
            </span>
          </li>
          <li className=" border border-secondary400 py-4 px-8 rounded-[14px] flex  gap-3 ">
            Pay at Venue
            <span className="border text-sm border-secondary300 rounded-xl px-2 bg-secondary500">
              No payment needed now
            </span>
          </li>
        </ul>
      </div>
      <section>
        <InputField
          htmlFor="card-number"
          id="card-number"
          placeholder="1234 5678 9012 3456"
          required={true}
          text="Card Number"
          type="number"
        />

        <div>
          <InputField
            htmlFor="expiry-date"
            id="expiry-date"
            placeholder="MM/YY"
            required={true}
            text="Expiry Date"
            type="text"
          />
          <InputField
            htmlFor="cvv"
            id="cvv"
            placeholder="123"
            required={true}
            text="CVV"
            type="number"
          />
        </div>
      </section>
    </form>
  );
}
