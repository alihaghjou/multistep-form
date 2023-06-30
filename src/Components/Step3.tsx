import React from "react";

const Step3 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <div>
      step3
      <button onClick={() => setStep(2)}>Previous</button>
      <button onClick={() => setStep(4)}>Next</button>
    </div>
  );
};

export default Step3;
