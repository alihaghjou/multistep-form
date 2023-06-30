import React from "react";

const Step4 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <article>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        
      </div>
      <button onClick={() => setStep(3)}>Previous</button>
    </article>
  );
};

export default Step4;
