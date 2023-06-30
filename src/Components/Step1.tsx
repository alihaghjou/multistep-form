import React from "react";

const Step1 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <article>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div>
        <label htmlFor="">Name</label>
        <span>This field is required</span>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Email Address</label>
        <span>This field is required</span>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Phone Number</label>
        <span>This field is required</span>
        <input type="text" />
      </div>
      <button onClick={() => setStep(2)}>Next</button>
    </article>
  );
};

export default Step1;
