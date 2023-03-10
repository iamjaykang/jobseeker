import React, { useState } from "react";
import axios from "axios";
import "./testError.styles.css";
import ValidationError from "./validationError/ValidationError.component";

const TestErrors = () => {
  const baseUrl = "http://localhost:5000/api/";

  const [errors, setErrors] = useState(null);

  function handleNotFound() {
    axios
      .get(baseUrl + "buggy/not-found")
      .catch((err) => console.log(err.response));
  }

  function handleBadRequest() {
    axios
      .get(baseUrl + "buggy/bad-request")
      .catch((err) => console.log(err.response));
  }

  function handleServerError() {
    axios
      .get(baseUrl + "buggy/server-error")
      .catch((err) => console.log(err.response));
  }

  function handleUnauthorised() {
    axios
      .get(baseUrl + "buggy/unauthorised")
      .catch((err) => console.log(err.response));
  }

  function handleBadGuid() {
    axios
      .get(baseUrl + "jobs/notaguid")
      .catch((err) => console.log(err.response));
  }

  function handleValidationError() {
    axios.post(baseUrl + "jobs", {}).catch((err) => setErrors(err));
  }

  return (
    <>
      <h1 className="test-errors__header">Test Error component</h1>
      <div className="test-errors__container">
        <button className="test-errors__button" onClick={handleNotFound}>
          Not Found
        </button>
        <button className="test-errors__button" onClick={handleBadRequest}>
          Bad Request
        </button>
        <button className="test-errors__button" onClick={handleValidationError}>
          Validation Error
        </button>
        <button className="test-errors__button" onClick={handleServerError}>
          Server Error
        </button>
        <button className="test-errors__button" onClick={handleUnauthorised}>
          Unauthorised
        </button>
        <button className="test-errors__button" onClick={handleBadGuid}>
          Bad Guid
        </button>
      </div>
      {errors && <ValidationError errors={errors} />}
    </>
  );
};

export default TestErrors;
