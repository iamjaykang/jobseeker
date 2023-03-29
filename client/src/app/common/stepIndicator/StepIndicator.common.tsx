import React from "react";

interface Props {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: Props) => {
  return (
    <div className="step-indicator">
      <div className={`step-indicator__step ${currentStep === 1 ? 'active' : ''}`}>
        Choose Documents
      </div>
      <div className={`step-indicator__step ${currentStep === 2 ? 'active' : ''}`}>
        Review &amp; Submit
      </div>
    </div>
  );
};

export default StepIndicator;
