import React from "react";
import NextButton from "./NextButton";
import StepsContainer from "./StepsContainer";

const Step3 = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  return (
    <StepsContainer>
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <section className="flex flex-col gap-3">
        <div className="card card-side bg-base-100 shadow-xl">
          <div className="card-body flex-row">
            <input type="checkbox" checked={true} className="checkbox" />
            <div>
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <div className="card-body flex-row">
            <input type="checkbox" checked={true} className="checkbox" />
            <div>
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <div className="card-body flex-row">
            <input type="checkbox" checked={true} className="checkbox" />
            <div>
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-between">
        <button onClick={() => setStep(2)}>Previous</button>
        <NextButton onClick={() => setStep(4)} />
      </div>
    </StepsContainer>
  );
};

export default Step3;
