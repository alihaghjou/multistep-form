import React from "react";
import NextButton from "./NextButton";
import StepsContainer from "./StepsContainer";

const Step2 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <StepsContainer>
      <div>
        <h1 className="font-bold text-2xl">Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="flex w-full flex-row justify-between">
        <button className="btn btn-outline">Arcade</button>
        <button className="btn btn-outline">Advanced</button>
        <button className="btn btn-outline">Pro</button>
      </div>
      <div className="form-control bg-cyan-100 rounded flex flex-row py-3 justify-center items-center gap-6">
        <span className="label-text font-semibold">Monthly</span>
        <input type="checkbox" className="toggle" checked />
        <span className="label-text font-semibold">Yearly</span>
      </div>
      <div className="mt-10 flex justify-between">
        <button onClick={() => setStep(1)}>Previous</button>
        <NextButton onClick={() => setStep(3)} />
      </div>
    </StepsContainer>
  );
};

export default Step2;
