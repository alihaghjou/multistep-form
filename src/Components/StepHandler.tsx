import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const StepHandler = ({
  step,
  setStep,
}: {
  step: 1 | 2 | 3 | 4;
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}) => {
  switch (step) {
    case 1:
      return <Step1 setStep={setStep} />;
      break;
    case 2:
      return <Step2 setStep={setStep}/>;
      break;
    case 3:
      return <Step3 setStep={setStep}/>;
      break;
    case 4:
      return <Step4 setStep={setStep}/>;
      break;
  }
};

export default StepHandler;
