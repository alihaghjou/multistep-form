import React from "react";

const Step4 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <div>
      step4
      <button onClick={() => setStep(3)}>Previous</button>
    </div>
  );
};

export default Step4;
