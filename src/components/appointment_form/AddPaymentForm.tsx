import React from "react";
import { InputField } from "../popupComponents";


export default function AddPaymentForm() {
  return (
    <form className=" rounded-[14px]  flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-slate-900 mb-3">Payment</h2>
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

        <div className="grid grid-cols-2 gap-4 mt-3">
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