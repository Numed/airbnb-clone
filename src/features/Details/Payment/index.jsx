import { useState } from "react";

import { cn } from "../../../utils";

const PaymentSection = ({ price }) => {
  const [selectedPayment, setSelectedPayment] = useState("full-price");
  const halfPrice = ((price + 25) / 2).toFixed(2);
  return (
    <section className="p-4 rounded-xl bg-white">
      <div className="space-y-4">
        <label
          className={cn(
            selectedPayment === "full-price" ? "bg-mintGreen" : "",
            "flex items-center justify-between p-4 rounded-xl"
          )}
        >
          <div className="flex items-start justify-start flex-col">
            <h3 className="text-base font-bold text-blackishGreen mb-2">
              Pay in full
            </h3>
            <h4 className="text-sm text-blackishGreen max-w-[40rem]">
              Pay the total and you are all set
            </h4>
          </div>
          <input
            className="accent-white form-radio form-radio-checked border-white outline-white"
            type="radio"
            name="payment"
            value="full-price"
            onChange={(e) => setSelectedPayment(e.target.value)}
            defaultChecked
          />
        </label>
        <label
          className={cn(
            selectedPayment === "part-price" ? "bg-mintGreen" : "",
            "flex items-center justify-between p-4 rounded-xl"
          )}
        >
          <div className="flex items-start justify-start flex-col">
            <h3 className="text-base font-bold text-blackishGreen mb-2">
              Pay part now, part later
            </h3>
            <h4 className="text-sm text-blackishGreen w-4/5 lg:max-w-[40rem]">
              Pay ${halfPrice} now, and the rest (${halfPrice}) will be
              automatically charged. No extra fees.
            </h4>
          </div>
          <input
            className="accent-white form-radio form-radio-checked border-white outline-white"
            type="radio"
            name="payment"
            value="part-price"
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
        </label>
      </div>
    </section>
  );
};

export default PaymentSection;
