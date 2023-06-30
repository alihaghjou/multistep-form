import React from "react";

const Step1 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <div>
      step1
      <button onClick={() => setStep(2)}>Next</button>
    </div>
  );
};

export default Step1;
