import { useState } from "react";
import StepHandler from "./Components/StepHandler";
import { FormStep } from "./Components/FormStep";

function App() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  return (
    <main className="flex h-3/4 p-3 rounded-lg w-4/5 gap-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
      <FormStep step={step} />
      <StepHandler step={step} setStep={setStep} />
    </main>
  );
}

export default App;
