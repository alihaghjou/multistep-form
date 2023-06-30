import React from "react";

const Step2 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <div>
      step2
      <button onClick={() => setStep(1)}>Previous</button>
      <button onClick={() => setStep(3)}>Next</button>
    </div>
  );
};

export default Step2;
