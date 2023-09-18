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
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="card card-side bg-base-100 shadow-xl">
        <input type="checkbox" checked={true} className="checkbox" />
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <input type="checkbox" checked={true} className="checkbox" />
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <input type="checkbox" checked={true} className="checkbox" />
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <button onClick={() => setStep(2)}>Previous</button>
      <NextButton onClick={() => setStep(4)} />
    </StepsContainer>
  );
};

export default Step3;
