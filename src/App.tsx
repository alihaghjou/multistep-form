import { useState } from "react";
import StepHandler from "./Components/StepHandler"

function App() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  return (
    <main>
      <section>
        Form Steps
      </section>
      <StepHandler step={step} setStep={setStep} />
    </main>
  );
}

export default App;
