import React from "react";
import { useField } from "formik";

interface Option {
  value: string;
  text: string;
}

interface Props {
  label?: string;
  name: string;
  options: Option[];
  formtype?: string;
  placeholder: string;
}

const MySelectInput = (props: Props) => {
  const [field, meta, helpers] = useField(props.name);

  const labelClassName = props.formtype
    ? `${props.formtype}__label`
    : undefined;

  const selectClassName = props.formtype
    ? `${props.formtype}__select`
    : undefined;
    
  return (
    <>
      <label htmlFor={props.name} className={labelClassName}>
        {props.label}
      </label>
      <select
        className={selectClassName}
        value={field.value || ""}
        name={props.name}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          helpers.setValue(e.target.value)
        }
      >
        <option value="">{`---- Select ${props.placeholder} ----`}</option>
        {props.options.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className={`${props.formtype}__below-label`}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default MySelectInput;
