export const FormStep = ({ step }: { step: 1 | 2 | 3 | 4 }) => {
  return (
    <section className="bg-desktop-bg rounded-lg p-6 px-12 text-white flex flex-col gap-8 w-2/5 bg-cover">
      <div className="flex items-center gap-4">
        <div
          className="ring-1 ring-white rounded-full flex justify-center items-center"
          style={step === 1 ?{ height: "35px", width: "35px", backgroundColor: "white", color: "blue" }: {height: "35px", width: "35px"}}
        >
          1
        </div>
        <div className="flex flex-col">
          <span>STEP ONE</span>
          <span>YOUR INFO</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className="ring-1 ring-white rounded-full flex justify-center items-center"
          style={step === 2 ?{ height: "35px", width: "35px", backgroundColor: "white", color: "blue" }: {height: "35px", width: "35px"}}
        >
          2
        </div>
        <div className="flex flex-col">
          <span>STEP TWO</span>
          <span>SELECT PLAN</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className="ring-1 ring-white rounded-full flex justify-center items-center"
          style={step === 3 ?{ height: "35px", width: "35px", backgroundColor: "white", color: "blue" }: {height: "35px", width: "35px"}}
        >
          3
        </div>
        <div className="flex flex-col">
          <span>STEP THREE</span>
          <span>ADD-ONS</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className="ring-1 ring-white rounded-full flex justify-center items-center"
          style={step === 4 ?{ height: "35px", width: "35px", backgroundColor: "white", color: "blue" }: {height: "35px", width: "35px"}}
        >
          4
        </div>
        <div className="flex flex-col">
          <span>STEP FOUR</span>
          <span>SUMMARY</span>
        </div>
      </div>
    </section>
  );
};
