import React from "react";

interface Props {
  disabled: boolean;
  buttonType: string;
  label: string;
}

const MySubmitButton = (props: Props) => {
  const buttonClassName = props.buttonType
    ? `${props.buttonType}__button`
    : undefined;
  return (
    <button
      className={buttonClassName}
      type="submit"
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default MySubmitButton;
