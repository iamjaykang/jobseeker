import React, { Dispatch, SetStateAction } from "react";

interface Props {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const StepIndicator = ({ currentStep, setCurrentStep }: Props) => {
  const handleChooseDocumentsClick = () => {
    setCurrentStep(1);
  };

  const handleReviewSubmitClick = () => {
    setCurrentStep(2);
  };

  return (
    <div className="step-indicator">
      <button className={`step-indicator__step ${currentStep === 1 ? 'active' : ''}`} onClick={handleChooseDocumentsClick}>
        Choose Documents
      </button>
      <button className={`step-indicator__step ${currentStep === 2 ? 'active' : ''}`} onClick={handleReviewSubmitClick}>
        Review &amp; Submit
      </button>
    </div>
  );
};

export default StepIndicator;
