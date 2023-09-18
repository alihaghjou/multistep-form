import React from "react";
import NextButton from "./NextButton";
import StepsContainer from "./StepsContainer";

const Step1 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <StepsContainer>
      <div>

      <h1 className="font-semibold text-2xl">Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      </div>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="">Name</label>
            <span className="text-red-500">This field is required</span>
          </div>
          <input type="text" className="input ring ring-slate-200 w-full bg-inherit" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="">Email Address</label>
            <span>This field is required</span>
          </div>
          <input type="text" className="input ring ring-slate-200 w-full bg-inherit" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="">Phone Number</label>
            <span>This field is required</span>
          </div>
          <input type="text" className="input ring ring-slate-200 w-full bg-inherit" />
        </div>
      </section>
      <NextButton onClick={() => setStep(2)} />
    </StepsContainer>
  );
};

export default Step1;
