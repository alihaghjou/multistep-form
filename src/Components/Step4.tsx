import React from "react";
import StepsContainer from "./StepsContainer";

const Step4 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <StepsContainer>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        
      </div>
      <button onClick={() => setStep(3)}>Previous</button>
    </StepsContainer>
  );
};

export default Step4;
