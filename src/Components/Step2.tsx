import React from "react";

const Step2 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <article>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <button className="btn btn-outline"></button>
        <button className="btn btn-outline"></button>
        <button className="btn btn-outline"></button>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Monthly</span>
          <input type="checkbox" className="toggle" checked />
          <span className="label-text">Yearly</span>
        </label>
      </div>
      <button onClick={() => setStep(1)}>Previous</button>
      <button onClick={() => setStep(3)}>Next</button>
    </article>
  );
};

export default Step2;
