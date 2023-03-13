import React from "react";
import { useField } from "formik";

interface Props {
  name: string;
  placeholder: string;
  rows: number;
  label?: string;
  type?: string;
  formtype?: string;
}

const MyTextArea = (props: Props) => {
  const [field, meta] = useField(props.name);

  const labelClassName = props.formtype
    ? `${props.formtype}__label`
    : undefined;

  const inputClassName = props.formtype
    ? `${props.formtype}__input`
    : undefined;

  return (
    <>
      <label htmlFor={props.name} className={labelClassName}>
        {props.label}
      </label>
      <textarea
        className={inputClassName}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={`${props.formtype}__below-label`}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyTextArea;
